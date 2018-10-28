export const MODE = {
    PlayerVsComputer: 1,
    ComputerVsComputer: 2,
}

export class GameController {
    constructor(game, mode) {
        this.game = game;
        this.mode = mode;
    }

    init() {
        if (this.mode === MODE.PlayerVsComputer) {
            this.initPlayerVsComputer();
        } else if (this.mode === 2) {
            this.initComputerVsComputer();
        }
    }

    initPlayerVsComputer() {
        const ctrl = this;
        const playerOneSection = document.querySelector('#playerOne .container-body__shapes');
        const playerTwoSection = document.querySelector('#playerTwo .container__body');

        this.game.hands.forEach(hand => {
            const iEl = this.createElementForHand(hand);
            playerOneSection.appendChild(iEl);

            iEl.addEventListener('click', function () {
                const playerOneHand = ctrl.game.getHandByShape(this.dataset.hand);
                const playerTwoHand = ctrl.game.playComputer();
                const playerTwoHandIcon = ctrl.createElementForHand(playerTwoHand);
                const res = ctrl.game.compare(playerOneHand, playerTwoHand);

                // update player 2 hand icon
                playerTwoSection.innerHTML = '';
                playerTwoSection.appendChild(playerTwoHandIcon);

                ctrl.handleResolution(res, this, playerTwoHandIcon);
            });
        });
    }

    initComputerVsComputer() {

    }

    createElementForHand(hand) {
        let i = document.createElement('i');
        i.className = `${hand.avatarClass} btn`;
        i.dataset.hand = hand.shape;
        return i;
    }

    handleResolution(resolution, p1, p2) {
        let resolutionMsg = '';

        switch (resolution) {
            case 1:
                resolutionMsg = 'Player 1 wins';
                break;
            case 0:
                resolutionMsg = 'It is a tie!'
                break;
            case -1:
                resolutionMsg = 'Player 2 wins';
                break;
        }

        document.getElementById('resolution').innerText = resolutionMsg;
    }
}
