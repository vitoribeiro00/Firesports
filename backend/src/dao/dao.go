package dao

import (
	"database/sql"
	"fmt"
	"model"
	"strconv"

	dbConfig "github.com/modules/gopostgres/dbconfig"

	_ "github.com/lib/pq"
)

var err error

func CheckErr(err error) {
	if err != nil {
		panic(err.Error())
	}
}

func OpenConnection() *sql.DB {

	db, err := sql.Open(dbConfig.PostgresDriver, dbConfig.DataSourceName)

	if err != nil {
		panic(err.Error())
	} else {
		fmt.Println("Connected!")
	}

	return db
}

func BuscarUsuario(usuario string, senha string) model.Usuario {
	db := OpenConnection()
	r, err := db.Query("SELECT usuarioid, nome, sobrenome, COALESCE(TO_CHAR(data_nasc :: DATE, 'yyyy-mm-dd'), '-'), usuario, email FROM usuario WHERE usuario='" + usuario + "' and senha ='" + senha + "'")
	CheckErr(err)
	defer db.Close()

	var user model.Usuario
	for r.Next() {
		err := r.Scan(&user.Id, &user.Nome, &user.Sobrenome, &user.Data_Nasc, &user.Usuario, &user.Email)
		if err != nil {
			fmt.Printf("Falha ao buscar usuario")
		}
	}

	return user
}

func AtualizarUsuario(usuarioid string, nome string, sobrenome string, data_nasc string, usuario string, email string) int64 {
	db := OpenConnection()

	query := fmt.Sprint("UPDATE usuario SET nome=$1, sobrenome=$2, data_nasc=$3, usuario=$4, email=$5 WHERE usuarioid=" + usuarioid + " RETURNING usuarioid" )

	id := 0

	db.QueryRow(query, nome, sobrenome, data_nasc, usuario, email).Scan(&id)

	return int64(id)
}

func CadastrarUsuario(nome string, sobrenome string, data_nasc string, usuario string, email string, senha string) int64 {
	db := OpenConnection()

	query := fmt.Sprint("INSERT INTO usuario (nome, sobrenome, data_nasc, usuario, senha, email) VALUES ($1, $2, $3, $4, $5, $6) RETURNING usuarioid")

	id := 0

	db.QueryRow(query, nome, sobrenome, data_nasc, usuario, senha, email).Scan(&id)

	return int64(id)
}

func BuscarJogos() []model.Jogo {
	db := OpenConnection()

	query := fmt.Sprint("SELECT jogoid, nome, descricao, genero, data_lancamento, req_qtd_min_usuario, req_qtd_max_usuario, Image FROM jogo ORDER BY nome ASC")

	sqlStatement, err := db.Query(query)

	CheckErr(err)
	defer db.Close()

	var jogos []model.Jogo

	for sqlStatement.Next() {

		var jogo model.Jogo

		err = sqlStatement.Scan(&jogo.JogoId, &jogo.Nome, &jogo.Descricao, &jogo.Genero, &jogo.Data_Lancamento, &jogo.Req_qtd_min_usuario, &jogo.Req_qtd_max_usuario, &jogo.Image)
		CheckErr(err)

		jogos = append(jogos, jogo)
	}

	defer sqlStatement.Close()
	return jogos
}

func BuscarTorneios(jogoId string) []model.Torneio {
	db := OpenConnection()

	query := fmt.Sprint("SELECT torneioid, nome, descricao, sala_com_senha, COALESCE(TO_CHAR(data_criacao :: DATE, 'dd/mm/yyyy'), '-'), senha, qtd_por_equipe, qtd_equipe FROM torneio where jogoid=" + jogoId + " ORDER BY nome ASC")

	sqlStatement, err := db.Query(query)

	CheckErr(err)
	defer db.Close()

	var torneios []model.Torneio

	for sqlStatement.Next() {

		var torneio model.Torneio

		err = sqlStatement.Scan(&torneio.TorneioId, &torneio.Nome, &torneio.Descricao, &torneio.Sala_com_senha, &torneio.Data_criacao, &torneio.Senha, &torneio.Qtd_por_equipe, &torneio.Qtd_equipe)
		CheckErr(err)
		torneios = append(torneios, torneio)
	}

	defer sqlStatement.Close()
	return torneios
}

func BuscarTimes(usuarioId string) []model.Time {
	db := OpenConnection()

	query := fmt.Sprint("select E.equipeid, E.nome, UE.usuario_dono from usuario_equipe as UE INNER JOIN usuario as U ON UE.usuarioid = U.usuarioid INNER JOIN equipe as E ON UE.equipeid = E.equipeid WHERE U.usuarioid = " + usuarioId)
	sqlStatement, err := db.Query(query)

	CheckErr(err)
	defer db.Close()

	var times []model.Time

	for sqlStatement.Next() {

		var time model.Time

		err = sqlStatement.Scan(&time.TimeId, &time.Nome, &time.Usuario_Dono)
		CheckErr(err)
		times = append(times, time)
	}

	defer sqlStatement.Close()
	return times
}

func AdicionarJogo(nome string, descricao string, genero string, data_lancamento string, req_qtd_min_usuario string, req_qtd_max_usuario string) int64 {
	db := OpenConnection()

	query := fmt.Sprint("INSERT INTO jogo (nome, descricao, genero, data_lancamento, req_qtd_min_usuario, req_qtd_max_usuario) VALUES ($1, $2, $3, $4, $5, $6) RETURNING jogoid")

	id := 0

	db.QueryRow(query, nome, descricao, genero, data_lancamento, req_qtd_min_usuario, req_qtd_max_usuario).Scan(&id)

	return int64(id)
}

func AdicionarTorneio(jogoid string, nome string, descricao string, sala_com_senha string, senha string, qtd_por_equipe string, qtd_equipe string) int64 {
	db := OpenConnection()

	query := fmt.Sprint("INSERT INTO torneio (jogoid, nome, descricao, sala_com_senha, senha, qtd_por_equipe, qtd_equipe) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING torneioid")

	id := 0

	db.QueryRow(query, jogoid, nome, descricao, sala_com_senha, senha, qtd_por_equipe, qtd_equipe).Scan(&id)

	return int64(id)
}

func AdicionarTimeTorneio(usuarioid string, torneioid string, time string) int64 {
	db := OpenConnection()
	
	query_time := fmt.Sprint("SELECT equipeid FROM equipe WHERE nome = '" + time + "'")

	timeid := 0

	db.QueryRow(query_time).Scan(&timeid)

	if timeid == 0 {
		return int64(-1)
	}

	query_usuario_time := fmt.Sprint("SELECT COUNT(*) FROM usuario_equipe WHERE equipeid=" + strconv.Itoa(timeid) + " and usuarioid = " + usuarioid + " and usuario_dono = " + usuarioid)
	isUsuarioDono := 0

	db.QueryRow(query_usuario_time).Scan(&isUsuarioDono)

	if isUsuarioDono == 0 {
		return int64(-2)
	}

	time_in_tournament := 0
	
	for i := 1; i <= 5; i ++ {
		if time_in_tournament == 0 {
			query_torneio_partida := fmt.Sprint("SELECT COUNT(*) FROM partida_torneio WHERE partida = 1 and torneioid = " + torneioid + " and time_" + strconv.Itoa(i) + "_id = " + strconv.Itoa(timeid))
			db.QueryRow(query_torneio_partida).Scan(&time_in_tournament)
		}
	} 
	
	if time_in_tournament > 0 {
		return int64(-3)
	}

	torneio_tem_partida := 0

	query_torneio_tem_partida := fmt.Sprint("SELECT COUNT(*) FROM partida_torneio WHERE torneioid = " + torneioid + " and partida > 1")

	db.QueryRow(query_torneio_tem_partida).Scan(&torneio_tem_partida)

	if torneio_tem_partida > 0 {
		return int64(-4)
	}

	partida_torneio_id := 0

	query_criar_torneio_partida := fmt.Sprint("SELECT partida_torneioid FROM partida_torneio WHERE torneioid = " + torneioid + " and partida = 1")
	db.QueryRow(query_criar_torneio_partida).Scan(&partida_torneio_id)

	if partida_torneio_id == 0 {
		query_insert_torneio_partida := fmt.Sprint("INSERT INTO partida_torneio (torneioid, fase, partida) VALUES (" + torneioid + ", 1, 1) RETURNING partida_torneioid")

		db.QueryRow(query_insert_torneio_partida).Scan(&partida_torneio_id)
	}

	for i := 1; i <= 5; i++ {
		time_empty := 0

		query_partida_and_time_empty := fmt.Sprint("SELECT COUNT(*) FROM partida_torneio WHERE partida_torneioid = " + strconv.Itoa(partida_torneio_id) +  " and time_" + strconv.Itoa(i) + "_id is NULL")
		fmt.Println(query_partida_and_time_empty)
		db.QueryRow(query_partida_and_time_empty).Scan(&time_empty)

		if time_empty > 0 {
			query_partida_time := fmt.Sprint("UPDATE partida_torneio SET time_" + strconv.Itoa(i) + "_id = " + strconv.Itoa(timeid) + " WHERE partida_torneioid = " + strconv.Itoa(partida_torneio_id))
			db.QueryRow(query_partida_time)
			break;
		}
	}

	return int64(partida_torneio_id)
}

func BuscarRank() []model.Rank {
	db := OpenConnection()

	query := fmt.Sprint("SELECT nome , COUNT(*) as qtd_vitorias FROM partida_torneio as PT INNER JOIN equipe AS E ON PT.vencedor_torneio_id = E.equipeid GROUP BY nome ORDER BY qtd_vitorias DESC")

	sqlStatement, err := db.Query(query)

	CheckErr(err)
	defer db.Close()

	var ranks []model.Rank

	for sqlStatement.Next() {

		var rank model.Rank

		err = sqlStatement.Scan(&rank.Nome, &rank.Vitoria)
		CheckErr(err)
		ranks = append(ranks, rank)
	}

	defer sqlStatement.Close()
	return ranks
}

func BuscarTorneioPartida(idTorneio string) []model.TorneioPartidas {
	db := OpenConnection()
	query := fmt.Sprint("SELECT DISTINCT fase FROM partida_torneio WHERE torneioid = " + idTorneio)
	sqlStatement, err := db.Query(query)

	CheckErr(err)
	defer db.Close()

	var fases []model.Fase

	for sqlStatement.Next() {

		var fase model.Fase

		err = sqlStatement.Scan(
			&fase.Numero_Fase,
		)

		CheckErr(err)
		fases = append(fases, fase)
	}

	var torneioPartidas []model.TorneioPartidas
	for _, fase := range fases {
		db := OpenConnection()
		query := fmt.Sprint("SELECT T.nome, T.descricao, COALESCE(TO_CHAR(T.data_criacao, 'DD/MM/YYYY'), '-') as data_criacao, PT.partida, COALESCE(TO_CHAR(PT.data_partida, 'DD/MM/YYYY'), '-') as data_partida,  COALESCE(( SELECT DISTINCT _E.nome FROM partida_torneio AS _PT INNER JOIN equipe AS _E ON _PT.timevencedorid = _E.equipeid WHERE _PT.timevencedorid = PT.timevencedorid), '-') AS time_vencedor, COALESCE(( SELECT DISTINCT _E.nome FROM partida_torneio AS _PT INNER JOIN equipe AS _E ON _PT.time_1_id = PT.time_1_id WHERE _E.equipeid = PT.time_1_id), '-') AS time_A, COALESCE(( SELECT DISTINCT _E.nome FROM partida_torneio AS _PT INNER JOIN equipe AS _E ON _PT.time_1_id = PT.time_1_id WHERE _E.equipeid = PT.time_2_id), '-') AS time_B,  COALESCE(( SELECT DISTINCT _E.nome FROM partida_torneio AS _PT INNER JOIN equipe AS _E ON _PT.time_1_id = PT.time_1_id WHERE _E.equipeid = PT.time_3_id), '-') AS time_C, COALESCE(( SELECT DISTINCT _E.nome FROM partida_torneio AS _PT INNER JOIN equipe AS _E ON _PT.time_1_id = PT.time_1_id WHERE _E.equipeid = PT.time_4_id), '-') AS time_D, COALESCE(( SELECT DISTINCT _E.nome FROM partida_torneio AS _PT INNER JOIN equipe AS _E ON _PT.time_1_id = PT.time_1_id WHERE _E.equipeid = PT.time_5_id), '-') AS time_E FROM partida_torneio AS PT  INNER JOIN torneio AS T ON PT.torneioid = T.torneioid  WHERE PT.torneioid = " + idTorneio + " and fase= " + fase.Numero_Fase + " ORDER BY PT.partida, PT.fase;")
		sqlStatement, err := db.Query(query)

		CheckErr(err)
		defer db.Close()

		var partidas []model.Partida

		for sqlStatement.Next() {

			var partida model.Partida

			err = sqlStatement.Scan(
				&partida.Nome_Torneio,
				&partida.Descricao_Torneio,
				&partida.Data_Criacao_Torneio,
				&partida.Partida_Torneio,
				&partida.Data_Partida_Torneio,
				&partida.Time_Vencedor,
				&partida.Time_a,
				&partida.Time_b,
				&partida.Time_c,
				&partida.Time_d,
				&partida.Time_e,
			)

			CheckErr(err)
			partidas = append(partidas, partida)
		}
		var torneioPartida model.TorneioPartidas

		torneioPartida.Numero_Fase = fase.Numero_Fase
		torneioPartida.Partidas = append(torneioPartida.Partidas, partidas...)

		torneioPartidas = append(torneioPartidas, torneioPartida)
	}

	return torneioPartidas
}

// func SqlSelect() ([]model.Pessoa){

//     db := OpenConnection()

//     sqlStatement, err := db.Query("SELECT id, nome, sobrenome FROM " + dbConfig.TableName + " ORDER BY id ASC")
//     CheckErr(err)
//     defer db.Close()

//     var pessoas []model.Pessoa

//     for sqlStatement.Next() {

//         var pessoa model.Pessoa

//         err = sqlStatement.Scan(&pessoa.Id, &pessoa.Nome, &pessoa.Sobrenome)
//         CheckErr(err)

//         pessoas = append(pessoas, pessoa)
//     }

//     defer sqlStatement.Close()
//     return pessoas
// }

// func SqlInsert(nome string, sobrenome string) (int64){
//     db := OpenConnection()

//     query := fmt.Sprintf("INSERT INTO " + dbConfig.TableName + "(nome, sobrenome) VALUES ($1, $2) RETURNING id")

//     id := 0

//     db.QueryRow(query, nome, sobrenome).Scan(&id)

//     return int64(id)
// }

// func SqlDelete(id string) {
//     db := OpenConnection()

//     query := fmt.Sprintf("DELETE FROM pessoa WHERE id=$1")

//     db.QueryRow(query, id)
// }

// func SqlUpdate(id string, nome string, sobrenome string) (int64){
//     db := OpenConnection()

//     _id := 0

//     _query := fmt.Sprintf("UPDATE pessoa SET nome = $2, sobrenome = $3 WHERE id=$1 RETURNING id")

//     err = db.QueryRow(_query, id, nome, sobrenome).Scan(&_id)

//     CheckErr(err)

//     return int64(_id)
// }
