const { filter, alwaysTrue, alwaysFalse, greaterThanOne, isUpperCase} = require('./filter');

describe('filter', () => {

    it('always true filter', () => {
        expect(filter([], alwaysTrue)).toEqual([]);
    });

    it('always true filter', () => {
        expect(filter([1, 2, 3], alwaysTrue)).toEqual([1, 2, 3]);
    });

    it('always false filter', () => {
        expect(filter([1, 2, 3], alwaysFalse)).toEqual([]);
    });

    it('always false filter', () => {
        expect(filter([1, 2, 3], alwaysFalse)).toEqual([]);
    });

    it('filter for x > 1 ', () => {
        expect(filter([1, 2, 3], greaterThanOne)).toEqual([2, 3]);
    });

    it('filter for uppercase', () => {
        expect(filter(['A', 'a', 'B'], isUpperCase)).toEqual(['A', 'B']);
    });

})
