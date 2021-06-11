package main

import (
	"log"
	"net/http"
	"router"
	"github.com/gorilla/handlers"
)


func main() {
	r := router.Router()

	header := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
	methods := handlers.AllowedMethods([]string{"GET", "POST", "PUT", "HEAD", "OPTIONS"})
	origins := handlers.AllowedOrigins([]string{"*"})

	log.Println("Server started on: http://localhost:8090")
	log.Fatal(http.ListenAndServe(":8090",handlers.CORS(header, methods, origins)(r)))
}