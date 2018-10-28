const Classic = require('../../../src/models/game/classic');

describe('A Classic model', function () {
    let classic;

    beforeAll(function () {
        classic = new Classic();
    });

    it('defines hands of a classic game of rock, paper and scissors', function () {
        expect(classic.hands.map((h) => h.shape)).toEqual(['rock', 'paper', 'scissors']);
    });

    it('defines rules of a classic game of rock, paper and scissors', function () {
        expect(classic.rules).toEqual(
            {
                rock: ['scissors'],
                paper: ['rock'],
                scissors: ['paper'],
            }
        );
    });
});
