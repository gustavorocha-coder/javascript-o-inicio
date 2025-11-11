function fnJogo(){
    let  numeroMagico = Math.floor(Math.random() * 100 ) + 1

    let chute = document.getElementById("valor").value

    if(chute == numeroMagico){
        document.getElementById("resultado").innerText = "Acertou Mizeravi"
    }else{
        document.getElementById("resultado").innerText ="erroooou"
    }
}

