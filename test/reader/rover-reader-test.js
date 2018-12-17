const expect = require('chai').expect;
const roverReader = require('../../app/reader/rover-reader.js');

describe('Rover Reader Test', () => {
    describe('Rover Position Test', () => {
        it('Position "1 2 N"', function (done) {
            let roverPosition = "1 2 N";

            let readData = {
                read: (label, callback) => {
                    callback(roverPosition);
                }
            };

            let expectedRover = {
                name: 'Rover1',
                x: '1',
                y: '2',
                heading: 'N'
            };

            roverReader.readLanding(readData, 'Rover1').then((newRover) => {
                expect(newRover).to.deep.equal(expectedRover);
                done();
            });
        });
        it('Invalid Position "1 2 Z"', function (done) {
            let roverPosition = "1 2 Z";

            let readData = {
                read: (label, callback) => {
                    callback(roverPosition);
                }
            };

            roverReader.readLanding(readData, 'Rover1').then((newRover) => {
            }).catch((errorMessage) => {
                expect(errorMessage).to.equal('Invalid Landing Position for Rover1');
                done();
            });
        });
        it('Invalid Position "1 2"', function (done) {
            let roverPosition = "1 2";

            let readData = {
                read: (label, callback) => {
                    callback(roverPosition);
                }
            };

            roverReader.readLanding(readData, 'Rover1').then((newRover) => {
            }).catch((errorMessage) => {
                expect(errorMessage).to.equal('Invalid Landing Position for Rover1');
                done();
            });
        });
    });
    describe('Rover Instruction Test', () => {
        it('Instruction "LRMLMRLLRRMM"', function (done) {
            let instruction = "LRMLMRLLRRMM";

            let readData = {
                read: (label, callback) => {
                    callback(instruction);
                }
            };

            let expectedInstructions = {
                instructions: 'LRMLMRLLRRMM'
            };

            roverReader.readInstructions(readData, 'Rover1').then((newInstructions) => {
                expect(newInstructions).to.deep.equal(expectedInstructions);
                done();
            });
        });
        it('Invalid Instruction "LMRTT"', function (done) {
            let instruction = "LMRTT";

            let readData = {
                read: (label, callback) => {
                    callback(instruction);
                }
            };

            roverReader.readInstructions(readData, 'Rover1').then((newInstructions) => {
            }).catch((errorMessage) => {
                expect(errorMessage).to.equal('Invalid Instructions for Rover1');
                done();
            });
        });
        it('Invalid Instruction "LMR77"', function (done) {
            let instruction = "LMR77";

            let readData = {
                read: (label, callback) => {
                    callback(instruction);
                }
            };

            roverReader.readInstructions(readData, 'Rover1').then((newInstructions) => {
            }).catch((errorMessage) => {
                expect(errorMessage).to.equal('Invalid Instructions for Rover1');
                done();
            });
        });
    });
});