import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  damage: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    this.damage = 'stamina';
    Warrior.instances += 1;
  }

  get energyType(): EnergyType {
    return this.damage;
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }
}

export default Warrior;