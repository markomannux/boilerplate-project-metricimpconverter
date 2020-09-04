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
    var result;
    let match = /[a-zA-Z]/.exec(input);
    if (match) {
      result = input.substring(0, match.index);
    }

    if (!result) {
      return 1;
    }

    if (result.indexOf('/') != -1) {
      let operands = result.split('/');

      if (operands.length != 2) {
        console.log('throwing error');
        throw new Error('invalid number');
      }
      result = parseFloat(operands[0]) / parseFloat(operands[1]);
    }
    else if (result.indexOf('.') != -1) {
      result = parseFloat(input);
    } else {
      result = parseFloat(input);
    }
    
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
