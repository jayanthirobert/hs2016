var RomanToNumbers = function() {

};

var romanNumeral = {
    'I' : 1,
    'IV' : 4,
    'V' : 5,
    'IX' : 9,
    'X' : 10,
    'XL' : 40,
    'L' : 50,
    'XC' : 90,
    'C' : 100,
    'CD' : 400,
    'D' : 500,
    'CM' : 900,
    'M' : 1000
};

function calcNumber(input) {
    var result = 0,
        c = 0,
        cm = 0,
        i = (input.length - 1);

    for (i; i >= 0; i--) {
        c = parseInt(romanNumeral[input.charAt(i)], 10);
        cm = parseInt(romanNumeral[input.charAt(i - 1)], 10);

        if (isNaN(cm) || cm >= c) {
            result += c;
        } else {
            result += c - cm;
            i--;
        }
    }
    return result;
}


RomanToNumbers.prototype.convertRoman = function(roman) {
    var emptyErrorMsg = 'Please enter an input';

    if (roman.length === 0) {
        return emptyErrorMsg;
    } else {
        return calcNumber(roman);
    }
};

module.exports = new RomanToNumbers();
