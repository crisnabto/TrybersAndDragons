interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: number;

  attack(enemy: Fighter): void;

  special?(enemy: Fighter): void;

  levelUp(): void;

  receiveDamage(attackPoints: number): number;

}

export default Fighter;