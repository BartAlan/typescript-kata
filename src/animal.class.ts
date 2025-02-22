import IAnimal from './animal.interface';
import Food from './food/food';

// Créer une class Animal qui implémente l'interface IAnimal
// par défaut, la méthode eat augmente le poids de l'animal de 10
// par défaut, la méthode sleep réduit le poids de l'animal de 10
// le poids d'un animal ne peut pas être négatif

export default class Animal implements IAnimal {
  name: string;
  weight: number;

  constructor(name: string, weight: number) {
    this.name = name;
    if(weight > 0) this.weight = weight;
  }

  eat(arg: Food): void | string {
    this.weight += 10;
  }

  sleep(): void {
    this.weight -= 10;
    this.limitWeight();
  }

  limitWeight(): void | number {
    if(this.weight < 0) this.weight = 0;
  }

  toString():string {
    return `${this.name} pèse ${this.weight} kg`;
  }

}
