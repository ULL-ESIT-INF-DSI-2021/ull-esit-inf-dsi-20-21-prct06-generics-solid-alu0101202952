import 'mocha';
import {expect} from 'chai';

import {MagnitudeTime} from '../src/ejercicio-2/isConvertible';
//import {MagnitudeCollection} from '../src/ejercicio-2/isConvertible';


//const myConvertion = new MagnitudeCollection([
//    new MagnitudeTime([], 2,'minutos')
//]);

const myTimeConvertion = new MagnitudeTime([],2,'minutes');
const myTimeConvertion2 = new MagnitudeTime([],3,'hours');
const mySpeedConvertion = new MagnitudeSpeed([],4,'miles');

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
    
    it('MagnitudeTime.convertirStoMinutes(2) returns time in seconds', () => {
        return expect(myTimeConvertion2.convertirStoMinutes(3,'hours')).to.be.equal(undefined);
    })

    it('MagnitudeSpeed.getAmount() returns magnitude of speed', () => {
      return expect(mySpeedConvertion.getAmount()).to.be.equal(4);
    })

});
