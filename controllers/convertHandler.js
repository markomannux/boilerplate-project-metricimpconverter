/*
*
*
*       Complete the handler logic below
*       
*       
*/

const acceptedUnits = [
  'gal',
  'L',
  'lbs',
  'kg',
  'mi',
  'km'
]

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    let match = /[a-zA-Z]/.exec(input);
    
    if (match) {
      result = input.substring(0, match.index);
    } else {
      throw new Error('invalid input');
    }

    let operands = result.split('/');

    if (operands.length > 2) {
      throw new Error('invalid number');
    }

    const numerator = parseFloat(operands[0]) || 1;
    const denominator = parseFloat(operands[1]) || 1;

    result = numerator / denominator
    
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
