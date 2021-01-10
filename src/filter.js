
const alwaysTrue = (element) => true;
const alwaysFalse = (element) => false;
const greaterThanOne = (element) => element > 1;
const isUpperCase = (element) => element === element.toUpperCase();

const filter = (arr, filterFunc) => {
    return arr.filter(filterFunc);
};

module.exports = {
    filter,
    alwaysTrue,
    alwaysFalse,
    greaterThanOne,
    isUpperCase
};