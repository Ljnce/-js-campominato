/*
1.Genera 16 numeri random diversi da 1...100 e li metto su un array
    1.1 creo un array vuoto
    1.2 Inserisco i numeri delle bombe nell'array
       1.2.1 Controllo che non ci siano numeri uguali
2.Selezione utente
    2.1 Creo un array vuoto per i tentativi
    2.2 Chiediamo un numero tra 1...100
3. Logica del gioco:
    - Ripetizione del NUMERO
    1. il numero inserito è incluso nell'array numeriInseriti
    - prende una bomba
    1. il numero inserito è incluso nell'array bombe
    - inserire il numero nell'array dei numeriInseriti
    -se lunghezza numeri inseriti == numeri senza mine ALLORA ---> hai vinto
    ES: Numeri senza mine = 100 - 16 (Ovvero numero mine Campo)

Ultimo. Gestione errori.
    1 numero >= 1 e numero <= 100
    2 numero deve essere un NUMERO
*/

//Creo i 2 array vuoi
var numeroTentativi = [];

//Creo i valori che conosco: la dimensione del campo, il numero di mine, e il limite max tolgiendo le mine al numero del campo
var dimensioneCampo = 100;
var numeroBombe = 16;
var limiteMax = dimensioneCampo - numeroBombe;


var posizioneBombe = mineInCampo(numeroBombe, dimensioneCampo); //array creato dentro la funzione
console.log(posizioneBombe);

var esplosione = false; //se è false, esplode e la partita finisce

while ((numeroTentativi.length < 5) && (esplosione == false)) { // abbiamo 84 tentativi, calcolati sapendo di avere 16 bombe e 100 campi; se ne inserisci di più, esplosione == perdi
    var number = parseInt(prompt('inserisci un numero da 1 a 100'));
    if (!isNaN(number)) { //se non è un numero esce l'alert che mi ricorda di inserire un numero

    if (posizioneBombe.includes(number)) {
        alert('booom hai vinto'); //se inserisco il numero corrispondente, vinco!
        esplosione = true // il true mi serve per bloccare il tutto se esce il numero vincente
    } else {
        alert('riprova');
    }

    if (!posizioneBombe.includes(number)) {
        alert('hai messo una bandierina')
        console.log(numeroTentativi);
    }
        //controllo che il numero non sia una mina
        //in caso sia una mina allora esplosione = true
        //altrimenti inserisco il numero nei miei tentativi
    } else if(isNaN(number)){
        alert('non è un numero!');
    }
}

//controllo se ho perso
// - potrei controllare se esplosione == true?
// - potrei controllare se i tentativi sono minori del limite

//in tutti gli altri casi ho vinto!
//se voglio fare un controllo posso verificare se i tentativi sono uguali al limite





//Genero 16 numeri casuali su 100 numeri:
function mineInCampo(numBombe, dimCampo){ //numMine = 16 (numeroMine) --- dimCampo = 100 (dimensioneCampo)                               ----> 16, 100
    var posizBombe = []; //creo l'array vuoto
while ( posizBombe.length <= numBombe){ // la lunghezza del mio array sarà minore = al numero di Mine (16)                               ----> , 16
    var random = generaRandom(0, dimCampo); // Richiamo funzione numeri random, e  gli dico la dimensione da 1 a dimensioneCampo (100) ----> 1, 100
    if (posizBombe.includes(random) == false) { //Con il false scarto tutti i possibili doppioni
        posizBombe.push(random); // Pusho la somma nell'array
    }
}
return posizBombe;
}

//Solita funzione per creare a random un numero
var random = generaRandom(0, 100)
function generaRandom(min, max) {
     var centoRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
     return centoRandom;
 }
