// TRACCIA
// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza (numero casuale tra 1 e 9)
// Prezzo calcolato
// Categoria selezionata dall'utente (offerta)
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.

// Numero casuale codice treno 90k - 100k
var codiceTreno = Math.floor(Math.random() * (100000 - 90000 + 1)) + 90000;
console.log("codiceTreno " + codiceTreno);

// Numero casuale numero carrozza 1 - 9
var numeroCarrozza = Math.ceil(Math.random()*9);
console.log("Numero casuale carrozza " + numeroCarrozza);
