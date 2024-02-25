const controle = document.querySelectorAll('[data-controle]')  //data-controle: guarda valores 
const estatisticas = document.querySelectorAll('[data-estatistica]')

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
       manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
       atualizaEstatisticas(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]")

    if(operacao === '-'){
        peca.value = parseInt(peca.value) - 1
    }else{
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca){

    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

let imgRobo = document.querySelector('.robo') 
const robotrons = ['img/robotron/branco.png ', 'img/robotron/amarelo.png ','img/robotron/vermelho.png ', 'img/robotron/preto.png ', 'img/robotron/rosa.png ','img/robotron/azul.png ']

let i = 1
document.querySelector('#robotronCor').addEventListener('click', (e) => {
    e.preventDefault()

    imgRobo.src = robotrons[i]
    i++

    if( i == robotrons.length) {
        i = 0
    }
})
