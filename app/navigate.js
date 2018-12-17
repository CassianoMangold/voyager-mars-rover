const readData = require('./reader/data-reader.js');
const readPlateau = require('./reader/plateau-reader.js');
const readRover = require('./reader/rover-reader.js');
const navigationService = require('./navigate-service.js');

let plateau;
let rover1
let rover1Instructions;
let rover2;
let rover2Instructions;

readData.init();

let readPlateauSize = () => {
    readPlateau.read(readData).then((newPlateau) => {
        plateau = newPlateau;
        readRover1Data();
    }).catch(error);
};

let readRover1Data = () => {
    readRover.readLanding(readData, 'Rover1').then((newRover1) => {
        rover1 = newRover1;
        readRover.readInstructions(readData, 'Rover1').then((newRover1Instructions) => {
            rover1Instructions = newRover1Instructions;
            readRover2Data();
        }).catch(error);
    }).catch(error);
};

let readRover2Data = () => {
    readRover.readLanding(readData, 'Rover2').then((newRover2) => {
        rover2 = newRover2;
        readRover.readInstructions(readData, 'Rover2').then((newRover2Instructions) => {
            rover2Instructions = newRover2Instructions;
            executeRover1Instructions();
        }).catch(error);
    }).catch(error);
};

let executeRover1Instructions = () => {
    navigationService.validateLandingPosition(rover1, plateau).then(() => {
        navigationService.executeInstructions(rover1, rover1Instructions, plateau).then(() => {
            executeRover2Instructions();
        }).catch(error);;
    }).catch(error);
}

let executeRover2Instructions = () => {
    navigationService.validateLandingPosition(rover2, plateau).then(() => {
        navigationService.executeInstructions(rover2, rover2Instructions, plateau).then(() => {
            printResultData();
        });
    }).catch(error);
}
let printResultData = () => {
    console.log(`Rover 1: ${rover1.x} ${rover1.y} ${rover1.heading}`);
    console.log(`Rover 2: ${rover2.x} ${rover2.y} ${rover2.heading}`);

    readData.close();
};

let error = (errorMessage) => {
    console.log(`[ERROR] ${errorMessage}`);
    readData.close();
}

readPlateauSize();