
//La unidad fundamental para medir el tiempo es en segundos
export enum TUnits{
  minutes = 60,
  hours = 3600,
  day = 86400,
  week = 604800,
  month = 2592000,
  year = 31536000
}

/**
 *  ### Interfaz genérica que hace la conversión de tiempo
 */

export interface isConvertible<T, U>{
// hacer una funcion que en función de la medida que se le pase saque una conversión u otra
/**
 * name
 */
  public convertirStoMinutes(numMinutes: TUnits) {
    let result = numMinutes*minutes;
	  return console.log(`${numMinutes} minutos son ${result} segundos`)
  } 
}



export abstract class Magnitude<TUnits> implements isConvertible<TUnits, TUnits> {
  constructor(private value: number) { 
  }

  getMagnitude() {
    return this.value;
  }
  
  setMagnitude(value: number) {
    this.value = value;
  }

  
}

export class MagnitudeTime<TUnits> extends Magnitude<TUnits>{
  constructor(protected valueTime: number) { 
    super(valueTime)
  }

  getMagnitude() {
    return this.valueTime;
  }
  
  setMagnitude(valueTime: number) {
    this.valueTime = valueTime;
  }
}

const myConvertion = new MagnitudeTime([
  new Rectangle('RedRectangle', 'red', 10, 5),
  new Rectangle('YellowRectangle', 'yellow'),
]);
