var arrayBombe=[];
var arrayNumeriUtente=[];
var numBombe=16; /*numero di bombe*/
var max= 100; /* totale numeri "caselle" livello 0*/
var mix= 80; /*totale numeri "caselle" livello 1*/
var mox=50; /*totale numeri "caselle" livello 2*/
var partitapersa= false;



while (arrayBombe.length < numBombe ) { 
   var numeroGenerato=getRandomNumber(1,max);
    if (!isInArray(arrayBombe, numeroGenerato)){
       arrayBombe.push(numeroGenerato);
       /* guarda riga 63*/
    }
}
console.log(arrayBombe.length); /* mostrami nella console i numeri random delle bombe */
console.log(arrayBombe); 

/*cicla fino a 84 volte e fino a che i numeri inseriti dal giocatore sono diversi dal array random:*/
 while (arrayNumeriUtente.length <max-numBombe)/* && (arrayBombe, numeriUtente)== false) */ {

    /* chiedo all'utente di inserire i numeri per 84 volte*/
    var numeriUtente= parseInt(prompt("inserisci numero")); 

    
    /*se il numero inserito dall'utente è = a un numero dell'array random sei morto random=bomba!!!!*/
    if (isInArray(arrayBombe, numeriUtente)){
        alert("hai perso");
    } else if (isInArray(arrayNumeriUtente, numeriUtente)==false) {
    arrayNumeriUtente.push(numeriUtente);
    } /* E SE il numero scritto dall'utente,nel propt, non è nella lista (arrayNumeriUtente)  allora lo metto e continuo a giocare */
    else if (isInArray(arrayNumeriUtente, numeriUtente)== true) { /* il numero è già stato inserito precedentemente*/
        alert("numero già inserito prova con un altro");
      /*se ha non inserito per 84 volte nel prompt numeri già ripetuti e non ha preso bombe (array random) allora ha vinto*/
    }else if (arrayNumeriUtente.length == max-numBombe) {
        alert("hai vinto");
    }

}


function getRandomNumber (min, max) {
    return Math.floor(Math.random()* (max-min+1)+min);
}



function isInArray(arrayBombe, value) {
    for (var i=0; i < arrayBombe.length;i++) {
        if (value==arrayBombe[i]) { /*accedi al singolo elemento[i]*/
            trovato=true;
            return trovato;  /* se trovo dentro al cilco è vero altrimenti torna ad essere falso*/
        }
    }
    /* se è falsa allora mettilo nella lista delle bombe = arrayBombe)*/
  return false; /*oppure undefind*/

}


















