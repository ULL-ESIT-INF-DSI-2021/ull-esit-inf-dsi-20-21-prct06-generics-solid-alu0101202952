import 'mocha';
import {expect} from 'chai';

import {MagnitudeTime} from '../src/ejercicio-2/isConvertible';
//import {MagnitudeCollection} from '../src/ejercicio-2/isConvertible';


//const myConvertion = new MagnitudeCollection([
//    new MagnitudeTime([], 2,'minutos')
//]);

const myTimeConvertion = new MagnitudeTime([],2,'minutes');

describe('Magnitude Collection', () => {
    it('MagnitudeTime.getAmount() returns magnitude of time', () => {
      return expect(myTimeConvertion.getAmount()).to.be.equal(2);
    })

    it('MagnitudeTime.getUnit returns magnitude of time', () => {
        return expect(myTimeConvertion.getUnit()).to.be.equal('minutes');
      })

    it('MagnitudeTime.print() returns magnitude of time', () => {
        return expect(myTimeConvertion.print()).to.be.equal(undefined);
    })
    
    it('MagnitudeTime.print() returns magnitude of time', () => {
        return expect(myTimeConvertion.convertirStoMinutes(2)).to.be.equal(undefined);
    })

});
