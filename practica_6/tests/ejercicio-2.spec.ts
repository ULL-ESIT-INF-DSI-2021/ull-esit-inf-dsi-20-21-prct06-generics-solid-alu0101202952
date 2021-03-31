import 'mocha';
import {expect} from 'chai';

import {MagnitudeTime} from '../src/ejercicio-2/isConvertible';
import {MagnitudeSpeed} from '../src/ejercicio-2/isConvertible';
import {MagnitudeMass} from '../src/ejercicio-2/isConvertible';
//import {MagnitudeCollection} from '../src/ejercicio-2/isConvertible';


//const myConvertion = new MagnitudeCollection([
//    new MagnitudeTime([], 2,'minutos')
//]);

const myTimeConvertion = new MagnitudeTime([],2,'minutes');
const myTimeConvertion2 = new MagnitudeTime([],3,'hours');
const mySpeedConvertion = new MagnitudeSpeed([],4,'miles');
const myMassConvertion = new MagnitudeMass([],5,'grams');

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

    it('MagnitudeSpeed.getAmount() returns magnitude of speed', () => {
      return expect(mySpeedConvertion.getUnit()).to.be.equal('miles');
    })

    it('MagnitudeSpeed.print() returns magnitude of speed', () => {
      return expect(mySpeedConvertion.print()).to.be.equal(undefined);
    })

    it('MagnitudeSpeed.convertirToMS(2) returns speed in m/s', () => {
     return expect(mySpeedConvertion.convertirToMS(4,'miles')).to.be.equal(undefined);
    })


    it('MagnitudeMass.getAmount() returns magnitude of mass', () => {
      return expect(myMassConvertion.getAmount()).to.be.equal(5);
    })

    it('MagnitudeMass.getAmount() returns magnitude of mass', () => {
      return expect(myMassConvertion.getUnit()).to.be.equal('grams');
    })

    it('MagnitudeMass.print() returns magnitude of mass', () => {
      return expect(myMassConvertion.print()).to.be.equal(undefined);
    })
});
