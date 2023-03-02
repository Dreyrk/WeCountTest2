// On utilise le hook useState pour initialiser les états du match

function simulerJeu(joueur1, joueur2) {
  const points = ["0", "15", "30", "40"];

  let scoreJoueur1 = points.indexOf(joueur1.points);
  let scoreJoueur2 = points.indexOf(joueur2.points);

  // Si l'un des joueurs a l'avantage, on l'ajoute à son score
  if (joueur1.avantage) {
    scoreJoueur1 += 1;
  } else if (joueur2.avantage) {
    scoreJoueur2 += 1;
  }

  // Si les deux joueurs ont atteint 40 points ou plus et qu'ils sont à égalité, on passe en mode avantage
  if (joueur1.points === "40" && joueur2.points === "40") {
    joueur1.avantage = true;
    joueur2.avantage = true;
  }

  // Si l'un des joueurs a l'avantage et qu'il marque un point, il remporte le jeu
  if (joueur1.avantage && scoreJoueur1 > scoreJoueur2) {
    joueur1.jeux += 1;
    joueur1.avantage = false;
    joueur1.points = "0";
    joueur2.points = "0";
  } else if (joueur2.avantage && scoreJoueur2 > scoreJoueur1) {
    joueur2.jeux += 1;
    joueur2.avantage = false;
    joueur1.points = "0";
    joueur2.points = "0";
  } else {
    // Sinon, le joueur qui marque le point a son score incrémenté
    if (Math.random() < 0.5) {
      joueur1.points = points[scoreJoueur1 + 1] || "40";
    } else {
      joueur2.points = points[scoreJoueur2 + 1] || "40";
    }
  }
}
