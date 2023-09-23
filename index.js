// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (drivers) => {
    const newArray = drivers.slice(0,2);
    console.log(newArray);
    return newArray;
}

const returnLastTwoDrivers = (drivers) => {
    const newArray = drivers.slice(2);
    console.log(newArray);
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];


function createFareMultiplier(int){
    return fareMultiplier;
}

const fareMultiplier = (int) => {return 5*int};

function fareDoubler(fare){
    return Multi2(fare);
}

const  Multi2 = (fare) => {
    return fare*2;
}
    

function fareTripler(fare){
    return Multi3(fare);
}

const  Multi3 = (fare) => {
    return fare*3;
}
    
function selectDifferentDrivers(arg1,arg2){
    return arg2(arg1);
}

selectDifferentDrivers(drivers, returnLastTwoDrivers)