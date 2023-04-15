const formtaDigito = (digito) => `0${digito}`.slice(-2)

function atualizar(tempo) {
    const segundos = document.getElementById('segundos')
    const minutos = document.getElementById('minutos')
    const horas = document.getElementById('horas')
    const dias = document.getElementById('dias')

    const qtdDias = Math.floor(tempo / (60 * 60 * 24))
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60))
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60)
    const qtdSegundos = tempo % 60

    dias.innerHTML = formtaDigito(qtdDias)
    horas.innerHTML = formtaDigito(qtdHoras)
    minutos.innerHTML = formtaDigito(qtdMinutos)
    segundos.innerHTML = formtaDigito(qtdSegundos)
}

const paraContagem = (id) => clearInterval(id)


const contagemRegressiva = (tempo) => {

    const contar = () => {
        if (tempo === 0) {
            paraContagem(id)
        }
        atualizar(tempo)
        tempo--

    }
    const id = setInterval(contar, 1000)
}

const tempoRestante = () => {
    const dataEvento = new Date('2023-08-16 20:00:00')
    const dataHoje = Date.now()
    return Math.floor((dataEvento - dataHoje) / 1000)
}

contagemRegressiva(tempoRestante())

const containerItem = document.querySelector('.hero__movies__container')
const containerBalls = document.querySelector('.hero__movies__balls')
let atual = 0

const images = [
    [
        'dist/images/elenco/cliff.jpeg',
        'dist/images/elenco/kate.jpeg',
        'dist/images/elenco/michellen.jpeg',
    ],
    [
        'dist/images/elenco/sam.jpeg',
        'dist/images/elenco/sigourney.jpeg',
        'dist/images/elenco/stephen.jpeg'

    ],
    [
        'dist/images/elenco/vin.jpeg',
        'dist/images/elenco/zoe.jpeg',
        'dist/images/elenco/Trinity.jpeg',
    ],
]

const createDivImages = (container) => {
    for (let i = 0; i < 3; i++) {
        const div = document.createElement('div')
        div.classList.add('hero__movies__container__item')
        container.appendChild(div)
    }

    document.querySelectorAll(".hero__movies__container__item")[0].id = "atual"
}
createDivImages(containerItem)

const setImages = () => {
    const container = document.querySelectorAll(".hero__movies__container__item")
    for (let i = 0; i < container.length; i++) {
        for (let j = 0; j < images[i].length; j++) {
            const img = document.createElement('img')
            img.src = images[i][j]
            container[i].appendChild(img)
        }
    }
}

setImages()

const loadBalls = (container) => {
    for (let i = 0; i < 3; i++) {
        const div = document.createElement('div')
        div.id = i
        container.appendChild(div)
    }
    document.getElementById('0').classList.add('hero__movies__balls__imgAtual')
}

loadBalls(containerBalls)

const balls = document.querySelectorAll('.hero__movies__balls div')

function selectId() {
    for (let i = 0; i < balls.length; i++) {
        balls[i].addEventListener('click', function () {
            atual = balls[i].id
            slide()
        })
    }
}
selectId()

function slide() {
    const div = document.getElementById('atual').offsetWidth
    if (atual >= document.querySelectorAll(".hero__movies__container__item").length) {
        atual = 0
    }
    else if (atual < 0) {
        atual = document.querySelectorAll(".hero__movies__container__item").length - 1
    }
    document.querySelector('.hero__movies__balls__imgAtual').classList.remove('hero__movies__balls__imgAtual')
    document.getElementById('atual').style.marginLeft = -div * atual + "px"
    document.getElementById(atual).classList.add('hero__movies__balls__imgAtual')
}

const ul = document.querySelector(".devices__platform__list")

const icons = [
    { id: "0", name: "tv", url: "dist/images/tv.png" },
    { id: "1", name: "Laptop & Desktop", url: "dist/images/computador.png" },
    { id: "2", name: "Table & Mobile", url: "dist/images/celular.png" },
]

const insertIcons = (ul, icons) => {
    icons.forEach(item => {
        ul.innerHTML += `
            <li id=${item.id} 
            class="devices__platform__list__item"><img src=${item.url} alt=${item.name}>
            ${item.name}</li>
        `
    });
}
insertIcons(ul, icons)

const imageIcon = document.querySelectorAll(".devices__platform__list__item")

function selectIcons() {
    for (let i = 0; i < imageIcon.length; i++) {
        imageIcon[i].addEventListener('click', function () {
            imgId = imageIcon[i].id
            insertImages(imgId)
        })
    }
    imageIcon[0].classList.add("active")
}
selectIcons()

const areaDevices = document.querySelector(".devices__platform__img")

const insertImages = (imgId) => {
    document.querySelector(".active").classList.remove("active")
    areaDevices.innerHTML = `
        <img src=${icons[imgId].url} alt=${icons[imgId].name}>
    `
    imageIcon[imgId].classList.add("active")
}

insertImages(0)

class Accordion {
    constructor(accordionListQuestions) {
        this.accordionListQuestions = document.querySelectorAll(accordionListQuestions)
        this.activeItemClass = "active"
    }

    toggleAccordion(item){
        item.classList.toggle(this.activeItemClass)
        item.nextElementSibling.classList.toggle(this.activeItemClass)
    }

    addAccordionEvent() {
        this.accordionListQuestions.forEach((questions) => {
            questions.addEventListener("click", () => this.toggleAccordion(questions))
        })
    }

    init(){
        if(this.accordionListQuestions.length){
            this.addAccordionEvent()
        }
        return this
    }
}

const accordion = new Accordion(".faq__list__question")
accordion.init()