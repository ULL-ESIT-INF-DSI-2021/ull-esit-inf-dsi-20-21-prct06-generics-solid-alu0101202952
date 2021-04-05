import 'mocha';
import {expect} from 'chai';

import {MagnitudeTime} from '../src/ejercicio-pe102';

const myTimeConvertion = new MagnitudeTime([],2,'minutes');

describe('Magnitude Collection', () => {
    it('MagnitudeTime.getAmount() returns magnitude of time', () => {
      return expect(myTimeConvertion.getAmount()).to.be.equal(2);
    })
    
});