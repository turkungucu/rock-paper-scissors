/**
 * Represents a hand which is composed of shape and css class for visual 
 * representation.
 */
class Hand {
    constructor(shape, avatarClass) {
        this.shape = shape;
        this.avatarClass = avatarClass;
    }
}

module.exports = Hand;
