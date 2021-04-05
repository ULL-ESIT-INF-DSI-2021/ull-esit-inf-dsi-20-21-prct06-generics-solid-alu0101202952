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

  /**
   * ### Method public static that returns like singleton method
   * @returns 
   */
  public static getRandomNumber(): RandomNumber {
    if (!RandomNumber.randomNumber) {
      RandomNumber.randomNumber = new RandomNumber();
    }
    return RandomNumber.randomNumber;
  }

  /**
   * ### Getter Number random
   * @returns the random number in an object class
   */
  getNumber(){
    return RandomNumber.randomNumber.inNumber;
  }


  /**
   * ### Getter items type 
   * @returns 
   */
  getItems(){
    return RandomNumber.randomNumber.items;
  }


  /**
   * ### Method getter item in the specific index
   * @param index 
   * @returns item in a specific index
   */
  getItem(index: number) {
    if (index >= RandomNumber.randomNumber.getNumberOfItems()) {
      return undefined;
    }
    return RandomNumber.randomNumber.items[index];
  }

  /**
   * ### Method addItem
   * @param item 
   */
  addItem(item: RandomNumberItem) {
    RandomNumber.randomNumber.items.push(item);
  }

  /**
   * ### Method getNumberfItems
   * @returns lenght of randomitems
   */
  getNumberOfItems() {
    return RandomNumber.randomNumber.items.length;
  }

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

  /**
   * ### Method floatRandom2
   * @param minRange range = n, minimun number that require to user
   * @param maxRange range = m, maximun number that require to user
   * @returns float random number between n and m, n include, 1 exclude
   */
  public floatRandom2(minRange: number, maxRange: number){
    minRange = 2;
    maxRange = 5;
    let result = Math.random() * (maxRange - minRange) + minRange;
    return result;
  }

  
  
   
}




/**
 * @class RandomNumberSetCollection that containe a set of random numbers
 */
export class  RandomNumberSetCollection <T extends RandomNumber> {
    private rNumberSet: Set<T>;

    constructor(items: T[]) {
      this.rNumberSet = new Set(items);
    }

    addItem(newItem: T) {
      this.rNumberSet.add(newItem);
    }
  
    getNumberOfItems() {
      return this.rNumberSet.size;
    }
  


  
}
