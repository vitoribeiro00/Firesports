package dao

import (
	"database/sql"
	"fmt"
	"model"

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
	r, err := db.Query("SELECT usuarioid, nome, sobrenome, data_nasc, usuario, email FROM usuario WHERE usuario='" + usuario + "' and senha ='" + senha + "'")
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

	query := fmt.Sprint("SELECT torneioid, nome, descricao, sala_com_senha, TO_CHAR(data_criacao :: DATE, 'dd/mm/yyyy'), senha, qtd_por_equipe, qtd_equipe FROM torneio where jogoid=" + jogoId + " ORDER BY nome ASC")

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

	query := fmt.Sprint("select E.equipeid, E.nome from usuario_equipe as UE INNER JOIN usuario as U ON UE.usuarioid = U.usuarioid INNER JOIN equipe as E ON UE.equipeid = E.equipeid WHERE U.usuarioid = " + usuarioId)
	sqlStatement, err := db.Query(query)

	CheckErr(err)
	defer db.Close()

	var times []model.Time

	for sqlStatement.Next() {

		var time model.Time

		err = sqlStatement.Scan(&time.TimeId, &time.Nome)
		CheckErr(err)
		times = append(times, time)
	}

	defer sqlStatement.Close()
	return times
}

func AdicionarJogo(nome string, descricao string, genero string, data_lancamento string, req_qtd_min_usuario string, req_qtd_max_usuario string) int64 {
	db := OpenConnection()

	query := fmt.Sprint("INSERT INTO jogo (nome, descricao, genero, data_lancamento, req_qtd_min_usuario, req_qtd_max_usuario) VALUES ($1, $2, $3, $4, $5, $6) RETURNING usuarioid")

	id := 0

	db.QueryRow(query, nome, descricao, genero, data_lancamento, req_qtd_min_usuario, req_qtd_max_usuario).Scan(&id)

	return int64(id)
}

func AdicionarTorneio(jogoid string, nome string, descricao string, sala_com_senha string, senha string, qtd_por_equipe string, qtd_equipe string) int64 {
	db := OpenConnection()

	query := fmt.Sprint("INSERT INTO torneio (jogoid, nome, descricao, sala_com_senha, senha, qtd_por_equipe, qtd_equipe) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING usuarioid")

	id := 0

	db.QueryRow(query, jogoid, nome, descricao, sala_com_senha, senha, qtd_por_equipe, qtd_equipe).Scan(&id)

	return int64(id)
}

func BuscarRank() []model.Rank {
	db := OpenConnection()

	query := fmt.Sprint("select count(TV.equipeid) as Vitoria, E.nome from torneio_vencedor as TV inner join torneio as T on TV.torneioid = T.torneioid inner join equipe as E on TV.equipeid = E.equipeid group by E.nome order by Vitoria desc")

	sqlStatement, err := db.Query(query)

	CheckErr(err)
	defer db.Close()

	var ranks []model.Rank

	for sqlStatement.Next() {

		var rank model.Rank

		err = sqlStatement.Scan(&rank.Vitoria, &rank.Nome)
		CheckErr(err)
		ranks = append(ranks, rank)
	}

	defer sqlStatement.Close()
	return ranks
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
