const expect = require('chai').expect;
const plateau = require('../../app/model/plateau.js');

describe('Plateau Builder Test', () => {
    it('New Plateau', function (done) {
        let expectedPlateau = {
            x: 1,
            y: 2
        };

        let newPlateau = plateau.build(1, 2);

        expect(newPlateau).to.deep.equal(expectedPlateau);

        done();
    });
});