let rover = require('../model/rover.js');
let roverInstructions = require('../model/rover-instructions.js');

module.exports = {
    readLanding: (readData, roverName) => {
        return new Promise((resolve, reject) => {
            readData.read(`${roverName} Landing: `, (inputData) => {
                if (!validateLandingPositionFormat(inputData)) {
                    reject(`Invalid Landing Position for ${roverName}`);
                    return;
                }

                let splitedValue = inputData.split(' ');
                let newRover = rover.build(roverName, splitedValue[0], splitedValue[1], splitedValue[2]);
                resolve(newRover);
            });
        });
    },
    readInstructions: (readData, roverName) => {
        return new Promise((resolve, reject) => {
            readData.read(`${roverName} Instructions: `, (inputData) => {
                if (!validateInstructionsFormat(inputData)) {
                    reject(`Invalid Instructions for ${roverName}`);
                    return;
                }
                let newInstruction = roverInstructions.build(inputData.trim());
                resolve(newInstruction);
            });
        });
    }
}

let validateLandingPositionFormat = (data) => {
    if (!data) {
        return false;
    }

    var pattern = /^\d+ \d+ (N|W|S|E)$/i;
    return pattern.test(data.trim());
}

let validateInstructionsFormat = (data) => {
    if (!data) {
        return false;
    }

    var pattern = /^[MRL]+$/i;
    return pattern.test(data.trim());
}