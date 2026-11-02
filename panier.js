let prix = Number(prompt("Prix de l'article (en €) :"));
let quantite = Number(prompt("Quantité :"));

let total = prix * quantite;

if (total > 50) {
  total = total * 0.9; // réduction de 10 %
  alert("Réduction de 10 % appliquée ! Total : " + total.toFixed(2) + " €");
} else {
  alert("Total : " + total.toFixed(2) + " €");
}