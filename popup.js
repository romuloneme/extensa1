document.addEventListener("DOMContentLoaded", pegaletra);

function pegaletra(){
    let letra = document.getElementById("letra");

    let pesquisaletra = document.getElementById("insereletra");
  
    letra.addEventListener("click", marcar)

    function marcar(){
    console.log(pesquisaletra.value)
    
    chrome.tabs.query({ active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, { message: pesquisaletra.value});
    });
    }
}
