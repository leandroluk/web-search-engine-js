const axios = require('axios')
/*
[...document.querySelectorAll('.srg .g')].map(div => {

	let result;

    const a = div.querySelector('.r a')
	const s = div.querySelector('.s .st')

	result = {
		url: a.href,
		title: a.querySelector('h3').innerText,
		description: s.innerText,
	}

	return result
})
*/

const ptBrWords = [
  "necessário", "grande", "alto", "tais", "siga", "ato", "por que", "perguntar", "homens", "mudança", "fui", "luz", "tipo", "off", "precisa", "casa", "imagem",
  "tentar", "nós", "novamente", "animais", "ponto", "mãe", "mundo", "perto", "construir", "auto", "terra", "pai", "qualquer", "novo", "trabalho", "parte", "tomar",
  "obter", "lugar", "feito", "viver", "onde", "depois", "de volta", "pouco", "apenas", "rodada", "homem", "ano", "veio", "exposição", "cada", "bom", "me", "dar",
  "nossa", "sob", "nome", "muito", "através", "justo", "forma", "sentença", "grande", "acho que", "dizer", "ajudar", "baixo", "linha", "diferir", "vez", "causa",
  "muito", "significar", "antes", "mudança", "direito", "menino", "velho", "também", "mesmo", "ela", "tudo", "lá", "quando", "up", "usar", "seu", "maneira", "sobre",
  "muitos", "depois", "eles", "escrever", "faria", "como", "assim", "estes", "seu", "longo", "fazer", "coisa", "veja", "ele", "dois", "tem", "olhar", "mais",
  "dia", "poderia", "ir", "vir", "fez", "número", "som", "não", "mais", "pessoas", "meu", "sobre", "sei", "água", "que", "chamada", "primeiro", "que", "pode",
  "para baixo", "lado", "sido", "agora", "encontrar", "cabeça", "ficar", "próprio", "página", "deveria", "país", "encontrado", "resposta", "escola", "crescer",
  "estudo", "ainda", "aprender", "planta", "cobertura", "alimentos", "sol", "quatro", "entre", "estado", "manter", "olho", "nunca", "último", "deixar", "pensava",
  "cidade", "árvore", "atravessar", "fazenda", "difícil", "começo", "poder", "história", "serra", "longe", "mar", "desenhar", "esquerda", "tarde", "run", "não",
  "enquanto", "imprensa", "perto", "noite", "reais", "vida", "poucos", "norte", "livro", "carregam", "tomou", "ciência", "comer", "quarto", "amigo", "começou",
  "idéia", "peixe", "montanha", "Pare", "uma vez", "base", "ouvir", "cavalo", "corte", "certo", "assista", "cor", "rosto", "madeira", "principal", "aberto",
  "parecem", "juntos", "próximo", "branco", "crianças", "início", "tem", "andar", "exemplo", "facilidade", "papel", "grupo", "sempre", "música", "aqueles", "tanto",
  "marca", "muitas vezes", "carta", "até", "milha", "rio", "carro", "pés", "cuidados", "segunda", "suficiente", "plain", "menina", "habitual", "jovem", "pronto",
  "acima", "sempre", "vermelho", "lista", "embora", "sentir", "Discussão", "pássaro", "em breve", "corpo", "cão", "família", "direto", "representar", "deixar",
  "canção", "medir", "porta", "produto", "preto", "curta", "numeral", "classe", "vento", "pergunta", "acontecer", "completo", "navio", "área", "metade", "rocha",
  "ordem", "fogo", "sul", "problema", "peça", "disse", "sabia", "passar", "desde", "topo", "inteiro", "rei", "rua", "polegada", "multiplicar", "nada", "curso",
  "ficar", "roda", "completo", "força", "azul", "objeto", "decidir", "superfície", "profunda", "lua", "ilha", "pé", "sistema", "ocupado", "teste", "registro", "barco",
  "comum", "ouro", "possível", "avião", "lugar", "seca", "pergunto", "risada", "mil", "atrás", "ran", "verifique", "jogo", "forma", "equiparar", "quente", "senhorita",
  "trouxe", "calor", "neve", "pneu", "trazer", "sim", "distante", "preencher", "leste", "pintar", "linguagem", "entre", "unidade", "poder", "cidade", "multa",
  "certo", "voar", "cair", "conduzir", "grito", "escuro", "máquina", "nota", "esperar", "plano", "figura", "estrela", "caixa", "substantivo", "campo", "resto",
  "correto", "capaz", "libra", "done", "beleza", "unidade", "se", "contêm", "frente", "ensinar", "semana", "finais", "deu", "verde", "ó", "rápida", "desenvolver",
  "oceano", "quente", "livre", "minuto", "forte", "especial", "mente", "atrás", "claro", "cauda", "produzir", "fato", "espaço", "ouvido", "melhor", "horas",
  "melhor", "verdade", "durante", "cem", "cinco", "lembre-se", "passo", "cedo", "segurar", "oeste", "solo", "juros", "alcançar", "rápido", "verbo", "cantar",
  "ouça", "seis", "mesa", "viagens", "menos", "manhã", "dez", "simples", "vários", "vogal", "direção", "guerra", "lay", "contra", "padrão", "lento", "centro",
  "amo", "pessoa", "dinheiro", "servir", "aparecer", "estrada", "mapa", "chuva", "regra", "governar", "puxe", "frio", "aviso", "voz", "energia", "caça", "provável",
  "cama", "irmão", "ovo", "passeio", "celular", "acreditar", "talvez", "escolher", "súbita", "contar", "quadrado", "razão", "comprimento", "representar", "arte",
  "assunto", "região", "tamanho", "variar", "resolver", "falar", "peso", "geral", "gelo", "assunto", "círculo", "par", "incluir", "dividir", "sílaba", "sentido",
  "grande", "bola", "ainda", "onda", "cair", "coração", "am", "presente", "pesado", "dança", "motor", "posição", "braço", "ampla", "vela", "material de", "fração",
  "floresta", "sentar-se", "corrida", "janela", "loja", "verão", "trem", "sono", "provar", "solitário", "perna", "exercício", "parede", "captura", "mount", "desejo",
  "céu", "conselho", "alegria", "inverno", "sat", "escrito", "selvagem", "instrumento", "guardado", "vidro", "grama", "vaca", "trabalho", "borda", "sinal", "visita",
  "passado", "suave", "diversão", "brilhante", "gás", "tempo", "mês", "milhão", "suportar", "acabamento", "feliz", "Esperamos", "flor", "vestir", "estranho", "gone",
  "comércio", "melodia", "viagem", "escritório", "receber", "linha", "boca", "exata", "símbolo", "morrer", "menos", "dificuldade", "grito", "exceto", "escreveu",
  "semente", "tom", "juntar-se", "sugerir", "limpo", "pausa", "senhora", "quintal", "subir", "ruim", "golpe", "óleo", "sangue", "tocar", "cresceu", "cento", "misturar",
  "equipe", "fio", "custo", "perdido", "marrom", "desgaste", "jardim", "igual", "enviado", "escolher", "caiu", "caber", "fluir", "feira", "banco", "recolher",
  "salvar", "controle", "decimal", "ouvido", "mais", "bastante", "quebrado", "caso", "meio", "matar", "filho", "lago", "momento", "escala", "alto", "primavera",
  "observar", "criança", "reta", "consoante", "nação", "dicionário", "leite", "velocidade", "método", "órgão", "pagar", "idade", "seção", "vestido", "nuvem", "surpresa",
  "calma", "pedra", "minúsculo", "subida", "legal", "projeto", "pobre", "muito", "experiência", "inferior", "chave", "ferro", "único", "vara", "plana", "vinte",
  "pele", "sorriso", "vinco", "buraco", "saltar", "bebê", "oito", "aldeia", "meet", "raiz", "comprar", "levantar", "resolver", "de metal", "se", "empurre",
  "sete", "parágrafo", "terceiro", "deve", "held", "cabelo", "descrever", "cozinheiro", "piso", "ou", "resultado", "queimar", "hill", "seguro", "cat", "século",
  "considerar", "tipo", "direito", "bit", "costa", "cópia", "frase", "silenciosa", "alto", "areia", "solo", "rolo", "temperatura", "dedo", "indústria", "valor",
  "luta", "mentira", "bater", "excitar", "naturais", "vista", "sentido", "Capital", "não vai", "cadeira", "perigo", "frutas", "rico", "grossa", "soldado", "processo",
  "operar", "prática", "separado", "difícil", "médico", "por favor", "proteger", "meio-dia", "colheita", "moderno", "elemento", "acertar", "estudante", "canto",
  "festa", "fornecimento", "cuja", "localizar", "anel", "caráter", "inseto", "capturados", "período", "indicam", "rádio", "falou", "átomo", "humano", "história",
  "efeito", "elétrica", "esperar", "osso", "trilho", "imaginar", "fornecer", "concordar", "assim", "suave", "mulher", "capitão", "acho que", "necessário", "sharp",
  "asa", "criar", "vizinho", "lavagem", "bat", "vez", "multidão", "milho", "comparar", "poema", "corda", "sino", "dependem", "carne", "esfregar", "tubo", "famoso",
  "dólar", "córrego", "medo", "vista", "fina", "triângulo", "planeta", "apressar", "chefe", "colônia", "relógio", "mina", "amarrar", "introduzir", "maior", "fresco",
  "pesquisa", "enviar", "amarelo", "pistola", "permitir", "impressão", "morto", "local", "deserto", "terno", "atual", "elevador", "aumentou", "chegar", "mestre",
  "trilha", "pai", "costa", "divisão", "folha", "substância", "favorecer", "conectar", "pós", "passar", "acorde", "gordura", "feliz", "original", "share", "estação",
  "pai", "pão", "cobrar", "adequada", "bar", "oferta", "segmento", "escravo", "pato", "instant", "mercado", "grau", "preencher", "pinto", "caro", "inimigo",
  "responder", "bebida", "ocorrer", "apoio", "discurso", "natureza", "gama", "vapor", "movimento", "caminho", "líquido", "log", "significava", "quociente", "dentes",
  "casca", "pescoço", "oxigênio", "açúcar", "morte", "bastante", "habilidade", "mulheres", "temporada", "solução", "ímã", "prata", "obrigado", "ramo", "jogo", "sufixo",
  "especialmente", "figo", "medo", "enorme", "irmã", "aço", "discutir", "para a frente", "similar", "orientar", "experiência", "contagem", "maçã", "comprou",
  "conduziu", "campo", "casaco", "massa", "cartão", "banda", "corda", "deslizamento", "vitória", "sonhar", "noite", "condição", "alimentação", "ferramenta", "total de",
  "básico", "cheiro", "vale", "nem", "duplo", "assento", "continuar", "bloco", "gráfico", "chapéu", "vender", "sucesso", "companhia", "subtrair", "evento", "especial",
  "negócio", "mergulho", "prazo", "oposto", "esposa", "sapato", "ombro", "propagação", "organizar", "acampamento", "inventar", "algodão", "Nascido", "determinar",
  "quarto", "nove", "caminhão", "ruído", "nível", "oportunidade", "recolher", "loja", "trecho", "jogar", "brilho", "propriedade", "coluna", "molécula", "selecione",
  "errado", "cinza", "repetição", "exigir", "amplo", "preparar", "sal", "nariz", "plural", "raiva", "reivindicação", "continente"
]

function getRandomCombination() {
  return ptBrWords[Math.floor(Math.random() * ptBrWords.length)]
}

/**
 * use request struct to create a new object with google page result based on
 * query sended
 */
async function get1000ResultsFromGoogle(query) {
  const results = []
  const offset = 0

  // while(results.length < 1000){
  const url = `http://api.duckduckgo.com/?q=${query}&start=${offset}&format=json`
  axios
    .get(url)
    .then(res => {
      console.log(url, JSON.stringify(res.data.RelatedTopics))
    })
    .catch(err => {
      console.error(err)
    })
  // }
}

get1000ResultsFromGoogle(getRandomCombination())