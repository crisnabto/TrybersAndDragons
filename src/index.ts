import Character from './Character';
import Monster from './Monster';
import Battle, { PVE, PVP } from './Battle';

const player1 = new Character('Player 1');
const player2 = new Character('Player 2');
const player3 = new Character('Player 3');

player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1 = new Monster();
const monster2 = new Monster();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (battles: Battle[]): void => {
  battles.forEach((battle) => {
    battle.fight();
  });
};

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};