const maximum = require('./maximum');

describe('maximum', () => {

    it('maximum of 1, 2, 3, 4 is 4', () => {
        expect(maximum([1, 2, 3, 4])).toEqual(4);
    });

})