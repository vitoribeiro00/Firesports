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

type Jogo struct {
	JogoId string
	Nome string
	Descricao string
	Genero string
	Data_Lancamento string
	Req_qtd_min_usuario int64
	Req_qtd_max_usuario int64
	Image string
}