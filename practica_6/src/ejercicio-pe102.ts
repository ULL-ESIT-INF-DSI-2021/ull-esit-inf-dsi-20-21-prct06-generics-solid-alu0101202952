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
 * @class ,
 * y así poner en práctica los principios SOLID, Single Responsability and Open-closed
 */
export class RandomNumber {

  private items: RandomNumberItem[];
  private inNumber: number;

  private static randomNumber: RandomNumber;

  constructor() {
    this.items = [];
    this.inNumber = 0;
  }

  
  public static getRandomNumber(): RandomNumber {
    if (!RandomNumber.randomNumber) {
      RandomNumber.randomNumber = new RandomNumber();
    }
    return RandomNumber.randomNumber;
  }

  getNumber(){
    return RandomNumber.randomNumber.inNumber;
  }

  setNumber(inNumber: number){
    RandomNumber.randomNumber.inNumber = inNumber;
  }

  getItems(){
    return RandomNumber.randomNumber.items;
  }

  setItems(items: []){
    RandomNumber.randomNumber.items = items;
  }

  /*
  getItem(index: number) {
    if (index >= RandomNumber.randomNumber.getNumberOfItems()) {
      return undefined;
    }
    return RandomNumber.randomNumber.items[index];
  }

  addItem(item: RandomNumberItem) {
    RandomNumber.randomNumber.items.push(item);
  }

  getNumberOfItems() {
    return RandomNumber.randomNumber.items.length;
  }*/

  /**
   * ### Method floatRandom1
   * @param minRange range = 0
   * @param maxRange range = 1
   * @return float random number between 0 and 1, 0 incluído, 1 excluído
   */
  public floatRandom1(minRange: number, maxRange: number){
    minRange = 0;
    maxRange = 1;
    let result = Math.random() * (maxRange - minRange) + minRange
    return result;
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
