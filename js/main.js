/*/*

1. Il computer deve generare 16 numeri casuali tra 1 e 100.
2. In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
3. Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
4. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


*/

//1. Il computer deve generare 16 numeri casuali tra 1 e 100.


// Genero numeri random da 1 a 100:
var somma = generaRandomCento(1, 100); //----> Variabile per far capire che questa mi creerà numeri da 1 a 100

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

var number = parseInt(prompt("Inserisci un numero da 1 a 100; hai 3 tentativi per vincere"));
switch (number <= 16) {
    case somma == number:
        alert("BOOOOM! Hai vinto!"); // ----> scatta l'alert vittoria se il numero è compreso
        break;
    case somma !== number:
        alert ('sbagliato'); // ----> scatta l'alert sbagliato se non è compreso
        parseInt(prompt('riprova'));
        alert ('Hai finito i tentativi; hai perso');
        default:
}

console.log(number);



var somma = somma1(random, number);

function somma1(num1, num2){
    return num1 == num2
}
