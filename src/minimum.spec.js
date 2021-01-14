const minimum = require('./minimum');

describe('minimum', () => {

    it('minimum of 1, 2, 3, 4 is 1', () => {
        expect(minimum([1, 2, 3, 4])).toEqual(1);
    });

})