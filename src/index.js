import { GameController, MODE } from './services/game-controller';
import { Classic } from './models/game/classic'


(function () {
    const game = new GameController(new Classic());
    game.init(MODE.PlayerVsComputer);

    const select = document.querySelector('select[name=mode]');
    select.addEventListener('change', function () {
        game.init(this.value);
    });
})();
