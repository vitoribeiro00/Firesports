package main

import (
	"log"
	"net/http"
	"router"
)


func main() {
	r := router.Router()
	log.Println("Server started on: http://localhost:8090")
	log.Fatal(http.ListenAndServe(":8090", r))
}