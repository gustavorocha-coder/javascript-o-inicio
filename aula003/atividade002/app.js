function fnConverterValor(){
    let valorDigitado = 0, total = 0
    valorDigitado = document.getElementById("valor").value
    total = valorDigitado * 6.12
document.getElementById("valorConvertido").innerText = "R$ " + total
}