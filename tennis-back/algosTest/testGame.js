// Définition des variables
let joueur1 = {
  nom: "Joueur 1",
  score: 0,
  avantage: false,
};
let joueur2 = {
  nom: "Joueur 2",
  score: 0,
  avantage: false,
};
let score = ["0", "15", "30", "40"];
let tour = 1;

// Fonction pour obtenir le score d'un joueur
function obtenirScore(joueur) {
  if (joueur.score >= 3 && joueur.score === joueur2.score) {
    joueur.avantage = true;
    return "Avantage " + joueur.nom;
  } else if (joueur.avantage && joueur.score > joueur2.score + 1) {
    joueur.avantage = false;
    return "Jeu " + joueur.nom;
  } else if (joueur.score >= 4 && joueur.score === joueur2.score + 1) {
    return "Jeu " + joueur.nom;
  } else {
    return score[joueur.score];
  }
}

// Fonction pour jouer un point
function jouerPoint() {
  if (Math.random() < 0.5) {
    joueur1.score++;
  } else {
    joueur2.score++;
  }
}

// Boucle principale du jeu
while (joueur1.score < 4 && joueur2.score < 4) {
  jouerPoint();
  console.log(
    "Tour " +
      tour +
      " : " +
      obtenirScore(joueur1) +
      " - " +
      obtenirScore(joueur2)
  );
  tour++;
}

// Affichage du gagnant
if (joueur1.score > joueur2.score) {
  console.log(joueur1.nom + " remporte le match !");
} else {
  console.log(joueur2.nom + " remporte le match !");
}
