import 'mocha';
import {expect} from 'chai';

import {RandomNumber} from '../src/ejercicio-pe102';

//const numberRandonCreate = new RandomNumber([],2);
const randomNumber = RandomNumber.getRandomNumber();
const rNumber1 = new RandomNumber();


describe('RandomNumber', () => {
  it('numberRandonCreate.setNumber() returns number construct getter', () => {
    return expect(rNumber1.setNumber(0)).to.be.equal(undefined);
  })
  it('numberRandonCreate.getNumber() returns number construct getter', () => {
    return expect(rNumber1.getNumber()).to.be.equal(0);
  })

  it('numberRandonCreate.getItems() returns item getter', () => {
    return expect(rNumber1.getItems()).to.be.equal([]);
  })
  it('numberRandonCreate.setItems() returns item getter', () => {
    return expect(rNumber1.setItems([])).to.be.equal(undefined);
  })

  it('numberRandonCreate.getRandomNumber() returns random number like singleton method', () => {
    return expect(randomNumber).to.be.equal({ items: [], inNumber: 0 });
  })

  it('numberRandonCreate.floatRandom1() returns random float number between 0 and 1', () => {
    return expect(rNumber1.floatRandom1(0,1)).to.be.equal(undefined);
  })
    
});