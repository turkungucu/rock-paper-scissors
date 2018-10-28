// Concrete Game object
// Holds available choices and rules
class Game {
    constructor(hands, rules) {
        this.hands = hands;
        this.rules = rules;
    }

    getHandByShape(shape) {
        return this.hands.find((hand) => hand.shape === shape);
    }

    // Naive function that plays on behalf of computer by choosing a random hand
    playComputer() {
        return this.hands[Math.floor(Math.random() * Math.floor(this.hands.length))];
    }

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
