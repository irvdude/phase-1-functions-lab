// Code your solution in this file!

function distanceFromHqInBlocks(pickUp) {
    return Math.abs(pickUp - 42);
}

function distanceFromHqInFeet(blocks) {
    const feet = 264 * distanceFromHqInBlocks(blocks);
    return feet;
}

function distanceTravelledInFeet(start, destination) {
    const travelledBlocks = Math.abs(start - destination)
    return travelledBlocks * 264
}

function calculatesFarePrice(start, destination) {
    let travelledFeet = distanceTravelledInFeet(start, destination);
    let fare = 0;
    if (travelledFeet <= 400) {
        fare = 0;
    } else if (travelledFeet > 400 && travelledFeet <= 2000){
        fare = (travelledFeet - 400) * .02;
    } else if (travelledFeet > 2000 && travelledFeet <= 2500){
        fare = 25;
    } else if (travelledFeet > 2500){
        fare = 'cannot travel that far';
    }
    return fare
}


