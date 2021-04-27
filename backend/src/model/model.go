package model

type Usuario struct {
	Id        int64
	Nome      string
	Sobrenome string
	Data_Nasc string
	Usuario   string
	Senha     string
	Email     string
}

type Login struct {
	Usuario string
	Senha   string
}