//La unidad fundamental para medir el tiempo es en m/s
export enum SUnits{
  m_s = 1,
  pie_s = 0.3048,
  k_h = 0.277778,
  mile_h = 0.44704,
  knots = 0.514444
}

//La unidad fundamental en el sistema internacional de la masa es el kilogramo
export enum MUnits{
  kg = 1,
  g = 0.001,
  milig = 0.0000001,
  microg = 0.0000000001,
  t = 1000
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
  convertirToMS(amount: number, type: string): void;
  convertirStoMinutes(amount: number, type: string): void; 
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
  
  public convertirStoMinutes(amount: number, type: string): void {
    if( type == 'pie' || type == 'pies' || type == 'foot'){
      let result = amount * SUnits.pie_s;
      return console.log(`${amount} pies/s son ${result} m/s`);
    } else if(type == 'kilometer' || type == 'kilometre' || type == 'k/h'){
      let result = amount * SUnits.k_h;
      return console.log(`${amount} kilometro/s por hora son ${result} m/s`);
    } else if(type == 'mile' || type == 'miles'){
      let result = amount * SUnits.mile_h;
      return console.log(`${amount} milla/s por hora son ${result} m/s`);
    } else if(type == 'knot' || type == 'knots'){
      let result = amount * SUnits.knots;
      return console.log(`${amount} nudo/s son ${result} m/s`)
    } else {
      return console.log(`Correct convertion`);
    } 
  } 

  public convertirToMS(amount: number, type: string){
    if( type == 'minute' || type == 'minutes'){
      let result = amount * TUnits.minutes;
      return console.log(`${amount} minutos son ${result} segundos`);
    } else if(type == 'hour' || type == 'hours'){
      let result = amount * TUnits.hours;
      return console.log(`${amount} hora/s son ${result} segundos`);
    } else if(type == 'day' || type == 'days'){
      let result = amount * TUnits.day;
      return console.log(`${amount} dia/s son ${result} segundos`);
    } else if(type == 'week' || type == 'weeks'){
      let result = amount * TUnits.week;
      return console.log(`${amount} semana/s son ${result} segundos`)
    } else if(type == 'month' || type == 'months'){
      let result = amount * TUnits.month;
      return console.log(`${amount} mes/es son ${result} segundos`)
    } else if(type == 'year' || type == 'years'){
      let result = amount * TUnits.year;
      return console.log(`${amount} año/s son ${result} segundos`)
    } else {
      return console.log(`Correct convertion`);
    } 
  }

  abstract print(): void;

}

export class MagnitudeSpeed extends MagnitudeConvert<SUnits>{
  constructor(protected valueSpeed: SUnits[], private amount: number, private unit: string) { 
    super(valueSpeed)
  }
  getMagnitude() {
    return this.valueSpeed;
  }
  getAmount(){
    return this.amount;
  }
  getUnit(){
    return this.unit;
  }
  addMagnitude(newMagnitude: SUnits) {
    this.valueSpeed.push(newMagnitude);
  }
  addAmount(nAmount: SUnits){
    for(var i = 0; i < this.valueSpeed.length; i++){
      this.valueSpeed[0] = nAmount;
    }
  }
  addUnit(nUnit: SUnits){
    for(var i = 0; i < this.valueSpeed.length; i++){
      this.valueSpeed[1] = nUnit;
    }
  }
  
  print() {
    console.log(`${this.getAmount()} ${this.getUnit()}, is ${this.convertirStoMinutes(this.getAmount(), this.getUnit())} m/s`);
  }
}

export class MagnitudeMass extends MagnitudeConvert<MUnits>{
  constructor(protected valueMass: MUnits[], private amount: number, private unit: string) { 
    super(valueMass)
  }
  getMagnitude() {
    return this.valueMass;
  }
  getAmount(){
    return this.amount;
  }
  getUnit(){
    return this.unit;
  }
  addMagnitude(newMagnitude: MUnits) {
    this.valueMass.push(newMagnitude);
  }
  addAmount(nAmount: MUnits){
    for(var i = 0; i < this.valueMass.length; i++){
      this.valueMass[0] = nAmount;
    }
  }
  addUnit(nUnit: MUnits){
    for(var i = 0; i < this.valueMass.length; i++){
      this.valueMass[1] = nUnit;
    }
  }
  
  print() {
    console.log(`${this.getAmount()} ${this.getUnit()}, is ${this.convertirStoMinutes(this.getAmount(), this.getUnit())} kilograms`);
  }
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
    console.log(`${this.getAmount()} ${this.getUnit()}, is ${this.convertirStoMinutes(this.getAmount(), this.getUnit())} seconds`);
  }
}

export class MagnitudeCollection<T> implements isConvertible<T>{
  constructor(private items: MagnitudeTime[]) {
  }
  convertirToMS(_amount: number, _type: string): void {
    throw new Error("Method not implemented.");
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

/*
const myConvertion = new MagnitudeCollection([
  new MagnitudeTime([], 2,'minutes')
]);


for(var i = 0; i<myConvertion.getNumberOfMagnitude(); i++){
  myConvertion.getMagnitudeTime(i).print();
}
*/



/**
 * import {isConvertible} from '../src/ejercicio-2/isConvertible';
import {Magnitude} from '../src/ejercicio-2/isConvertible';
 */