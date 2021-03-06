package controller

import (
	"dao"
	"encoding/json"
	"fmt"
	"model"
	"net/http"
)

func EntrarUsuario(w http.ResponseWriter, r *http.Request) {
	err := r.ParseForm()

	if err != nil {
		json.NewEncoder(w).Encode(
			model.Response{
				StatusCode: 0,
			},
		)
	}

	usuario := r.PostFormValue("usuario")
	senha := r.PostFormValue("senha")

	results := dao.BuscarUsuario(usuario, senha)
	w.Header().Set("Content-Type", "application/json")

	json.NewEncoder(w).Encode(results)
}

func AtualizarUsuario(w http.ResponseWriter, r *http.Request) {
	err := r.ParseForm()

	if err != nil {
		json.NewEncoder(w).Encode(
			model.Response{
				StatusCode: 0,
			},
		)
	}

	usuarioid := r.PostFormValue("id")
	nome := r.PostFormValue("nome")
	sobrenome := r.PostFormValue("sobrenome")
	dataNascimento := r.PostFormValue("dataNasc")
	usuario := r.PostFormValue("usuario")
	email := r.PostFormValue("email")

	id := dao.AtualizarUsuario(usuarioid, nome, sobrenome, dataNascimento, usuario, email)

	json.NewEncoder(w).Encode(
		model.Response{
			StatusCode: id,
		},
	)
}

func CadastrarUsuario(w http.ResponseWriter, r *http.Request) {

	err := r.ParseForm()

	if err != nil {
		json.NewEncoder(w).Encode(
			model.Response{
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
		model.Response{
			StatusCode: id,
		},
	)
}

func BuscarJogos(w http.ResponseWriter, r *http.Request) {

	jogos := dao.BuscarJogos()

	json.NewEncoder(w).Encode(jogos)
}

func BuscarRank(w http.ResponseWriter, r *http.Request) {

	ranks := dao.BuscarRank()

	json.NewEncoder(w).Encode(ranks)
}

func BuscarTorneios(w http.ResponseWriter, r *http.Request) {

	if err := r.ParseForm(); err != nil {
		fmt.Fprintf(w, "Metodo ParseForm gerou um erro: %v", err)
	}

	if r.Method == "GET" {
		jogoId := r.Form.Get("jogoId")
		torneios := dao.BuscarTorneios(jogoId)

		json.NewEncoder(w).Encode(torneios)
	}
}

func BuscarTimes(w http.ResponseWriter, r *http.Request) {

	if err := r.ParseForm(); err != nil {
		fmt.Fprintf(w, "Metodo ParseForm gerou um erro: %v", err)
	}

	if r.Method == "GET" {
		usuarioId := r.Form.Get("usuarioId")
		times := dao.BuscarTimes(usuarioId)
		json.NewEncoder(w).Encode(times)
	}

}

func BuscarTorneioPartida(w http.ResponseWriter, r *http.Request) {

	if err := r.ParseForm(); err != nil {
		fmt.Fprintf(w, "Metodo ParseForm gerou um erro: %v", err)
	}

	if r.Method == "GET" {
		torneioId := r.Form.Get("torneioid")
		
		torneio_partidas := dao.BuscarTorneioPartida(torneioId)
		json.NewEncoder(w).Encode(torneio_partidas)
	}
}

func AdicionarJogo(w http.ResponseWriter, r *http.Request) {

	err := r.ParseForm()

	if err != nil {
		json.NewEncoder(w).Encode(
			model.Response{
				StatusCode: 0,
			},
		)
	}

	nome := r.PostFormValue("nome")
	descricao := r.PostFormValue("descricao")
	genero := r.PostFormValue("genero")
	data_lancamento := r.PostFormValue("data_lancamento")
	req_qtd_min_usuario := r.PostFormValue("req_qtd_min_usuario")
	req_qtd_max_usuario := r.PostFormValue("req_qtd_max_usuario")

	id := dao.AdicionarJogo(nome, descricao, genero, data_lancamento, req_qtd_min_usuario, req_qtd_max_usuario)

	json.NewEncoder(w).Encode(
		model.Response{
			StatusCode: id,
		},
	)
}

func DeletarJogo(w http.ResponseWriter, r *http.Request) {

	err := r.ParseForm()

	if err != nil {
		json.NewEncoder(w).Encode(
			model.Response{
				StatusCode: 0,
			},
		)
	}

}

func AdicionarTorneio(w http.ResponseWriter, r *http.Request) {

	err := r.ParseForm()

	if err != nil {
		json.NewEncoder(w).Encode(
			model.Response{
				StatusCode: 0,
			},
		)
	}

	jogoid := r.PostFormValue("jogoid")
	nome := r.PostFormValue("nome")
	descricao := r.PostFormValue("descricao")
	sala_com_senha := r.PostFormValue("sala_com_senha")
	senha := r.PostFormValue("senha")
	qtd_por_equipe := r.PostFormValue("qtd_por_equipe")
	qtd_equipe := r.PostFormValue("qtd_equipe")

	id := dao.AdicionarTorneio(jogoid, nome, descricao, sala_com_senha, senha, qtd_por_equipe, qtd_equipe)

	json.NewEncoder(w).Encode(
		model.Response{
			StatusCode: id,
		},
	)
}

func AdicionarTimeTorneio(w http.ResponseWriter, r *http.Request) {
	err := r.ParseForm()

	if err != nil {
		json.NewEncoder(w).Encode(
			model.Response{
				StatusCode: 0,
			},
		)
	}

	usuarioid := r.PostFormValue("usuarioid")
	torneioid := r.PostFormValue("torneioid")
	time := r.PostFormValue("time")

	id := dao.AdicionarTimeTorneio(usuarioid, torneioid, time)

	json.NewEncoder(w).Encode(
		model.Response{
			StatusCode: id,
		},
	)
}

func DeletarTorneio(w http.ResponseWriter, r *http.Request) {

	err := r.ParseForm()

	if err != nil {
		json.NewEncoder(w).Encode(
			model.Response{
				StatusCode: 0,
			},
		)
	}

}

// Fun????o usada para renderizar o arquivo Index
// func SelectAllPerson(w http.ResponseWriter, r *http.Request) {
// 	w.Header().Set("Access-Control-Allow-Origin", "*")
// 	w.Header().Set("Access-Control-Allow-Methods", "POST")

// 	var pessoas = dao.SqlSelect()

// 	// Abre a p??gina Index e exibe todos os registrados na tela

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
// 	// Abre a p??gina Index e exibe todos os registrados na tela
// 	// w.Header().Set("Content-Type", "application/json")
// }

// func UpdatePerson(w http.ResponseWriter, r *http.Request){
// 	w.Header().Set("Access-Control-Allow-Origin", "*")
// 	w.Header().Set("Access-Control-Allow-Methods", "PUT")

// 	id := r.PostFormValue("id")
// 	nome := r.PostFormValue("nome")
// 	sobrenome := r.PostFormValue("sobrenome")

// 	_id := dao.SqlUpdate(id, nome, sobrenome)

// 	// Abre a p??gina Index e exibe todos os registrados na tela
// 	w.Header().Set("Content-Type", "application/json")
// 	json.NewEncoder(w).Encode(_id)
// }
