const MODE = {
    PlayerVsComputer: 1,
    ComputerVsComputer: 2,
}

class GameController {
    constructor(game) {
        this.game = game;
        this.mode = MODE.PlayerVsComputer;

        this.playerOneSection = document.querySelector('#playerOne .section-body__shapes');
        this.playerTwoSection = document.querySelector('#playerTwo .section__body');
        this.resolutionActions = document.querySelector('.resolution__actions');
        this.resolutionMsg = document.querySelector('.resolution__msg');
    }

    init(mode) {
        this.mode = parseInt(mode);
        this.resetBoard();

        if (this.mode === MODE.PlayerVsComputer) {
            this.initPlayerVsComputer();
        } else if (this.mode === MODE.ComputerVsComputer) {
            this.initComputerVsComputer();
        } else {
            this.mode = MODE.PlayerVsComputer;
            this.initPlayerVsComputer();
        }
    }

    resetBoard() {
        this.playerOneSection.innerHTML = '';
        this.playerTwoSection.innerHTML = '';
        this.resolutionMsg.innerText = '';
        this.resolutionActions.innerHTML = '';
    }

    initPlayerVsComputer() {
        this.playerTwoSection.appendChild(this.createAvatarElForHand());

        // For each hand, create an avatar and bind click event
        this.game.hands.forEach(hand => {
            const iEl = this.createAvatarElForHand(hand);
            this.playerOneSection.appendChild(iEl);
            iEl.classList.add('clickable');

            iEl.addEventListener('click', this.clickHandlerForPlayerVsComputer.bind(this));
        });
    }

    clickHandlerForPlayerVsComputer(event) {
        const playerOneHand = this.game.getHandByShape(event.target.dataset.hand);
        const playerTwoHand = this.game.playComputer();
        const playerTwoHandIcon = this.createAvatarElForHand(playerTwoHand);
        const res = this.game.compare(playerOneHand, playerTwoHand);

        this.replaceInner(this.playerTwoSection, playerTwoHandIcon);
        this.handleResolution(res);
        this.resolutionActions.innerText = 'Choose a hand to keep playing';
    }

    initComputerVsComputer() {
        const iEl = this.createAvatarElForHand();

        this.playerOneSection.appendChild(iEl);
        this.playerTwoSection.appendChild(iEl.cloneNode());

        let button = document.createElement('button');
        button.innerHTML = '<i class="fas fa-redo-alt"></i>';
        this.resolutionActions.appendChild(button);

        button.addEventListener('click', this.clickHandlerForComputerVsComputer.bind(this));
    }

    clickHandlerForComputerVsComputer() {
        const playerOneHand = this.game.playComputer();
        const playerTwoHand = this.game.playComputer();
        const playerOneHandIcon = this.createAvatarElForHand(playerOneHand);
        const playerTwoHandIcon = this.createAvatarElForHand(playerTwoHand);
        const res = this.game.compare(playerOneHand, playerTwoHand);

        this.replaceInner(this.playerOneSection, playerOneHandIcon);
        this.replaceInner(this.playerTwoSection, playerTwoHandIcon);
        this.handleResolution(res);
    }

    createAvatarElForHand(hand) {
        let i = document.createElement('i');

        if (hand) {
            i.className = `${hand.avatarClass} icon`;
            i.dataset.hand = hand.shape;
        } else {
            i.className = 'fas fa-question icon';
        }

        return i;
    }

    handleResolution(resolution) {
        let resolutionMsg = '';

        switch (resolution) {
            case 1:
                resolutionMsg = this.mode === MODE.PlayerVsComputer ? 'You win!' : 'Player 1 wins!';
                break;
            case 0:
                resolutionMsg = 'It is a tie!'
                break;
            case -1:
                resolutionMsg = 'Player 2 wins!';
                break;
        }

        this.resolutionMsg.innerText = resolutionMsg;
    }

    replaceInner(parent, child) {
        parent.innerHTML = '';
        parent.appendChild(child);
    }
}

module.exports = {
    MODE: MODE,
    GameController: GameController,
}
