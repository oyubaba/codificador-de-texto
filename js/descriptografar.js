var botaoDescriptografar = document.querySelector("#descriptografar");

var criptografia = document.querySelector(".input");

var descriptografar = document.querySelector("#input");

botaoDescriptografar.addEventListener("click", function() {
    
    var mensagem = criptografia.value;
    mensagem = mensagem.replace(/enter/g, "e");
    mensagem = mensagem.replace(/imes/g, "i");
    mensagem = mensagem.replace(/ober/g, "o");
    mensagem = mensagem.replace(/ufat/g, "u");
    mensagem = mensagem.replace(/ai/g, "a");
   
    mensagem = mensagem.replace(/ENTER/g, "e");
    mensagem = mensagem.replace(/IMES/g, "i");
    mensagem = mensagem.replace(/OBER/g, "o");
    mensagem = mensagem.replace(/UFAT/g, "u");
    mensagem = mensagem.replace(/AI/g, "a");
   
    if(mensagem == "") {
        alert("Por favor, escreva algo.");
    }    

    descriptografar.value = mensagem.toLowerCase();

    criptografia.value = "";

    })    