console.clear();

function Player(name) {
  this.name = name;
  this.pointsWon = 0;
  this.gamesWon = 0;
}

Player.prototype.setPointsWon = function (points) {
  this.pointsWon = points;
};

Player.prototype.getPointsWon = function () {
  return this.pointsWon;
};

function Match(players) {
  this.players = players;
  this.currentGame = null;
}

Match.prototype.start = function () {
  this.currentGame = new Game(this.players);
  return this.currentGame;
};

Match.prototype.getCurrentGame = function () {
  return this.currentGame;
};

function Game(players) {
  this.players = players;
}

Game.prototype.wonPoint = function (player) {
  var p1, p2;

  this.players.forEach(function (p) {
    if (p === player) {
      p1 = p;
    } else {
      p2 = p;
    }
  });

  if (p1.pointsWon == 40 && p2.pointsWon != 40) {
    console.log("game");
  }

  if (player.pointsWon == 0) {
    player.pointsWon = 15;
  } else if (player.pointsWon == 15) {
    player.pointsWon = 30;
  } else {
    player.pointsWon = 40;
  }

  console.log(player.name, ":", player.pointsWon);

  if (p1.pointsWon == 40 && p2.pointsWon == 40) {
    console.log("deuce");
  }
};

var dan = new Player("Dan");
var bob = new Player("Bob");

var match = new Match([dan, bob]);
match.start();
const random = Math.floor(Math.random() * 2);
match.getCurrentGame().wonPoint(random ? dan : bob);
match.getCurrentGame().wonPoint(random ? dan : bob);
match.getCurrentGame().wonPoint(random ? dan : bob);
match.getCurrentGame().wonPoint(random ? dan : bob);
match.getCurrentGame().wonPoint(random ? dan : bob);
match.getCurrentGame().wonPoint(random ? dan : bob);
