const button = document.getElementById('converter-butao')
const select = document.getElementById('currency-selec')
const dolar = 5.2
const euro = 5.9
const bitcoin = 147456.13

const converterValor = () => {
    const inputReais = document.getElementById('input-real').value
    const valorReal = document.getElementById('valor-real')
    const valorDolar = document.getElementById('valor-dolar')

    valorReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

    if (select.value === "US$ Dólar americano") {
        valorDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar)
    }

    if (select.value === "€ Euro") {
        valorDolar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro)
    }

    if (select.value === "₿ Bitcoin") {
        valorDolar.innerHTML = new Intl.NumberFormat("XBT", {
            style: "currency",
            currency: "BTC",
        }).format(inputReais / bitcoin)
    }
}

changeCurrency = () => {
    const paragrafo = document.getElementById("paragrafo")
    const imagemEuro = document.getElementById("imagemU")

    if (select.value === 'US$ Dólar americano') {
        paragrafo.innerHTML = "Dórla americano"
        imagemEuro.src = "estados-unidos (1) 1.svg"
    }

    if (select.value === '€ Euro') {
        paragrafo.innerHTML = "Euro"
        imagemEuro.src = "Design sem nome 1.svg"
    }

    if (select.value === '₿ Bitcoin') {
        paragrafo.innerHTML = "Bitcoin"
        imagemEuro.src = "Bitcoin.png"
    }

    converterValor()
}

button.addEventListener('click', converterValor)
select.addEventListener('change', changeCurrency)