import 'mocha';
import {expect} from 'chai';

import {MagnitudeTime} from '../src/ejercicio-2/isConvertible';
import {MagnitudeCollection} from '../src/ejercicio-2/isConvertible';


const myConvertion = new MagnitudeCollection([
    new MagnitudeTime([], 2,'minutos')
]);

describe('Magnitude Collection', () => {
    it('Magnitude getMagnitude returns magnitude', () => {
      return expect(myConvertion.getMagnitudeTime(1)).to.be.equal(2);
    })

});
