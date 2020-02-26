/*

1. Il computer deve generare 16 numeri casuali tra 1 e 100.
2. In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
3. Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
4. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


*/

//1. Il computer deve generare 16 numeri casuali tra 1 e 100.


// Genero numeri random da 1 a 100:
var somma = generaRandomCento(1, 100); //----> Variabile scartata; è giusto per far capire che questa mi creerà numeri da 1 a 100

 function generaRandomCento(min, max) {
     var centoRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
     return centoRandom;
 }

//Genero 16 numeri casuali su 100 numeri:

var array = [];

while ( array.length < 16){
    var random = generaRandomCento(1, 100); // Richiamo funzione numeri random
    if (array.includes(random) == false) { //Con l'if scarto tutti i possibili doppioni
        array.push(random); // Pusho la somma nell'array
    }
}

console.log(array);


//2. Il computer deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.


//3 Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

var inserisciNumero = parseInt(prompt('Inserisci un numero'));
var lista = [];
var listaBombe = 0;
var controllo = controlloBombe(listaBombe, inserisciNumero)

 function controlloBombe(elem1, elem2){
   var find = false;
   for (var i = 0; i < lista.length; i++) {
  if (lista[i] == numero) {
    find = true;
   }
   }
   return find;
}


var numeriConsentiti = [];
var conteggio = 0;
while ( conteggio < 84 && (controlloBombe(listaBombe, inserisciNumero)) != true){
    var inserisciNumero = parseInt(prompt('Inserisci un numero da 1 a 100'));
    conteggio = conteggio + 1;
    if (controlloBombe(listaBombe, inserisciNumero)) { //<-- se questa condizione risulta vera comunico
      alert('hai perso hai provato ' + conteggio + ' volte prima di beccare la bomba');
  }else if (numeriConsentiti.includes(random) == false){
     numeriConsentiti.push(random); //<-- se il numero inserito non è presente nella lista allora viene aggiunto
     conteggio = conteggio + 1; //<-- tengo traccia della quantita di tentativi riusciti
 }else if (numeriConsentiti.includes(random)){ //<-- se il numero è gia presente nella lista allora dico di inserirne un'altro
     alert('numero gia inserito, inseriscine un/altro');
 }else if (numeriConsentiti.length == possibilita){
     alert('hai vinto');
    }
  }
