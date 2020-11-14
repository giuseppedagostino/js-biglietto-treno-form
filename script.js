// Pulsante genera
var pulsanteGenera = document.getElementById('genera');
pulsanteGenera.addEventListener("click",
  function () {
    // L'utente inserisce nome e cognome
    var nome = document.getElementById('nome').value;
    console.log("Nome inserito " + nome);
    document.getElementById('nomeBiglietto').innerHTML = nome;

    // L'utente inserisce il numero di km
    var chilometri = document.getElementById('chilometri').value;
    console.log("Chilometri inseriti " + chilometri);

    // €0.21 al km
    var prezzoKM = 0.21;
    console.log("Prezzo al chilometro €" + prezzoKM);
    var prezzoCliente = chilometri * prezzoKM;
    console.log("Calcolo prezzo cliente €" + prezzoCliente);

    // Gestione età del passeggero
    var eta = document.getElementById('eta').value;
    console.log("Categoria inserita " + eta);
    if (eta == "Minorenne") {
      var prezzoFinale = prezzoCliente - ((prezzoCliente / 100) * 20);
      document.getElementById('offerta').innerHTML = "Sconto Silver";
      document.getElementById('offertaSottotitolo').innerHTML = "Offerta riservata ai minorenni.";
    } else if (eta == "Over 65") {
      var prezzoFinale = prezzoCliente - ((prezzoCliente / 100) * 40);
      document.getElementById('offerta').innerHTML = "Sconto Gold";
      document.getElementById('offertaSottotitolo').innerHTML = "Offerta riservata agli over 65.";
    } else {
      var prezzoFinale = prezzoCliente;
      document.getElementById('offerta').innerHTML = "Biglietto Standard";
    }
    console.log("Prezzo Finale non arrotondato €" + prezzoFinale);

    // Arrotondamento per eccesso ai due numeri decimali
    prezzoFinale = prezzoFinale.toFixed(2);
    console.log("Prezzo Finale €" + prezzoFinale);
    document.getElementById('prezzoFinale').innerHTML = "€" + prezzoFinale;

    // Numero casuale codice treno 90k - 100k
    var codiceTreno = Math.floor(Math.random() * (100000 - 90000 + 1)) + 90000;
    console.log("codiceTreno " + codiceTreno);
    document.getElementById('codiceTrenoBiglietto').innerHTML = codiceTreno;

    // Numero casuale numero carrozza 1 - 9
    var numeroCarrozza = Math.ceil(Math.random()*9);
    console.log("numeroCarrozza " + numeroCarrozza);
    document.getElementById('numeroCarrozzaBiglietto').innerHTML = numeroCarrozza;

    // Cambio la classe del biglietto
    var biglietto = document.getElementById('biglietto');
    biglietto.classList.remove("hidden");
    biglietto.classList.add("visible");
  }
);

// Pulsante annulla
var pulsanteAnnulla = document.getElementById('annulla');
pulsanteGenera.addEventListener("click",
  function () {

  }
);
