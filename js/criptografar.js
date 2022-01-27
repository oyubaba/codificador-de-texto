var botaoCriptografar = document.querySelector("#criptografar");

var criptografia = document.querySelector(".input");

var descriptografar = document.querySelector("#input");

botaoCriptografar.addEventListener("click", function() {
    
    
    var mensagem = criptografia.value;
    descriptografar.value = mensagem.toLowerCase();
    
    function criptografar(){
        var a = mensagem.replace(/a/g, "ai");
        
        var e = mensagem.replace(/e/g, "enter");
        
        var i = mensagem.replace(/i/g, "imes");
        
        var o = mensagem.replace(/o/g, "ober");
        
        var u = mensagem.replace(/u/g, "ufat");

        //return(a)

        // talvez um variavel só?
        
    }
   
    console.log(criptografar.value);

    })    









