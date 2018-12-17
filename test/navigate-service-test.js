const expect = require('chai').expect;
const navigateService = require('../app/navigate-service.js');

describe('Navigate Service Test', () => {
    describe('Rover Landing Position Test', () => {

        it('Validate Rover Landed on the Plateau', function (done) {
            let plateau = {
                x: 5,
                y: 5
            };

            let rover = {
                name: 'Rover1',
                x: 1,
                y: 2,
                heading: 'N'
            };

            navigateService.validateLandingPosition(rover, plateau).then(() => {
                done();
            });

            //expect(newPlateau).to.deep.equal(expectedPlateau);
        });

        it('When Rover Landed out the Plateau North', function (done) {
            let plateau = {
                x: 5,
                y: 5
            };

            let rover = {
                name: 'Rover1',
                x: 6,
                y: 2,
                heading: 'N'
            };

            navigateService.validateLandingPosition(rover, plateau).then(() => {
            }).catch((errorMessage) => {
                expect(errorMessage).to.equal('You have landed Rover1 out of the plateau');
                done();
            });
        });

        it('When Rover Landed out the Plateau South', function (done) {
            let plateau = {
                x: 5,
                y: 5
            };

            let rover = {
                name: 'Rover1',
                x: -1,
                y: 2,
                heading: 'N'
            };

            navigateService.validateLandingPosition(rover, plateau).then(() => {
            }).catch((errorMessage) => {
                expect(errorMessage).to.equal('You have landed Rover1 out of the plateau');
                done();
            });
        });

        it('When Rover Landed out the Plateau East', function (done) {
            let plateau = {
                x: 5,
                y: 5
            };

            let rover = {
                name: 'Rover1',
                x: 1,
                y: 6,
                heading: 'N'
            };

            navigateService.validateLandingPosition(rover, plateau).then(() => {
            }).catch((errorMessage) => {
                expect(errorMessage).to.equal('You have landed Rover1 out of the plateau');
                done();
            });
        });

        it('When Rover Landed out the Plateau West', function (done) {
            let plateau = {
                x: 5,
                y: 5
            };

            let rover = {
                name: 'Rover1',
                x: 1,
                y: -1,
                heading: 'N'
            };

            navigateService.validateLandingPosition(rover, plateau).then(() => {
            }).catch((errorMessage) => {
                expect(errorMessage).to.equal('You have landed Rover1 out of the plateau');
                done();
            });
        });
    });

    describe('Rover Instructions Execution Test', () => {
        describe('Move Right', () => {
            it('To East', function (done) {
                let plateau = {
                    x: 5,
                    y: 5
                };
                let rover = {
                    name: 'Rover1',
                    x: 1,
                    y: 2,
                    heading: 'N'
                };
                let roverInstructions = {
                    instructions: 'R'
                };

                navigateService.executeInstructions(rover, roverInstructions, plateau).then(() => {
                    expect(rover.heading).to.equal('E');
                    done();
                });
            });
            it('To South', function (done) {
                let plateau = {
                    x: 5,
                    y: 5
                };
                let rover = {
                    name: 'Rover1',
                    x: 1,
                    y: 2,
                    heading: 'E'
                };
                let roverInstructions = {
                    instructions: 'R'
                };

                navigateService.executeInstructions(rover, roverInstructions, plateau).then(() => {
                    expect(rover.heading).to.equal('S');
                    done();
                });
            });
            it('To West', function (done) {
                let plateau = {
                    x: 5,
                    y: 5
                };
                let rover = {
                    name: 'Rover1',
                    x: 1,
                    y: 2,
                    heading: 'S'
                };
                let roverInstructions = {
                    instructions: 'R'
                };

                navigateService.executeInstructions(rover, roverInstructions, plateau).then(() => {
                    expect(rover.heading).to.equal('W');
                    done();
                });
            });
            it('To North', function (done) {
                let plateau = {
                    x: 5,
                    y: 5
                };
                let rover = {
                    name: 'Rover1',
                    x: 1,
                    y: 2,
                    heading: 'W'
                };
                let roverInstructions = {
                    instructions: 'R'
                };

                navigateService.executeInstructions(rover, roverInstructions, plateau).then(() => {
                    expect(rover.heading).to.equal('N');
                    done();
                });
            });
        });
        describe('Move Left', () => {
            it('To East', function (done) {
                let plateau = {
                    x: 5,
                    y: 5
                };
                let rover = {
                    name: 'Rover1',
                    x: 1,
                    y: 2,
                    heading: 'S'
                };
                let roverInstructions = {
                    instructions: 'L'
                };

                navigateService.executeInstructions(rover, roverInstructions, plateau).then(() => {
                    expect(rover.heading).to.equal('E');
                    done();
                });
            });
            it('To South', function (done) {
                let plateau = {
                    x: 5,
                    y: 5
                };
                let rover = {
                    name: 'Rover1',
                    x: 1,
                    y: 2,
                    heading: 'W'
                };
                let roverInstructions = {
                    instructions: 'L'
                };

                navigateService.executeInstructions(rover, roverInstructions, plateau).then(() => {
                    expect(rover.heading).to.equal('S');
                    done();
                });
            });
            it('To West', function (done) {
                let plateau = {
                    x: 5,
                    y: 5
                };
                let rover = {
                    name: 'Rover1',
                    x: 1,
                    y: 2,
                    heading: 'N'
                };
                let roverInstructions = {
                    instructions: 'L'
                };

                navigateService.executeInstructions(rover, roverInstructions, plateau).then(() => {
                    expect(rover.heading).to.equal('W');
                    done();
                });
            });
            it('To North', function (done) {
                let plateau = {
                    x: 5,
                    y: 5
                };
                let rover = {
                    name: 'Rover1',
                    x: 1,
                    y: 2,
                    heading: 'E'
                };
                let roverInstructions = {
                    instructions: 'L'
                };

                navigateService.executeInstructions(rover, roverInstructions, plateau).then(() => {
                    expect(rover.heading).to.equal('N');
                    done();
                });
            });
        });
        describe('Move Foward', () => {
            it('To East', (done) => {
                let plateau = {
                    x: 5,
                    y: 5
                };
                let rover = {
                    name: 'Rover1',
                    x: 1,
                    y: 2,
                    heading: 'E'
                };
                let roverInstructions = {
                    instructions: 'M'
                };

                navigateService.executeInstructions(rover, roverInstructions, plateau).then(() => {
                    expect(rover.x).to.equal(2);
                    done();
                });
            });
            it('To South', (done) => {
                let plateau = {
                    x: 5,
                    y: 5
                };
                let rover = {
                    name: 'Rover1',
                    x: 1,
                    y: 2,
                    heading: 'S'
                };
                let roverInstructions = {
                    instructions: 'M'
                };

                navigateService.executeInstructions(rover, roverInstructions, plateau).then(() => {
                    expect(rover.y).to.equal(1);
                    done();
                });
            });
            it('To West', (done) => {
                let plateau = {
                    x: 5,
                    y: 5
                };
                let rover = {
                    name: 'Rover1',
                    x: 1,
                    y: 2,
                    heading: 'W'
                };
                let roverInstructions = {
                    instructions: 'M'
                };

                navigateService.executeInstructions(rover, roverInstructions, plateau).then(() => {
                    expect(rover.x).to.equal(0);
                    done();
                });
            });
            it('To North', (done) => {
                let plateau = {
                    x: 5,
                    y: 5
                };
                let rover = {
                    name: 'Rover1',
                    x: 1,
                    y: 2,
                    heading: 'N'
                };
                let roverInstructions = {
                    instructions: 'M'
                };

                navigateService.executeInstructions(rover, roverInstructions, plateau).then(() => {
                    expect(rover.y).to.equal(3);
                    done();
                });
            });


            it('Out of Plateau East', (done) => {
                let plateau = {
                    x: 5,
                    y: 5
                };
                let rover = {
                    name: 'Rover1',
                    x: 5,
                    y: 2,
                    heading: 'E'
                };
                let roverInstructions = {
                    instructions: 'M'
                };

                navigateService.executeInstructions(rover, roverInstructions, plateau).then(() => {
                }).catch((errorMessage)=>{
                    expect(errorMessage).to.equal('You can not drive your Rover1 out of the plateau');
                    done();
                });
            });
            it('Out of Plateau South', (done) => {
                let plateau = {
                    x: 5,
                    y: 5
                };
                let rover = {
                    name: 'Rover1',
                    x: 1,
                    y: 0,
                    heading: 'S'
                };
                let roverInstructions = {
                    instructions: 'M'
                };

                navigateService.executeInstructions(rover, roverInstructions, plateau).then(() => {
                }).catch((errorMessage)=>{
                    expect(errorMessage).to.equal('You can not drive your Rover1 out of the plateau');
                    done();
                });
            });
            it('Out of Plateau West', (done) => {
                let plateau = {
                    x: 5,
                    y: 5
                };
                let rover = {
                    name: 'Rover1',
                    x: 0,
                    y: 2,
                    heading: 'W'
                };
                let roverInstructions = {
                    instructions: 'M'
                };

                navigateService.executeInstructions(rover, roverInstructions, plateau).then(() => {
                }).catch((errorMessage)=>{
                    expect(errorMessage).to.equal('You can not drive your Rover1 out of the plateau');
                    done();
                });
            });
            it('Out of Plateau North', (done) => {
                let plateau = {
                    x: 5,
                    y: 5
                };
                let rover = {
                    name: 'Rover1',
                    x: 1,
                    y: 5,
                    heading: 'N'
                };
                let roverInstructions = {
                    instructions: 'M'
                };

                navigateService.executeInstructions(rover, roverInstructions, plateau).then(() => {
                }).catch((errorMessage)=>{
                    expect(errorMessage).to.equal('You can not drive your Rover1 out of the plateau');
                    done();
                });
            });
        });
        
    });
});