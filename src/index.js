import { GameController, MODE } from './services/game-controller';
import { Classic } from './models/game/classic'


(function () {
    new GameController(new Classic(), MODE.PlayerVsComputer).init();
})();
