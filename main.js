
/* Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
*/


var listaBombe = [];
var numMax;
var lista = [];
var possibilità;
var punteggio = 0;

var diff = Number(prompt('a che difficoltà vuoi giocare da 0 a 2?'));

if(diff == 0){
    numMax = 100;
}else if (diff == 1){
    numMax = 80;
}else if(diff == 2){
    numMax = 50;
}

possibilità = numMax - 16; 

console.log(possibilità);
// funzione che genera numeri random compresi tra min e max
function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//inserisco i numeri nell'array bombe fincè l'array non è pieno
while (listaBombe.length < 16) {
    var numero = getRandomNumbers(1, numMax);

    //controllo che un numero non sia già stato inserito
    if (!listaBombe.includes(numero)) {
        listaBombe.push(numero);
    }
}
console.log(listaBombe);



do {
    var numeroUtente = Number(prompt('inserisci un numero da uno a' + numMax));
    var play = true;
    if(listaBombe.includes(numeroUtente)){
        
        alert('hai perso hai totalizzato:' + punteggio + 'punti');
               
        play = confirm('vuoi ricominciare?');
        numeroUtente = null;
        lista.length = null;
        punteggio = 0;

    } else if (lista.includes(numeroUtente)){
        alert('hai già inserito questo numero');

    }else if (numeroUtente < 1 || numeroUtente > numMax){

        alert('numero non consentito');
    }
    else {
        lista.push(numeroUtente);
        punteggio = punteggio + 1;
      }
      
} while (lista.length < possibilità && !listaBombe.includes(numeroUtente) && play);

if (lista.length == punteggio && play){
    alert('hai vinto');
}else {
    alert('GAME OVER');
}


