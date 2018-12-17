const expect = require('chai').expect;
const roverInstructions = require('../../app/model/rover-instructions.js');

describe('Rover Instructions Builder Test', () => {
    it('New Rover Instructions', function (done) {
        let expectedInstructions = {
            instructions: 'LMLMLMLMM'
        };

        let newRoverInstructions = roverInstructions.build('LMLMLMLMM');

        expect(newRoverInstructions).to.deep.equal(expectedInstructions);

        done();
    });
});