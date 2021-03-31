/**
 * @enum SUnits, SpeedUnits
 * La unidad fundamental para medir la velocidad es en m/s
 */
export enum SUnits{
  m_s = 1,
  pie_s = 0.3048,
  k_h = 0.277778,
  mile_h = 0.44704,
  knots = 0.514444
}

/**
 * @enum MUnits, MassUnits
 * La unidad fundamental en el sistema internacional de la masa es el kilogramo
 */
export enum MUnits{
  kg = 1,
  g = 0.001,
  milig = 0.0000001,
  microg = 0.0000000001,
  t = 1000
}

/**
 * @enum LUnits, LengthUnits
 * La unidad fundamental en el sistema internacional de la longitus es el metro
 */
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

/**
 * @enum TUnits,  TimesUnits
 * La unidad fundamental para medir el tiempo es en segundos
 */
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
 * @enum TemUnits,  TemperatureUnits
 * La unidad fundamental para medir la temperatura es en grados kelvin
 */
export enum TemUnits{
  kelvin = 1,
  basic = 273.15,
  /**
   *  @param c Grado Celsius, Fórmula = nºC + 273.15 = xº K
   *  EJEMPLO: 1 = 274.15K, 2 = 275.15...
   */
  c = 274.15,  
  /**
   * @param fahrenheit Grado Fahrenheit, Fórmula (nºF -32) * 5/9 + 273.15 = xº K
   * EJEMPLO: 1 = 255.928K, 2 = 256.483
  */ 
  fahrenheit = 255.928,  
}

/**
 * @enum FUnits,  ForceUnits
 * La unidad fundamental para medir la fuerza es en newton
 * @param gf == gram-force
 * @param kf == kilogramforce
 * @param kn == kilonewton
 */
export enum FUnits{
  newton =1,
  kn = 1000,
  gf = 0.00980665,
  kf = 9.80665
}

/**
 * @enum VUnits,  VolumeUnits
 * La unidad fundamental para medir el volumen es en m^3
 */
export enum VUnits{
  m3 = 1,
  l = 0.001,
  cm3 = 0.0000001,
  mm3 = 0.0000000001 
}


/**
 *  ### Interfaz genérica que hace la conversión de tiempo
 * @interface isConvertible De forma genérica permite convertir dos unidades de medidas de tipo T
 * siendo T los posbibles enum antes nombrados
 */
export interface isConvertible<T>{

  convertirToMS(amount: number, type: string): void;
  convertirToKilograms(amount: number, type: string): void; 
  convertirToMeters(amount: number, type: string): void;
  convertirStoMinutes(amount: number, type: string): void; 
  convertirToKelvin(amount: number, type: string): void;
  convertirToNewton(amount: number, type: string): void;
  convertirToM3(amount: number, type: string): void;

  addMagnitude(newItem: T): void;
  getNumberOfMagnitude(): number;
}

/**
 * @class MagnitudeConvert<T> clase abstracta genérica que hace la conversión de tipos usando los métodos
 * de la interfaz genérica que antes se definió y así poner en práctica el método SOLID, Single Responsability and Open-closed
 */
export abstract class MagnitudeConvert<T> implements isConvertible<T> {
  constructor(private value: T[]) {
  }

  addMagnitude(newMagnitude: T) {
    this.value.push(newMagnitude);
  }

  getNumberOfMagnitude() {
    return this.value.length;
  }
  
  /**
   * ### Method public convertirStoMinutes
   * @param amount Cantidad de la unidad
   * @param type tipo de unidad que pasaremos a la unidad del sistema internacional
   * @returns unidad del sistema internacional de la velocidad
   */
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

  /**
   * ### Method public convertirToKilograms
   * @param amount Cantidad de la unidad
   * @param type tipo de unidad que pasaremos a la unidad del sistema internacional
   * @returns unidad del sistema internacional de la masa
   */
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

  /**
   * ### Method public convertirToMeters
   * @param amount Cantidad de la unidad
   * @param type tipo de unidad que pasaremos a la unidad del sistema internacional
   * @returns unidad del sistema internacional de la longitud
   */
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

  /**
   * ### Method public convertirToMS
   * @param amount Cantidad de la unidad
   * @param type tipo de unidad que pasaremos a la unidad del sistema internacional
   * @returns unidad del sistema internacional del tiempo
   */
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

  /**
   * ### Method public convertirToKelvin
   * @param amount Cantidad de la unidad
   * @param type tipo de unidad que pasaremos a la unidad del sistema internacional
   * @returns unidad del sistema internacional de la temperatura
   */
  public convertirToKelvin(amount: number, type: string){
    if(type == 'celsius'){
      if(amount == 1){
        let result = TemUnits.c;
        return console.log(`${amount} grado celsius es ${result} kelvin`);
      } else{
        let result = amount + TemUnits.basic;
        return console.log(`${amount} grados celsius son ${result} kelvin`);
      }
      /**
      *  Grado Fahrenheit, Fórmula (nºF -32) * 5/9 + 273.15 = xº K
      * EJEMPLO: 1 = 255.928K, 2 = 256.483
      */ 
    } else if(type == 'fahrenheit'){
      if(amount == 1){
        let result = TemUnits.fahrenheit;
        return console.log(`${amount} grado fahrenheit es ${result} kelvin`);
      } else {
        let result = (amount-32) * 5/9 + TemUnits.basic;
        return console.log(`${amount} grados fahrenheit son ${result} kelvin`);
      }
    } else {
      return console.log(`Correct convertion`);
    } 
  }

  /**
   * ### Method public convertirToNewton
   * @param amount Cantidad de la unidad
   * @param type tipo de unidad que pasaremos a la unidad del sistema internacional
   * @returns unidad del sistema internacional de la fuerza
   */
  public convertirToNewton(amount: number, type: string){
    if(type == 'kilonewton'){
      let result = amount * FUnits.kn;
      return console.log(`${amount} Kilonewton/s son ${result} newton`);
    } else if(type == 'gram-force' || type == 'gramforce'){
      let result = amount * FUnits.gf;
      return console.log(`${amount} gramo-fuerza/s son ${result} newton`);
    } else if(type == 'kilogramforce'){
      let result = amount * FUnits.kf;
      return console.log(`${amount} kilogramo-fuerza/s son ${result} newton`)
    } else {
      return console.log(`Correct convertion`);
    } 
  }

  /**
   * ### Method public convertirToM3
   * @param amount Cantidad de la unidad
   * @param type tipo de unidad que pasaremos a la unidad del sistema internacional
   * @returns unidad del sistema internacional del volumen
   */
  public convertirToM3(amount: number, type: string){
    if(type == 'liter'){
      let result = amount * VUnits.l;
      return console.log(`${amount} litro/s son ${result} m^3`);
    } else if(type == 'cubic centimeter' || type == 'cm3'){
      let result = amount * VUnits.cm3;
      return console.log(`${amount} centímetro/s cúbico/s son ${result} m^3`);
    } else if(type == 'cubic milimeter'){
      let result = amount * VUnits.mm3;
      return console.log(`${amount} milimetro/s cubico/s son ${result} m^3`)
    } else {
      return console.log(`Correct convertion`);
    } 
  }

  /**
   * ### Method abstract print que necesitaremos que las clases hijas que hereden de esta clase
   * abstracta usen para sacar por pantalla la muestra correcta de la conversión
   */
  abstract print(): void;

}

/**
 * @class MagnitudeSpeed hija que extiende de la clase abstracta genérica que hace la conversión de tipos usando SUnits,
 * y así poner en práctica el método SOLID, Single Responsability and Open-closed
 */
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
  
  /**
   * ### Method print que imprime la conversión que la clase abstracta hace
   */
  print() {
    console.log(`${this.getAmount()} ${this.getUnit()}, is ${this.convertirToMS(this.getAmount(), this.getUnit())} m/s`);
  }
}


/**
 * @class MagnitudeMass hija que extiende de la clase abstracta genérica que hace la conversión de tipos usando MUnits,
 * y así poner en práctica el método SOLID, Single Responsability and Open-closed
 */
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
  
  /**
   * ### Method print que imprime la conversión que la clase abstracta hace
   */
  print() {
    console.log(`${this.getAmount()} ${this.getUnit()}, is ${this.convertirToKilograms(this.getAmount(), this.getUnit())} kilograms`);
  }
}


/**
 * @class MagnitudeLength hija que extiende de la clase abstracta genérica que hace la conversión de tipos usando LUnits,
 * y así poner en práctica el método SOLID, Single Responsability and Open-closed
 */
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
  
  /**
   * ### Method print que imprime la conversión que la clase abstracta hace
   */
  print() {
    console.log(`${this.getAmount()} ${this.getUnit()}, is ${this.convertirToMeters(this.getAmount(), this.getUnit())} meters`);
  }
}


/**
 * @class MagnitudeTime hija que extiende de la clase abstracta genérica que hace la conversión de tipos usando TUnits,
 * y así poner en práctica el método SOLID, Single Responsability and Open-closed
 */
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
  
  /**
   * ### Method print que imprime la conversión que la clase abstracta hace
   */
  print() {
    console.log(`${this.getAmount()} ${this.getUnit()}, is ${this.convertirStoMinutes(this.getAmount(), this.getUnit())} seconds`);
  }
}


/**
 * @class MagnitudeTemperature hija que extiende de la clase abstracta genérica que hace la conversión de tipos usando TemUnits,
 * y así poner en práctica el método SOLID, Single Responsability and Open-closed
 */
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
  
  /**
   * ### Method print que imprime la conversión que la clase abstracta hace
   */
  print() {
    console.log(`${this.getAmount()} ${this.getUnit()}, is ${this.convertirToKelvin(this.getAmount(), this.getUnit())} kelvin`);
  }
}


/**
 * @class MagnitudeForce hija que extiende de la clase abstracta genérica que hace la conversión de tipos usando FUnits,
 * y así poner en práctica el método SOLID, Single Responsability and Open-closed
 */
export class MagnitudeForce extends MagnitudeConvert<FUnits>{
  constructor(protected valueForce: FUnits[], private amount: number, private unit: string) { 
    super(valueForce)
  }
  getMagnitude() {
    return this.valueForce;
  }
  getAmount(){
    return this.amount;
  }
  getUnit(){
    return this.unit;
  }
  addMagnitude(newMagnitude: FUnits) {
    this.valueForce.push(newMagnitude);
  }
  addAmount(nAmount: FUnits){
    for(var i = 0; i < this.valueForce.length; i++){
      this.valueForce[0] = nAmount;
    }
  }
  addUnit(nUnit: FUnits){
    for(var i = 0; i < this.valueForce.length; i++){
      this.valueForce[1] = nUnit;
    }
  }
  
  /**
   * ### Method print que imprime la conversión que la clase abstracta hace
   */
  print() {
    console.log(`${this.getAmount()} ${this.getUnit()}, is ${this.convertirToNewton(this.getAmount(), this.getUnit())} Newton`);
  }
}


/**
 * @class MagnitudeVolume hija que extiende de la clase abstracta genérica que hace la conversión de tipos usando VUnits,
 * y así poner en práctica el método SOLID, Single Responsability and Open-closed
 */
export class MagnitudeVolume extends MagnitudeConvert<VUnits>{
  constructor(protected valueVolume: VUnits[], private amount: number, private unit: string) { 
    super(valueVolume)
  }
  getMagnitude() {
    return this.valueVolume;
  }
  getAmount(){
    return this.amount;
  }
  getUnit(){
    return this.unit;
  }
  addMagnitude(newMagnitude: VUnits) {
    this.valueVolume.push(newMagnitude);
  }
  addAmount(nAmount: VUnits){
    for(var i = 0; i < this.valueVolume.length; i++){
      this.valueVolume[0] = nAmount;
    }
  }
  addUnit(nUnit: VUnits){
    for(var i = 0; i < this.valueVolume.length; i++){
      this.valueVolume[1] = nUnit;
    }
  }
  
  /**
   * ### Method print que imprime la conversión que la clase abstracta hace
   */
  print() {
    console.log(`${this.getAmount()} ${this.getUnit()}, is ${this.convertirToM3(this.getAmount(), this.getUnit())} m^3`);
  }
}


/**
 * @class MagnitudeCollection genérica que contiene ls interfaz genérica y almacena todo tipo de magnitudes,
 * y así poner en práctica el método SOLID, Single Responsability and Open-closed
 */
export class MagnitudeCollection<T> implements isConvertible<T>{
  constructor(private items: MagnitudeTime[]) {
  }
  convertirToM3(_amount: number, _type: string): void {
    throw new Error("Method not implemented.");
  }
  convertirToNewton(_amount: number, _type: string): void {
    throw new Error("Method not implemented.");
  }
  convertirToKelvin(_amount: number, _type: string): void {
    throw new Error("Method not implemented.");
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
