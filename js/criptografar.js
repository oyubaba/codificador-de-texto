var botaoCriptografar = document.querySelector("#criptografar");

var criptografia = document.querySelector(".input");

var descriptografar = document.querySelector("#input");

botaoCriptografar.addEventListener("click", function() {
    
    var mensagem = criptografia.value;
    mensagem = mensagem.replace(/e/g, "enter");
    mensagem = mensagem.replace(/i/g, "imes");
    mensagem = mensagem.replace(/o/g, "ober");
    mensagem = mensagem.replace(/u/g, "ufat");
    mensagem = mensagem.replace(/a/g, "ai");
   
    if(mensagem == "") {
        alert("Por favor, escreva algo.");
    }    

    descriptografar.value = mensagem.toLowerCase();

    criptografia.value = "";

    })    









