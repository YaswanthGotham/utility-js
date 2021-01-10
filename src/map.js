
const identity = (number) => number;
const cube = (number) => Math.pow(number, 3);
const addOne = (obj) => obj.x + 1;

const map = (arr, mapFunc) => {
    return arr.map(mapFunc);
};

module.exports = {
    map,
    identity,
    cube,
    addOne,
};