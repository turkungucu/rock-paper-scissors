const Game = require('./game');
const Hand = require('../hand');

/**
 * Derived class representing a game of Rock, Paper, Scissors
 * @extends Game
 */
class Classic extends Game {
    /**
     * Create Rock, Paper, Scissors game
     */
    constructor() {
        const rock = new Hand('rock', 'far fa-hand-rock');
        const paper = new Hand('paper', 'far fa-hand-paper');
        const scissors = new Hand('scissors', 'far fa-hand-scissors');
        const rules = { 'rock': ['scissors'], 'paper': ['rock'], 'scissors': ['paper'] };
        super([rock, paper, scissors], rules);
    }
}

module.exports = Classic;
