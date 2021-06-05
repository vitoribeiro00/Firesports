package model

type Usuario struct {
	Id        int64  `json:"Id"`
	Nome      string `json:"Nome"`
	Sobrenome string `json:"Sobrenome"`
	Data_Nasc string `json:"Data_Nasc"`
	Usuario   string `json:"Usuario"`
	Email     string `json:"Email"`
}

type Login struct {
	Usuario string `json:"Usuario"`
	Senha   string `json:"Senha"`
}

type Jogo struct {
	JogoId              string `json:"JogoId"`
	Nome                string `json:"Nome"`
	Descricao           string `json:"Descricao"`
	Genero              string `json:"Genero"`
	Data_Lancamento     string `json:"Data_Lancamento"`
	Req_qtd_min_usuario int64  `json:"Req_qtd_min_usuario"`
	Req_qtd_max_usuario int64  `json:"Req_qtd_max_usuario"`
	Image               string `json:"Image"`
}

type Torneio struct {
	TorneioId      int64  `json:"TorneioId"`
	Nome           string `json:"Nome"`
	Descricao      string `json:"Descricao"`
	Sala_com_senha bool   `json:"Sala_com_senha"`
	Senha          string `json:"Senha"`
	Qtd_por_equipe int64  `json:"Qtd_por_equipe"`
	Qtd_equipe     int64  `json:"Qtd_equipe"`
	Data_criacao   string `json:"Data_criacao"`
}

type Response struct {
	StatusCode int64 `json:"StatusCode"`
}

type Time struct {
	TimeId int64  `json:"TimeId"`
	Nome   string `json:"Nome"`
}

type Rank struct {
	Vitoria int64  `json:"Vitoria"`
	Nome    string `json:"Nome"`
}

type Fase struct {
	Numero_Fase string `json:"Numero_Fase"`
}

type Partida struct {
	Nome_Torneio         string `json:"Nome"`
	Descricao_Torneio    string `json:"Descricao"`
	Data_Criacao_Torneio string `json:"Data_Criacao"`
	Partida_Torneio      int    `json:"Partida"`
	Data_Partida_Torneio string `json:"Data_Partida"`
	Time_Vencedor        string `json:"Time_Vencedor"`
	Time_a               string `json:"time_a"`
	Time_b               string `json:"time_b"`
	Time_c               string `json:"time_c"`
	Time_d               string `json:"time_d"`
	Time_e               string `json:"time_e"`
}

type TorneioPartidas struct {
	Numero_Fase string    `json:"Numero_Fase"`
	Partidas    []Partida `json:"Partidas"`
}
