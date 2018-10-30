/**
 * Class representing a game
 */
class Game {
    /**
     * Create a game
     * @param {Hand[]]} hands - List of hands allowed in this game 
     * @param {Object} rules - { handA: [handB] } translates to handA beats handB 
     */
    constructor(hands, rules) {
        this.hands = hands;
        this.rules = rules;
    }

    /**
     * Returns corresponding Hand object given a hand shape
     * @param {string} shape - Shape of the hand
     * @returns {Hand}
     */
    getHandByShape(shape) {
        return this.hands.find((hand) => hand.shape === shape);
    }

    /**
     * Naive function that plays on behalf of computer by choosing a random hand
     * @returns {Hand}
     */
    playComputer() {
        return this.hands[Math.floor(Math.random() * Math.floor(this.hands.length))];
    }

    /**
     * Returns the result of a game
     * @param {Hand} hand1 
     * @param {Hand} hand2 
     * @return {number} 1, 0, or -1
     */
    compare(hand1, hand2) {
        if (hand1.shape === hand2.shape) {
            return 0;
        } else if (this.rules[hand1.shape].includes(hand2.shape)) {
            return 1;
        } else {
            return -1;
        }
    }
}

module.exports = Game;
