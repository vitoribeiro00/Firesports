package router

import (
	"controller"

	"github.com/gorilla/mux"
)

func Router() *mux.Router {

	router := mux.NewRouter()

	router.HandleFunc("/entrar", controller.EntrarUsuario).Methods("POST")
	router.HandleFunc("/cadastrar", controller.CadastrarUsuario).Methods("POST")
	router.HandleFunc("/jogos", controller.BuscarJogos).Methods("GET")
	return router
}
