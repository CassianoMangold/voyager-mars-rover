module.exports.build = (currentName, positionX, positionY, currentHeading) => {
    return {
        name: currentName,
        x: positionX,
        y: positionY,
        heading: currentHeading
    };
}