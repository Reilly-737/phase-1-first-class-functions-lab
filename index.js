const returnFirstTwoDrivers = () => {
 const driversArray = ['Antonia', 'Nuru', 'Amari','Mo'];   
 const theFirstTwo = driversArray.slice(0,2);
  return theFirstTwo;
} 

const returnLastTwoDrivers = () => {
    const driversArray = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    const theLastTwo = driversArray.slice(-2);
    return theLastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => {
    return (fare) => {
        return fare * multiplier;
    };
}; 

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (driversArray, selectorFunction) => {
    return selectorFunction(driversArray);
}
