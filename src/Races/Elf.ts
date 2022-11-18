import Race from './Race';

class Elf extends Race {
  maxLifePoints: number;
  // instances = 0;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
    Elf.instances += 1;
  }

  static createdRacesInstances(): number {
    return this.instances;
  }
}

export default Elf;