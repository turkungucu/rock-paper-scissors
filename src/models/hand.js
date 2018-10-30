/**
 * Class representing a Hand
 */
class Hand {
    /**
     * Create a hand
     * @param {string} shape 
     * @param {string} avatarClass - css class 
     */
    constructor(shape, avatarClass) {
        this.shape = shape;
        this.avatarClass = avatarClass;
    }
}

module.exports = Hand;
