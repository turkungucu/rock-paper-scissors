const Game = require('../../../src/models/game/game');
const Hand = require('../../../src/models/hand');

describe('A Game model', function () {
    let game;
    const rock = new Hand('rock', 'rock');
    const paper = new Hand('paper', 'paper');
    const scissors = new Hand('scissors', 'scissors');
    const hands = [rock, paper, scissors];
    const rules = { rock: ['scissors'], paper: ['rock'], scissors: ['paper'] };

    beforeAll(function () {
        game = new Game(hands, rules);
    });

    describe('getHandByShape()', function () {
        it('finds Hand object given its string name', function () {
            expect(game.getHandByShape('rock')).toBe(rock);
        });
    });

    describe('playComputer()', function () {
        it('returns a hand on behalf of computer', function () {
            expect(hands).toContain(game.playComputer());
        });
    });

    describe('compare()', function () {
        it('returns 1 when first hand beats second hand', function () {
            expect(game.compare(rock, scissors)).toBe(1);
        });

        it('returns 0 when it is a tie', function () {
            expect(game.compare(rock, rock)).toBe(0);
        });

        it('returns -1 when first hand loses', function () {
            expect(game.compare(rock, paper)).toBe(-1);
        });
    });
});
