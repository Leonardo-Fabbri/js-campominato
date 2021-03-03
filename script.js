var arrayBombe=[];
var arrayNumeriUtente=[];
var numBombe=16; /*numero di bombe*/
var max= 100; /* totale numeri "caselle" livello 0*/
var mix= 80; /*totale numeri "caselle" livello 1*/
var mox=50; /*totale numeri "caselle" livello 2*/
var partitapersa= false;


while (arrayBombe.length < numBombe ) { 
   var numeroGenerato=getRandomNumber(1,100);
    if (!isInArray(arrayBombe, numeroGenerato)){
       arrayBombe.push(numeroGenerato);
       /* guarda riga 63*/
    }
}
console.log(arrayBombe.length); /* mostrami nella console i numeri random delle bombe */

var numeriUtente=prompt("inserisci numero") /* chiedo all'utente di inserire i numeri*/

/*cicla fino a 84 volte e fino a che il numero inserito dal giocatore è diverso dal array random:*/
 while ((arrayNumeriUtente.length < (max-numBombe)) && (arrayBombe, numeriUtente)== false) { 
     /*se il numero inserito dall'utente è = a un numero dell'array random sei morto*/
     if (isInArray(arrayBombe, numeroUtente)){
      alert("hai perso");
    }else if (isInArray())


}


function getRandomNumber (min, max) {
    return Math.floor(Math.random()* (max-min+1)+min);
}



function isInArray(array, value) {
    for (var i=0; i < array.length;i++) {
        if (value==array[i]) { /*accedi al singolo elemento[i]*/
            trovato=true;
            return trovato;  /* se trovo dentro al cilco è vero altrimenti torna ad essere falso*/
        }
    }
    /* se è falsa allora mettilo nella lista delle bombe = arrayBombe)*/
  return false; /*oppure undefind*/

}


















