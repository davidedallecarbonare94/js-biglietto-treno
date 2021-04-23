//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere
var howManyKm = parseInt(prompt("How many kilometers do you have to travel?"));
console.log(howManyKm);
//e l'età del passeggero.
var howOldAreYou = parseInt(prompt("How old are you?"));
console.log(howOldAreYou);
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km(0.21 € al km)
var price = howManyKm * 0.21;
console.log(price);
/* calcolo dello sconto in base all'età */
var babyDiscount = ((price / 100) * 20).toFixed(2);
console.log(babyDiscount);
var totBaby = price - babyDiscount;
console.log(totBaby);
var grannyDiscount = ((price / 100) * 40).toFixed(2);
console.log(grannyDiscount);
var totGranny = price - grannyDiscount;
console.log(totGranny);
var noDiscount = "Non hai diritto ad alcun sconto"
//va applicato uno sconto del 20% per i minorenni

if (howOldAreYou <= 17) {
    document.getElementById("minorenni").innerHTML = totBaby;
    console.log(totBaby);
} else if (howOldAreYou >= 65) {
    document.getElementById("granny").innerHTML = totGranny;
} else (howOldAreYou >= 18 && howOldAreYou <= 64) {
    document.getElementById("nodiscount").innerHTML = noDiscount;
}



//va applicato uno sconto del 40% per gli over 65.


/* if (howOldAreYou <= 17) {
    document.getElementById("minorenne").innerHTML = totBaby;
    console.log(totBaby);
} else if (howOldAreYou >= 65) {
    document.getElementById("granny").innerHTML = totGranny;
    console.log(totGranny);
} else (howOldAreYou >= 18 && howOldAreYou <= 64);
    noDiscount */