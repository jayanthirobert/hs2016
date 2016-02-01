var expect = require('chai').expect;
var RomanToNumbers = require ('../../assets/scripts/romanToNumber');

describe('RomanToNumbers Converter', function () {
    it('should validate for empty input ', function () {
        expect(RomanToNumbers.convertRoman('')).equal('Please enter an input');
    });

    it('should convert I to 1 ', function () {
        expect(RomanToNumbers.convertRoman('I')).equal(1);
    });

    it('should convert II to 2 ', function () {
        expect(RomanToNumbers.convertRoman('II')).equal(2);
    });

    it('should convert III to 3 ', function () {
        expect(RomanToNumbers.convertRoman('III')).equal(3);
    });

    it('should convert IV to 4 ', function () {
        expect(RomanToNumbers.convertRoman('IV')).equal(4);
    });

    it('should convert V to 5 ', function () {
        expect(RomanToNumbers.convertRoman('V')).equal(5);
    });

    it('should convert VI to 6 ', function () {
        expect(RomanToNumbers.convertRoman('VI')).equal(6);
    });

    it('should convert VII to 7 ', function () {
        expect(RomanToNumbers.convertRoman('VII')).equal(7);
    });

    it('should convert IX to 9 ', function () {
        expect(RomanToNumbers.convertRoman('IX')).equal(9);
    });

    it('should convert X to 10 ', function () {
        expect(RomanToNumbers.convertRoman('X')).equal(10);
    });

    it('should convert XII to 12 ', function () {
        expect(RomanToNumbers.convertRoman('XII')).equal(12);
    });

    it('should convert XXV to 25 ', function () {
        expect(RomanToNumbers.convertRoman('XXV')).equal(25);
    });

    it('should convert MMXIV to 2014 ', function () {
        expect(RomanToNumbers.convertRoman('MMXIV')).equal(2014);
    });

    it('should convert MMMCMXCIX to 3999 ', function () {
        expect(RomanToNumbers.convertRoman('MMMCMXCIX')).equal(3999);
    });
});
