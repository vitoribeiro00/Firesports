package main

import (
	"log"
	"net/http"
	"router"
)


func main() {
	r := router.Router()
	log.Println("Server started on: http://localhost:9000")
	log.Fatal(http.ListenAndServe(":9000", r))
}