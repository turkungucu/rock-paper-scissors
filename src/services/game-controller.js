/**
 * Modes supported by the game
 */
const MODE = {
    PlayerVsComputer: 1,
    ComputerVsComputer: 2,
}

/**
 * Class representing and controlling the game world
 */
class GameController {
    /**
     * Create a controller
     * @param {Game} game - Any derived class of Game
     * @param {_document} [_document=document] - Used by specs to pass their own mock document 
     */
    constructor(game, _document) {
        this.game = game;
        this.mode = MODE.PlayerVsComputer;
        this._document = _document || document;

        this.playerOneSection = this._document.querySelector('#playerOne .section-body__hands');
        this.playerTwoSection = this._document.querySelector('#playerTwo .section__body');
        this.resolutionActions = this._document.querySelector('.resolution__actions');
        this.resolutionMsg = this._document.querySelector('.resolution__msg');
    }

    /**
     * Initializes game world based on mode. Defaults to `PlayerVsComputer`.
     * @param {string|number} mode 
     */
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

    /**
     * Cleans up the board
     */
    resetBoard() {
        this.playerOneSection.innerHTML = '';
        this.playerTwoSection.innerHTML = '';
        this.resolutionMsg.innerText = '';
        this.resolutionActions.innerHTML = '';
    }

    /**
     * Initializes game world for a `Player vs Computer` game
     */
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

    /**
     * Click event that handles human and computer play
     * @param {event} event 
     */
    clickHandlerForPlayerVsComputer(event) {
        const playerOneHand = this.game.getHandByShape(event.target.dataset.hand);
        const playerTwoHand = this.game.playComputer();
        const playerTwoHandIcon = this.createAvatarElForHand(playerTwoHand);
        const res = this.game.compare(playerOneHand, playerTwoHand);

        this.replaceInner(this.playerTwoSection, playerTwoHandIcon);
        this.handleResolution(res);
        this.resolutionActions.innerText = 'Choose a hand to keep playing';
    }

    /**
     * Initializes game world for a `Computer vs Computer` game
     */
    initComputerVsComputer() {
        const iEl = this.createAvatarElForHand();

        this.playerOneSection.appendChild(iEl);
        this.playerTwoSection.appendChild(iEl.cloneNode());

        const button = this.createPlayButton();
        this.resolutionActions.appendChild(button);

        button.addEventListener('click', this.clickHandlerForComputerVsComputer.bind(this));
    }

    /**
     * Click event that handles a round of `CompVsComp` game
     */
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

    /**
     * Returns a dom element for a given Hand
     * @param {Hand} hand 
     * @returns {Element} 
     */
    createAvatarElForHand(hand) {
        let i = this._document.createElement('i');

        if (hand) {
            i.className = `${hand.avatarClass} icon`;
            i.dataset.hand = hand.shape;
        } else {
            i.className = 'fas fa-question icon';
        }

        return i;
    }

    /**
     * Returns a button element which is used to trigger a `Comp vs Comp` game
     * @returns {Element} button
     */
    createPlayButton() {
        let button = this._document.createElement('button');
        button.innerHTML = '<i class="fas fa-redo-alt"></i>';

        return button;
    }

    /**
     * Inserts game's resolution message into its container
     * @param {number} resolution - 1, 0, -1 
     */
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

    /**
     * Helper function that replaces inner html of an element with new a element
     * @param {Element} parent
     * @param {Element} child 
     */
    replaceInner(parent, child) {
        parent.innerHTML = '';
        parent.appendChild(child);
    }
}

module.exports = {
    MODE: MODE,
    GameController: GameController,
}
