export enum SUnits{
  
}


//La unidad fundamental para medir el tiempo es en segundos
export enum TUnits {
  seconds = 1,
  minutes = 60,
  hours = 3600,
  day = 86400,
  week = 604800,
  month = 2592000,
  year = 31536000,
  
}


/**
 *  ### Interfaz genérica que hace la conversión de tiempo
 */

export interface isConvertible<T>{
// hacer una funcion que en función de la medida que se le pase saque una conversión u otra
/**
 * name
 */
  convertirStoMinutes(numMinutes: number): void; 
  addMagnitude(newItem: T): void;
  getNumberOfMagnitude(): number;
}


export abstract class MagnitudeConvert<T> implements isConvertible<T> {
  constructor(private value: T[]) {
  }

  addMagnitude(newMagnitude: T) {
    this.value.push(newMagnitude);
  }

  getNumberOfMagnitude() {
    return this.value.length;
  }
  /*
  public convertirStoMinutes(numMinutes: number): void {
    let result = numMinutes * TUnits.minutes;
	  return console.log(`${numMinutes} minutos son ${result} segundos`)
  } */

  abstract print(): void;

}

export class MagnitudeTime extends MagnitudeConvert<TUnits>{
  constructor(protected valueTime: TUnits[], private amount: number, private unit: string) { 
    super(valueTime)
  }
  getMagnitude() {
    return this.valueTime;
  }
  getAmount(){
    return this.amount;
  }
  getUnit(){
    return this.unit;
  }
  addMagnitude(newMagnitude: TUnits) {
    this.valueTime.push(newMagnitude);
  }
  addAmount(nAmount: TUnits){
    for(var i = 0; i < this.valueTime.length; i++){
      this.valueTime[0] = nAmount;
    }
  }
  addUnit(nUnit: TUnits){
    for(var i = 0; i < this.valueTime.length; i++){
      this.valueTime[1] = nUnit;
    }
  }
  
  print() {
    console.log(`${this.getAmount()} ${this.getUnit()}, is ${this.convertirStoMinutes(this.getAmount())} seconds`);
  }
}

export class MagnitudeCollection<T> implements isConvertible<T>{
  constructor(private items: MagnitudeTime[]) {
  }
  convertirStoMinutes(_numMinutes: number): void {
    throw new Error("Method not implemented.");
  }
  addMagnitude(newItem: T): T {
    return newItem;
  }
  getNumberOfMagnitude(): number {
    return this.items.length;
  }

  addMagnitudeTime(newItem: MagnitudeTime) {
    this.items.push(newItem);
  }

  getMagnitudeTime(index: number) {
    return this.items[index];
  }

  getNumberOfMagnitudes() {
    return this.items.length;
  }
}


const myConvertion = new MagnitudeCollection([
  new MagnitudeTime([], 2,'minutes')
]);


for(var i = 0; i<myConvertion.getNumberOfMagnitude(); i++){
  myConvertion.getMagnitudeTime(i).print();
}




/**
 * import {isConvertible} from '../src/ejercicio-2/isConvertible';
import {Magnitude} from '../src/ejercicio-2/isConvertible';
 */