
//La unidad fundamental para medir el tiempo es en segundos
export enum TUnits {
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
  /*public convertirStoMinutes(numMinutes: TUnits) {
    let result = numMinutes*minutes;
	  return console.log(`${numMinutes} minutos son ${result} segundos`)
  } */
}


export abstract class Magnitude<T> implements isConvertible<T> {
  constructor(private value: T[]) {
  }

  addMagnitude(newMagnitude: T) {
    this.value.push(newMagnitude);
  }

  getNumberOfMagnitude() {
    return this.value.length;
  }

  abstract print(): void;

}



export class MagnitudeTime<TUnits> extends Magnitude<TUnits>{
  constructor(protected valueTime: TUnits[], private amount: TUnits, private unit: string) { 
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
    console.log(`${this.getAmount()} time, is ${this.getMagnitude()} seconds`);
  }
  
  
}

const myConvertion = new MagnitudeTime<TUnit>([],2, 'minutos');

for(var i = 0; i < myConvertion.getAmount(); i++){
  myConvertion.getAmount().print();
}