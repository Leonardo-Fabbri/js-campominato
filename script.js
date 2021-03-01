var array = [];
while(array.length < 16){
    var numeriRandom= Math.floor(Math.random() * 100) + 1; /*restituisce un numero da 0 100*/
    if(array.indexOf(numeriRandom)== -1) {
    array.push(numeriRandom);
    }
/*"se il numero non esiste nel array (-1) allora push in array"*/
}
console.log(array);

var i=0;
var NumeroUtente;

  
for (i=1; i<16; i++) {
    NumeroUtente=prompt("scrivi numero");
    console.log(NumeroUtente);
 }

// while (i<16 || NumeroUtente==numeriRandom) {
//     NumeroUtente=prompt("scrivi numero");
//     console.log (NumeroUtente);
//     if (NumeroUtente==numeriRandom) {
//         true;
//         console.log ("hai vinto");
//     }else {
//         false;
       

//     }

// }




// while (i<1) {
//     NumeroUtente=prompt("scrivi numero");
//     console.log(NumeroUtente);

//     // // if (NumeroUtente==Math.floor) {
//     //     true;
//     //     NumeroUtente=console.log ("hai vinto");

//     // } else {
//     //     false;

//     // }
// }

  