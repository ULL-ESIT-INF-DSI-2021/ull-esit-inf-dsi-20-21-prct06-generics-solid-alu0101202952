/**
 * ## Ejercicio propuesto clase LUNES PE 102
 * ### Desarrollo de Sistemas Informáticos
 * > - ANDREA CALERO CARO > alu0101202952
 */

/**
 * @type RandomNumberItem, este patrón creacional singleton permite instanciar una clase
 * una única vez, generalmente, para controlar el acceso a algún tipo de recurso compartido
 * como, en este caso un generador de números aleatorios.
 * Además, poner en práctica los principios SOLID.
 */
 export type RandomNumberItem = {
    item: number;
 }

/**
 * @enum ,
 * y así poner en práctica los principios SOLID, Single Responsability and Open-closed
 */
/*
export enum{

}
*/

/**
 * @class ,
 * y así poner en práctica los principios SOLID, Single Responsability and Open-closed
 */
export class RandomNumber {
  constructor(private readonly items: RandomNumberItem[],
    private readonly inNumber: number) {
  }

  getNumber(){
    return this.inNumber;
  }

  getItems(){
    return this.items;
  }
}

/**
 * @class ,
 * y así poner en práctica los principios SOLID, Single Responsability and Open-closed
 */
/*export class ClassSon extends Class1{

    print() {
        console.log(`I am a ${this.getName()}, I have ${this.getSides()} sides, ` +
          `and my area is ${this.getArea()}`);
    }
}*/


/*
 export class  FigureCollection <T extends Class1> {
    private figures: Set<T>;

    constructor(figures: T[]) {
      this.figures = new Set(figures);
    }


    print() {
        this.figures.forEach((figure) => figure.print());
    }
}*/
