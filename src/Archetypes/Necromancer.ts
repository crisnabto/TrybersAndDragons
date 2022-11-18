import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  damage: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    this.damage = 'mana';
    Necromancer.instances += 1;
  }

  get energyType(): EnergyType {
    return this.damage;
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }
}

export default Necromancer;