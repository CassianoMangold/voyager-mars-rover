module.exports = {
    executeInstructions: (rover, roverInstructions, plateau) => {
        return new Promise((resolve, reject) => {
            const instructions = roverInstructions.instructions;
            for (var i = 0; i < instructions.length; i++) {
                switch (instructions.charAt(i).toUpperCase()) {
                    case 'L':
                        moveLeft(rover);
                        break;
                    case 'R':
                        moveRight(rover);
                        break;
                    case 'M':
                        if (!validateMoveFoward(rover, plateau)) {
                            reject(`You can not drive your ${rover.name} out of the plateau`);
                            return;
                        }
                        moveFoward(rover);
                        break;
                }
            }
            resolve();
        });
    },
    validateLandingPosition: (rover, plateau) => {
        return new Promise((resolve, reject) => {
            if(rover.x < 0 || rover.x > plateau.x || rover.y < 0 || rover.y > plateau.y){
                reject(`You have landed ${rover.name} out of the plateau`);
            }
            resolve();
        });
    }
}

let moveLeft = (rover) => {
    switch (rover.heading.toUpperCase()) {
        case 'N':
            rover.heading = 'W';
            break;
        case 'W':
            rover.heading = 'S';
            break;
        case 'S':
            rover.heading = 'E';
            break;
        case 'E':
            rover.heading = 'N';
            break;
    }
};

let moveRight = (rover) => {
    switch (rover.heading.toUpperCase()) {
        case 'N':
            rover.heading = 'E';
            break;
        case 'E':
            rover.heading = 'S';
            break;
        case 'S':
            rover.heading = 'W';
            break;
        case 'W':
            rover.heading = 'N';
            break;
    }
}

let moveFoward = (rover) => {
    switch (rover.heading.toUpperCase()) {
        case 'N':
            rover.y++;
            break;
        case 'E':
            rover.x++;
            break;
        case 'S':
            rover.y--;
            break;
        case 'W':
            rover.x--;
            break;
    }
}

let validateMoveFoward = (rover, plateau) => {
    switch (rover.heading.toUpperCase()) {
        case 'N':
            return rover.y < plateau.y;
        case 'E':
            return rover.x < plateau.x;
        case 'S':
            return rover.y > 0;
        case 'W':
            return rover.x > 0;
        default:
            return false;
    }
}