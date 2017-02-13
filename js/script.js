var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var messageElement = document.getElementById('textarea');
var resultat = document.getElementById('resultat');
var bouton = document.getElementById('bouton');

bouton.addEventListener("click",function(){
    for (var i = 0; i < alphabet.length; i++) {
        alphabet = i+1;
    }
    



});
