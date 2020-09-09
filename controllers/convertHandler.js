/*
*
*
*       Complete the handler logic below
*       
*       
*/

const { json } = require("body-parser")

const fromUnit = ['gal','l','mi','km','lbs','kg'];
const toUnit = ['l','gal','km','mi','kg','lbs'];
const extendedUnit = ['gallons', 'liters', 'miles', 'kilometers', 'pounds', 'kilograms'];
const galToL = 3.78541;
const lbsToKg = 0.453592;
const miToKm = 1.60934;

const conversions = [galToL,1/galToL,miToKm,1/miToKm,lbsToKg,1/lbsToKg];

function ConvertHandler() {
  
  this.getNum = function(input) {
    const operands = extractOperands(input, findUnitIndex(input));
    return new CoalescingFraction(operands[0], operands[1]).value();
  };

  function findUnitIndex(input) {
    const match = /[a-zA-Z]/.exec(input);
    if (!match) {
      throw new Error('invalid input');
    }

    return match.index;
  }

  function extractOperands(input, matchIndex) {
    const operands = input.substring(0, matchIndex).split('/');
    if (operands.length > 2) {
      try {
        extractUnit(input);
      } catch(err) {
        throw new Error('invalid number and unit');
      }
      throw new Error('invalid number');
    }

    return operands;
  }
  
  this.getUnit = function(input) {
    return extractUnit(input);
  };

  function extractUnit(input) {
    result = input.substring(findUnitIndex(input));
    if (fromUnit.indexOf(result.toLowerCase()) === -1) {
      throw new Error('invalid unit');
    }

    return result;
  }
  
  this.getReturnUnit = function(initUnit) {
    return toUnit[fromUnit.indexOf(initUnit.toLowerCase())];
  };

  this.spellOutUnit = function(unit) {
    return extendedUnit[fromUnit.indexOf(unit.toLowerCase())];
  };
  
  this.convert = function(initNum, initUnit) {
    let result = initNum * conversions[fromUnit.indexOf(initUnit.toLowerCase())]
    return roundOff(result, 5);
  };

  function roundOff(num, places) {
    const x = Math.pow(10, places);
    return Math.round(num * x) / x;
  }
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    
    return result;
  };
  
}

function CoalescingFraction(numerator, denominator) {

  function parseAndCoalesceTo(value, coalesceTo) {
    return parseFloat(value) || coalesceTo
  }

  this.value = function() {
    return parseAndCoalesceTo(numerator, 1) / parseAndCoalesceTo(denominator, 1);
  }
}

module.exports = ConvertHandler;
