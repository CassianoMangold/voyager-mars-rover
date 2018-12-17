const expect = require('chai').expect;
const plateauReader = require('../../app/reader/plateau-reader.js');

describe('Plateau Reader Test', () => {
    it('Read New Plateau Data "5 5"', function (done) {
        let plateauSize = "5 5";

        let readData = {
            read: (label, callback) => {
                callback(plateauSize);
            }
        };

        let expectedPlateau = {
            x: '5',
            y: '5'
        };

        plateauReader.read(readData).then((newPlateau) => {
            expect(newPlateau).to.deep.equal(expectedPlateau);
            done();
        });
    });
    it('Read New Plateau Data "5 5 "', function (done) {
        let plateauSize = "5 5 ";

        let readData = {
            read: (label, callback) => {
                callback(plateauSize);
            }
        };

        let expectedPlateau = {
            x: '5',
            y: '5'
        };

        plateauReader.read(readData).then((newPlateau) => {
            expect(newPlateau).to.deep.equal(expectedPlateau);
            done();
        });
    });
    it('Read New Plateau Invalid Data "5 5 N"', function (done) {
        let plateauSize = "5 5 N";

        let readData = {
            read: (label, callback) => {
                callback(plateauSize);
            }
        };

        plateauReader.read(readData).then((newPlateau) => {
            
        }).catch((errorMessage) => {
            expect(errorMessage).to.equal('Invalid Plateau Size');
            done();
        });
    });
});