const Hand = require('../../src/models/hand');

describe('A Hand model', function () {
    let hand;

    beforeAll(function () {
        hand = new Hand('foo', 'bar');
    });

    it('has a shape', function () {
        expect(hand.shape).toBe('foo');
    });

    it('has a avatarClass', function () {
        expect(hand.avatarClass).toBe('bar');
    });
});
