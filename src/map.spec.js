const { map, identity, cube, addOne } = require('./map');

describe('map', () => {

    it('map to itself', () => {
        expect(map([1, 2], identity)).toEqual([1, 2]);
    });

    it('map to itself', () => {
        expect(map([], identity)).toEqual([]);
    });

    it('map to its cube', () => {
        expect(map([1, 2, 3], cube)).toEqual([1, 8, 27]);
    });

    it('map to its cube', () => {
        expect(map([], cube)).toEqual([]);
    });

    it('map to itself plus one', () => {
        expect(map([ {x: 1} ], addOne)).toEqual([2]);
    });
})