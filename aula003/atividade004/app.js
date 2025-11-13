//document.write("<h1>Sou apenas um rapaz latino americano</h1>")

let filmes = ['filme01.jpg','filme02.jpg','filme03.jpg','fime05.jpg','filme04.jpg','filme06.jpg','filme07.jpg','filme08.jpg','filme09.jpg']
let contador = 0

while(contador <9){
console.log(contador)
    document.write("<img src= 'imagens/" + filmes[contador] + "'>")
    contador = contador + 1

}