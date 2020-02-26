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
var numeroMine = 16;
var limiteMax = dimensioneCampo - numeroMine;


var posizioneMine = mineInCampo(numeroMine, dimensioneCampo);
console.log(posizioneMine);













//Genero 16 numeri casuali su 100 numeri:
function mineInCampo(numMine, dimCampo){ //numMine = 16 (numeroMine) --- dimCampo = 100 (dimensioneCampo)                               ----> 16, 100
    var posizMine = []; //creo l'array vuoto
while ( posizMine.length <= numMine){ // la lunghezza del mio array sarà minore = al numero di Mine (16)                               ----> , 16
    var random = generaRandom(0, dimCampo); // Richiamo funzione numeri random, e  gli dico la dimensione da 1 a dimensioneCampo (100) ----> 1, 100
    if (posizMine.includes(random) == false) { //Con il false scarto tutti i possibili doppioni
        posizMine.push(random); // Pusho la somma nell'array
    }
}
return posizMine;
}

console.log(posizioneMine);

function generaRandom(min, max) {
     var centoRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
     return centoRandom;
 }
