var botaoDescriptografar = document.querySelector("#descriptografar");

var criptografia = document.querySelector(".input");

var descriptografar = document.querySelector("#input");

botaoDescriptografar.addEventListener("click", function() {
    
    var mensagem = criptografia.value;
    mensagem = mensagem.replace(/enter/g, "e");
    mensagem = mensagem.replace(/imes/g, "i");
    mensagem = mensagem.replace(/ober/g, "o");
    mensagem = mensagem.replace(/ufait/g, "u");
    mensagem = mensagem.replace(/ai/g, "a");
   
    if(mensagem == "") {
        alert("Por favor, escreva algo.");
    }    

    descriptografar.value = mensagem.toLowerCase();

    criptografia.value = "";

    })    