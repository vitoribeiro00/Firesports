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

func BuscarUsuario(usuario string, senha string) int64 {
	db := OpenConnection()
	r, err := db.Query("SELECT usuarioid FROM usuario WHERE usuario='" + usuario + "' and senha ='" + senha + "'")
	CheckErr(err)
	defer db.Close()

	id := 0
	for r.Next() {
		err := r.Scan(&id)
		if err != nil {
			fmt.Printf("Falha ao buscar usuario")
		}
	}

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
