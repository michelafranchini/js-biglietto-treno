// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// Chiedere quanti chilometri deve fare
var kmDaFare = parseInt(prompt("Quanti chilometri devi percorrere?")); 
console.log("Quanti chilometri devi percorrere?", kmDaFare); 
document.getElementById("chilometri").innerHTML = kmDaFare + " km"; 
//Età del passeggero
var eta = parseInt(prompt("Quanti anni hai?"));
console.log("Quanti anni hai?", eta); 
document.getElementById("eta_passeggero").innerHTML = eta + " anni"; 
//prezzo chilometri (0.21 € a km)
var prezzoBigliettoIntero = Math.round((kmDaFare * 0.21) * 100) /100; 
console.log(prezzoBigliettoIntero);


if (eta < 18) {
    //sconto 20% under 18
    var scontoUnder18 = prezzoBigliettoIntero / 100 * 20; 
    console.log("Sconto under 18" , scontoUnder18);

    var prezzoUnder18 = Math.round((prezzoBigliettoIntero - scontoUnder18) *100)/100; 
    console.log("Prezzo scontato under 18" , prezzoUnder18);

    document.getElementById("prezzo_finale").innerHTML = prezzoUnder18 + "€";

} else if (eta >=65) {
    //sconto 40% over 65
    var scontoOver65 = prezzoBigliettoIntero / 100 * 40;
    console.log("Sconto over 65" , scontoOver65);

    var prezzoOver65 = Math.round((prezzoBigliettoIntero - scontoOver65) * 100) /100; 
    console.log("Prezzo scontato under 18" , prezzoOver65);

    document.getElementById("prezzo_finale").innerHTML = prezzoOver65 + "€" ;
} else {
    // nessuno sconto
    console.log("Nessuno sconto" , prezzoBigliettoIntero);
    document.getElementById("prezzo_finale").innerHTML = prezzoBigliettoIntero + "€";
}

