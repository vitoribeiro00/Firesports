package router

import (
	"controller"

	"github.com/gorilla/mux"
)

func Router() *mux.Router {

	router := mux.NewRouter()

	router.HandleFunc("/entrar", controller.EntrarUsuario).Methods("POST")
	// router.HandleFunc("/usuario/{id}", controller.BuscarUsuario).Methods("GET")
	router.HandleFunc("/cadastrar", controller.CadastrarUsuario).Methods("POST")
	router.HandleFunc("/jogos", controller.BuscarJogos).Methods("GET")
	router.HandleFunc("/torneios", controller.BuscarTorneios).Methods("GET")
	router.HandleFunc("/jogo", controller.AdicionarJogo).Methods("POST")
	router.HandleFunc("/torneio", controller.AdicionarTorneio).Methods("POST")
	router.HandleFunc("/jogo/{id}", controller.DeletarJogo).Methods("DELETE")
	router.HandleFunc("/torneio/{id}", controller.DeletarTorneio).Methods("DELETE")
	router.HandleFunc("/time", controller.BuscarTimes).Methods("GET")
	return router
}
