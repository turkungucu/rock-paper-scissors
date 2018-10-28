export const MODE = {
    PlayerVsComputer: 1,
    ComputerVsComputer: 2,
}

export class GameController {
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

    replaceInner(parent, child) {
        parent.innerHTML = '';
        parent.appendChild(child);
    }

    initPlayerVsComputer() {
        const ctrl = this;

        this.playerTwoSection.appendChild(this.createElementForHand());

        this.game.hands.forEach(hand => {
            const iEl = this.createElementForHand(hand);
            this.playerOneSection.appendChild(iEl);
            iEl.classList.add('clickable');

            iEl.addEventListener('click', function () {
                const playerOneHand = ctrl.game.getHandByShape(this.dataset.hand);
                const playerTwoHand = ctrl.game.playComputer();
                const playerTwoHandIcon = ctrl.createElementForHand(playerTwoHand);
                const res = ctrl.game.compare(playerOneHand, playerTwoHand);

                ctrl.replaceInner(ctrl.playerTwoSection, playerTwoHandIcon);
                ctrl.handleResolution(res);
                ctrl.resolutionActions.innerText = 'Choose a hand to keep playing';
            });
        });
    }

    initComputerVsComputer() {
        const ctrl = this;
        const iEl = this.createElementForHand();

        this.playerOneSection.appendChild(iEl);
        this.playerTwoSection.appendChild(iEl.cloneNode());

        let button = document.createElement('button');
        button.innerText = 'Play';
        this.resolutionActions.appendChild(button);

        button.addEventListener('click', function () {
            const playerOneHand = ctrl.game.playComputer();
            const playerTwoHand = ctrl.game.playComputer();
            const playerOneHandIcon = ctrl.createElementForHand(playerOneHand);
            const playerTwoHandIcon = ctrl.createElementForHand(playerTwoHand);
            const res = ctrl.game.compare(playerOneHand, playerTwoHand);

            ctrl.replaceInner(ctrl.playerOneSection, playerOneHandIcon);
            ctrl.replaceInner(ctrl.playerTwoSection, playerTwoHandIcon);
            ctrl.handleResolution(res);
        });
    }

    createElementForHand(hand) {
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

        document.querySelector('.resolution__msg').innerText = resolutionMsg;
    }
}
