const Game = require('./game');
const Hand = require('../hand');

/**
 *  Derived game class that defines the hands and rules of a 
 *  Rock, Paper, Scissors game
 */
class Classic extends Game {
    constructor() {
        const rock = new Hand('rock', 'far fa-hand-rock');
        const paper = new Hand('paper', 'far fa-hand-paper');
        const scissors = new Hand('scissors', 'far fa-hand-scissors');
        const rules = { 'rock': ['scissors'], 'paper': ['rock'], 'scissors': ['paper'] };
        super([rock, paper, scissors], rules);
    }
}

module.exports = Classic;
