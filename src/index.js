const { GameController, MODE } = require('./services/game-controller');
const Classic = require('./models/game/classic');

(function () {
    const game = new GameController(new Classic());
    game.init(MODE.PlayerVsComputer);

    // Listen for game mode changes and re-init the board
    const select = document.querySelector('select[name=mode]');
    select.addEventListener('change', function () {
        game.init(this.value);
    });
})();
