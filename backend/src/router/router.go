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
	router.HandleFunc("/torneios", controller.BuscarTorneios).Methods("GET")
	router.HandleFunc("/jogo", controller.AdicionarJogo).Methods("POST")
	router.HandleFunc("/torneio", controller.AdicionarTorneio).Methods("POST")
	router.HandleFunc("/time", controller.BuscarTimes).Methods("GET")
	router.HandleFunc("/rank", controller.BuscarRank).Methods("GET")
	router.HandleFunc("/torneio_partidas", controller.BuscarTorneioPartida).Methods("GET")
	router.HandleFunc("/usuario", controller.AtualizarUsuario).Methods("PUT")
	router.HandleFunc("/addTimeTorneio", controller.AdicionarTimeTorneio).Methods("POST")
	
	return router
}
