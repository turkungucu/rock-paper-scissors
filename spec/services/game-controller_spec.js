const Classic = require('../../src/models/game/classic');
const GameController = require('../../src/services/game-controller').GameController;
const MODE = require('../../src/services/game-controller').MODE;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { document } = (new JSDOM(`<div id="playerOne">
    <div class="section-body__hands"></div></div>
    <div id="playerTwo"><div class="section__body"></div></div>
    <div class="resolution__actions"></div>
    <div class="resolution__msg"></div>`)).window;

describe('Game Controller', function () {
    let ctrl;

    beforeAll(function () {
        ctrl = new GameController(new Classic(), document);
    });

    it('constructs the game world given a game', function () {
        expect(ctrl.game).toEqual(jasmine.any(Classic));
        expect(ctrl.mode).toEqual(MODE.PlayerVsComputer);
        expect(ctrl.playerOneSection).not.toBeNull('Player 1 section is not identified');
        expect(ctrl.playerTwoSection).not.toBeNull('Player 2 section is not identified');
        expect(ctrl.resolutionActions).not.toBeNull('Resolution actions is not identified');
        expect(ctrl.resolutionMsg).not.toBeNull('Resolution Msg section is not identified');
    });

    describe('init()', function () {
        beforeEach(function () {
            spyOn(ctrl, 'initPlayerVsComputer');
            spyOn(ctrl, 'initComputerVsComputer');
            spyOn(ctrl, 'resetBoard');
        });

        it('when mode is player vs computer', function () {
            ctrl.init(MODE.PlayerVsComputer);
            expect(ctrl.initPlayerVsComputer).toHaveBeenCalled();
        });

        it('when mode is computer vs computer', function () {
            ctrl.init(MODE.ComputerVsComputer);
            expect(ctrl.initComputerVsComputer).toHaveBeenCalled();
        });

        it('when mode is unknown', function () {
            ctrl.init(3);
            expect(ctrl.initPlayerVsComputer).toHaveBeenCalled();
        });
    });

    describe('initPlayerVsComputer()', function () {
        let iEl;
        beforeEach(function () {
            iEl = document.createElement('i');
            spyOn(ctrl, 'createAvatarElForHand').and.returnValue(iEl);
            spyOn(iEl, 'addEventListener');
        });

        it('attaches click event to each player hand', function () {
            ctrl.initPlayerVsComputer();
            expect(iEl.addEventListener).toHaveBeenCalledTimes(3);
        });
    });

    describe('initComputerVsComputer()', function () {
        let button;

        beforeEach(function () {
            button = document.createElement('button');
            spyOn(ctrl, 'createAvatarElForHand').and.returnValue(document.createElement('i'));
            spyOn(ctrl, 'createPlayButton').and.returnValue(button);
            spyOn(button, 'addEventListener');
        });

        it('attaches click event to each player hand', function () {
            ctrl.initComputerVsComputer();
            expect(button.addEventListener).toHaveBeenCalled();
        });
    });

    describe('handleResolution()', function () {
        it('returns `You Win` when resolution is 1', function () {
            ctrl.handleResolution(1);
            expect(ctrl.resolutionMsg.innerText).toBe('You win!');
        });

        it('returns `It is a tie!` when resolution is 0', function () {
            ctrl.handleResolution(0);
            expect(ctrl.resolutionMsg.innerText).toBe('It is a tie!');
        });

        it('returns `Player 2 wins!` when resolution is -1', function () {
            ctrl.handleResolution(-1);
            expect(ctrl.resolutionMsg.innerText).toBe('Player 2 wins!');
        });
    });
});
