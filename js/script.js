var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var decalage = 1;
var messageElement = document.getElementById('textarea');
var resultat = document.getElementById('resultat');
var bouton = document.getElementById('bouton');


bouton.addEventListener("click", function() {
    for (var i = 0; i < alphabet.length; i++) {
        messageElement = messageElement + alphabet;
    }
    for (var j = 0; j < alphabet.length; i++) {
        resultat = messageElement + decalage;
    }
});
