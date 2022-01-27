var botaoCopiar = document.querySelector("#copiar");

botaoCopiar.addEventListener("click", function() {
    var input = document.querySelector("#input");

    input.select();
    input.setSelectionRange(0, 99999); 
  
    navigator.clipboard.writeText(input.value);
  
    descriptografar.value = ""

})