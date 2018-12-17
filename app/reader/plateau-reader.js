const plateau = require('../model/plateau.js');

module.exports.read = (readData) => {
    return new Promise((resolve, reject) => {
        readData.read('Plateau: ', (inputData) => {
            if (!validatePlateauSizeFormat(inputData)) {
                reject('Invalid Plateau Size');
                return;
            }

            let splitedValue = inputData.split(' ');
            let newPlateau = plateau.build(splitedValue[0], splitedValue[1]);
            resolve(newPlateau);
        });
    });
}

let validatePlateauSizeFormat = (data) => {
    if (!data) {
        return false;
    }

    var pattern = /^\d+ \d+$/i;
    return pattern.test(data.trim());
}