const head = require('./head');

describe('head', () => {

    it('head of [1, 2, 3] is 1', () => {
        expect(head([1, 2, 3])).toEqual(1);
    });

    it('head of [] is null or undefined', () => {
        expect(head([])).toEqual(undefined);
    });

})
