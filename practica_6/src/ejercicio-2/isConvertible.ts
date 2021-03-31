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

export enum LUnits{
  m = 1,
  km = 1000,
  cm = 0.01,
  mm = 0.001,
  mile = 1609.34,
  yard = 0.9144,
  foot = 0.3048,
  inch = 0.0254,
  mile_nautic = 1852
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

export enum TemUnits{
  kelvin = 1,
  basic = 273.15,
  /**
   *  Grado Celsius, Fórmula = nºC + 273.15 = xº K
   *  EJEMPLO: 1 = 274.15K, 2 = 275.15...
   */
  c = 274.15,  
  /**
   *  Grado Fahrenheit, Fórmula (nºF -32) * 5/9 + 273.15 = xº K
   * EJEMPLO: 1 = 255.928K, 2 = 256.483
  */ 
  fahrenheit = 255.928,
   
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
  convertirToKilograms(amount: number, type: string): void; 
  convertirToMeters(amount: number, type: string): void;
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

  public convertirToKilograms(amount: number, type: string){
    if( type == 'gram' || type == 'grams'){
      let result = amount * MUnits.g;
      return console.log(`${amount} gramo/s son ${result} kilogramos`);
    } else if(type == 'miligrams' || type == 'miligram'){
      let result = amount * MUnits.milig;
      return console.log(`${amount} miligramo/s son ${result} kilogramos`);
    } else if(type == 'micrograms' || type == 'microgram'){
      let result = amount * MUnits.microg;
      return console.log(`${amount} microgramo/s son ${result} kilogramos`);
    } else if(type == 'ton' || type == 'tons'){
      let result = amount * MUnits.t;
      return console.log(`${amount} Tonelada/s son ${result} kilogramos`)
    } else {
      return console.log(`Correct convertion`);
    } 
  }

  public convertirToMeters(amount: number, type: string){
    if( type == 'kilometers' || type == 'kilometer'){
      let result = amount * LUnits.km;
      return console.log(`${amount} Kilometros son ${result} metros`);
    } else if(type == 'centimeter' || type == 'centimeters'){
      let result = amount * LUnits.cm;
      return console.log(`${amount} centimetro/s son ${result} metros`);
    } else if(type == 'milimeter' || type == 'milimeters'){
      let result = amount * LUnits.mm;
      return console.log(`${amount} milimetro/s son ${result} metros`);
    } else if(type == 'mile' || type == 'miles'){
      let result = amount * LUnits.mile;
      return console.log(`${amount} milla/s son ${result} metros`)
    } else if(type == 'yard' || type == 'yards'){
      let result = amount * LUnits.yard;
      return console.log(`${amount} yarda/s son ${result} metros`)
    } else if(type == 'foot' || type == 'foots'){
      let result = amount * LUnits.foot;
      return console.log(`${amount} pie/s son ${result} metros`)
    }else if(type == 'inch' || type == 'inches'){
      let result = amount * LUnits.inch;
      return console.log(`${amount} pulgada/s son ${result} metros`)
    }else if(type == 'nautical miles' || type == 'nautical mile'){
      let result = amount * LUnits.mile_nautic;
      return console.log(`${amount} milla/s nautica/s son ${result} metros`)
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

export class MagnitudeLength extends MagnitudeConvert<LUnits>{
  constructor(protected valueLength: LUnits[], private amount: number, private unit: string) { 
    super(valueLength)
  }
  getMagnitude() {
    return this.valueLength;
  }
  getAmount(){
    return this.amount;
  }
  getUnit(){
    return this.unit;
  }
  addMagnitude(newMagnitude: LUnits) {
    this.valueLength.push(newMagnitude);
  }
  addAmount(nAmount: LUnits){
    for(var i = 0; i < this.valueLength.length; i++){
      this.valueLength[0] = nAmount;
    }
  }
  addUnit(nUnit: LUnits){
    for(var i = 0; i < this.valueLength.length; i++){
      this.valueLength[1] = nUnit;
    }
  }
  
  print() {
    console.log(`${this.getAmount()} ${this.getUnit()}, is ${this.convertirStoMinutes(this.getAmount(), this.getUnit())} meters`);
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

export class MagnitudeTemperature extends MagnitudeConvert<TemUnits>{
  constructor(protected valueTemp: TemUnits[], private amount: number, private unit: string) { 
    super(valueTemp)
  }
  getMagnitude() {
    return this.valueTemp;
  }
  getAmount(){
    return this.amount;
  }
  getUnit(){
    return this.unit;
  }
  addMagnitude(newMagnitude: TemUnits) {
    this.valueTemp.push(newMagnitude);
  }
  addAmount(nAmount: TemUnits){
    for(var i = 0; i < this.valueTemp.length; i++){
      this.valueTemp[0] = nAmount;
    }
  }
  addUnit(nUnit: TemUnits){
    for(var i = 0; i < this.valueTemp.length; i++){
      this.valueTemp[1] = nUnit;
    }
  }
  
  print() {
    console.log(`${this.getAmount()} ${this.getUnit()}, is ${this.convertirStoMinutes(this.getAmount(), this.getUnit())} kelvin`);
  }
}

export class MagnitudeCollection<T> implements isConvertible<T>{
  constructor(private items: MagnitudeTime[]) {
  }
  convertirToMeters(_amount: number, _type: string): void {
    throw new Error("Method not implemented.");
  }
  convertirToKilograms(_amount: number, _type: string): void {
    throw new Error("Method not implemented.");
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