import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _monsters: Fighter[] | SimpleFighter[];

  constructor(
    player: Fighter, 
    monsters: Fighter[] | SimpleFighter[],
  ) {
    super(player);
    this._monsters = monsters;
  }

  fight(): number {
    this._monsters.forEach((monster) => {
      while (monster.lifePoints !== -1 && this.player.lifePoints !== -1) {
        monster.attack(this.player);
        this.player.attack(monster);
      }
    });
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVE;