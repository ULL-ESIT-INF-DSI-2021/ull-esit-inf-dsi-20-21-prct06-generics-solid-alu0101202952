import 'mocha';
import {expect} from 'chai';

import {RandomNumber} from '../src/ejercicio-pe102';

const numberRandonCreate = new RandomNumber([],2);

describe('RandomNumber', () => {
    it('numberRandonCreate.getNumber() returns number construct getter', () => {
      return expect(numberRandonCreate.getNumber()).to.be.equal(2);
    })
    
});