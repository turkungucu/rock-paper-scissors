import { Game } from './game';
import { Hand } from '../hand';

export class Classic extends Game {
    constructor() {
        const rock = new Hand('rock', 'far fa-hand-rock');
        const paper = new Hand('paper', 'far fa-hand-paper');
        const scissors = new Hand('scissors', 'far fa-hand-scissors');
        const rules = { 'rock': ['scissors'], 'paper': ['rock'], 'scissors': ['paper'] };
        super([rock, paper, scissors], rules);
    }
}
