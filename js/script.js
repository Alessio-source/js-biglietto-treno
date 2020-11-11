function Calcola() {
  var userKm = document.getElementById("kmUser").value;
  console.log(userKm);

  var userEtà = document.getElementById("etàUser").value;
  console.log(userEtà);

  var prezzoElement = document.getElementById("prezzo");

  var prezzo;
  var calcolo;

  if (userEtà < 18) {
    prezzo = (0.21 * 80) / 100; //calcolo percentuale 20%
    calcolo = userKm * prezzo
    prezzoElement.innerHTML = "Prezzo: " + calcolo.toFixed(2) + "€";
  } else if (userEtà > 65) {
    prezzo = (0.21 * 60) / 100; //calcolo percentuale 40%
    calcolo = userKm * prezzo
    prezzoElement.innerHTML = "Prezzo: " + calcolo.toFixed(2) + "€";
  } else {
    prezzo = 0.21; //prezzo senza percentuale di sconto
    calcolo = userKm * prezzo
    prezzoElement.innerHTML = "Prezzo: " + calcolo.toFixed(2) + "€";
  }
}
