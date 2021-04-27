
function calcoloBiglietto() {
    // eta passeggero
    var eta = document.getElementById("eta_passeggero"); 
    // kilometri da percorrere
    var kmDaFare = document.getElementById("chilometri"); 
    // prezzo a km
    var prezzoBigliettoIntero = Math.round((kmDaFare * 0.21) * 100) /100;


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
}

