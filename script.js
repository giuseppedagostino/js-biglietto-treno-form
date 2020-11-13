// TRACCIA
// Creiamo un finto biglietto del treno con:
// FATTO Nome passeggero
// FATTO Codice treno (numero casuale tra 90000 e 100000 escluso)
// FATTO Numero carrozza (numero casuale tra 1 e 9)
// FATTO Prezzo calcolato
// FATTO Categoria selezionata dall'utente (offerta)
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.

// Pulsante genera
var pulsanteGenera = document.getElementById('genera');
pulsanteGenera.addEventListener("click",
  function () {
    // L'utente inserisce nome e cognome
    var nome = document.getElementById('nome').value;
    console.log("Nome inserito " + nome);

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
    } else if (eta == "Over 65") {
      var prezzoFinale = prezzoCliente - ((prezzoCliente / 100) * 40);
    } else {
      var prezzoFinale = prezzoCliente;
    }
    console.log("Prezzo Finale non arrotondato €" + prezzoFinale);

    // Arrotondamento per eccesso ai due numeri decimali
    prezzoFinale = prezzoFinale.toFixed(2);
    console.log("Prezzo Finale €" + prezzoFinale);

    // Numero casuale codice treno 90k - 100k
    var codiceTreno = Math.floor(Math.random() * (100000 - 90000 + 1)) + 90000;
    console.log("codiceTreno " + codiceTreno);

    // Numero casuale numero carrozza 1 - 9
    var numeroCarrozza = Math.ceil(Math.random()*9);
    console.log("numeroCarrozza " + numeroCarrozza);
  }
);
