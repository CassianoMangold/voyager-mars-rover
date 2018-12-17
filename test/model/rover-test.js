const expect = require('chai').expect;
const rover = require('../../app/model/rover.js');

describe('Rover Builder Test', () => {
    it('New Rover', function (done) {
        let expectedRover = {
            name: 'Rover1',
            x: 1,
            y: 2,
            heading: 'N'
        };

        let newRover = rover.build('Rover1', 1, 2, 'N');

        expect(newRover).to.deep.equal(expectedRover);

        done();
    });
});