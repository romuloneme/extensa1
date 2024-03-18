function getText(){
  return document.body.innerText
}
const todotexto = getText();

var palavrastexto = todotexto.split(" ");
var palavrascertas = []
chrome.runtime.onMessage.addListener(function(message){
  for (var i = 0; i<palavrastexto.length;i++){
      
    if (palavrastexto[i].startsWith(message.message)){
        palavrascertas.push(`<span style="background-color: yellow;">${palavrastexto[i]}</span>`);
        
    } else {
        palavrascertas.push(palavrastexto[i]);
    }
}
console.log(palavrascertas.join(" "));

palavrascertas = []


  });
 