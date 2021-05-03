package controller

import (
	"dao"
	"encoding/json"
	"net/http"
)

type Response struct {
	StatusCode int64 `json:"StatusCode"`
}


func EntrarUsuario(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")

	err := r.ParseForm()

	if err != nil {
		json.NewEncoder(w).Encode(
			Response{
				StatusCode: 0,
			},
		)
	}

	usuario := r.PostFormValue("usuario")
	senha := r.PostFormValue("senha")

	id := dao.BuscarUsuario(usuario, senha)
	w.Header().Set("Content-Type", "application/json")

	json.NewEncoder(w).Encode(
		Response{
			StatusCode: id,
		},
	)
}

func CadastrarUsuario(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")

	err := r.ParseForm()

	if err != nil {
		json.NewEncoder(w).Encode(
			Response{
				StatusCode: 0,
			},
		)
	}
	
	nome := r.PostFormValue("nome")
	sobrenome := r.PostFormValue("sobrenome")
	dataNascimento := r.PostFormValue("dataNascimento")
	usuario := r.PostFormValue("usuario")
	email := r.PostFormValue("email")
	senha := r.PostFormValue("senha")

	id := dao.CadastrarUsuario(nome, sobrenome, dataNascimento, usuario, email, senha)

	json.NewEncoder(w).Encode(
		Response{
			StatusCode: id,
		},
	)
}

// Função usada para renderizar o arquivo Index
// func SelectAllPerson(w http.ResponseWriter, r *http.Request) {
// 	w.Header().Set("Access-Control-Allow-Origin", "*")
// 	w.Header().Set("Access-Control-Allow-Methods", "POST")

// 	var pessoas = dao.SqlSelect()

// 	// Abre a página Index e exibe todos os registrados na tela

// 	json.NewEncoder(w).Encode(pessoas)
// }

// func InsertPerson(w http.ResponseWriter, r *http.Request){
// 	w.Header().Set("Access-Control-Allow-Origin", "*")
// 	w.Header().Set("Access-Control-Allow-Methods", "POST")

// 	nome := r.PostFormValue("nome")
// 	sobrenome := r.PostFormValue("sobrenome")

// 	log.Printf("Nome: " + nome)
// 	log.Printf("Sobrenome:" + sobrenome)

// 	id := dao.SqlInsert(nome, sobrenome)

// 	w.Header().Set("Content-Type", "application/json")

// 	json.NewEncoder(w).Encode(id)
// }

// func DeletePerson(w http.ResponseWriter, r *http.Request){
// 	w.Header().Set("Access-Control-Allow-Origin", "*")
// 	w.Header().Set("Access-Control-Allow-Methods", "DELETE")

// 	id := r.PostFormValue("id")

// 	dao.SqlDelete(id)
// 	// Abre a página Index e exibe todos os registrados na tela
// 	// w.Header().Set("Content-Type", "application/json")
// }

// func UpdatePerson(w http.ResponseWriter, r *http.Request){
// 	w.Header().Set("Access-Control-Allow-Origin", "*")
// 	w.Header().Set("Access-Control-Allow-Methods", "PUT")

// 	id := r.PostFormValue("id")
// 	nome := r.PostFormValue("nome")
// 	sobrenome := r.PostFormValue("sobrenome")

// 	_id := dao.SqlUpdate(id, nome, sobrenome)

// 	// Abre a página Index e exibe todos os registrados na tela
// 	w.Header().Set("Content-Type", "application/json")
// 	json.NewEncoder(w).Encode(_id)
// }