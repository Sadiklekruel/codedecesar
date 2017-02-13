var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var decalage = 3;
var messageElement = document.getElementById('textarea');
var resultat = document.getElementById('resultat');
var bouton = document.getElementById('bouton');


bouton.addEventListener("click", function() {
    var messageValue = messageElement.value;
    for (var i = 0; i < messageValue.length; i++) {
        var indiceLettre = alphabet.indexOf(messageValue[i])
        var indiceDecale = indiceLettre + decalage;
        if (indiceDecale >= alphabet.length) {
            indiceDecale = indiceDecale - 26;
        }
        var lettreDecale = alphabet[indiceDecale];
        resultat.value += lettreDecale;
    }
});
