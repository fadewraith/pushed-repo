'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };


const [player1, player2] = game.players;
// console.log(player1, player2);

// const [gk, ...fieldplayers] = player1;
// console.log(gk, fieldplayers);

// const [...allplayers] = game.players;
// console.log(...allplayers);

const allplayers = [...player1, ...player2];
console.log(allplayers);

const players1final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1final);

// const {team1: t1, x: draw, team2: t2} = game.odds;
const {odds: {team1, x: draw, team2}} = game;
// console.log(t1, draw, t2);
console.log(team1, draw, team2);

const printGoals = function (...players) {
    // for(let i=0;i<players.length;i++){
    //     console.log(players(i));
    // }

    console.log(`total number of goals scored ${players.length}`);
}

// printGoals('hello', 'world');
console.log(game.scored);

team1 < team2 && console.log('team 1 is more likely to win');
team1 > team2 && console.log('team 2 is more likely to win');