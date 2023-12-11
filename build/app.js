import GameName from './Game/GameName.js';
import { GameLoop } from './Game/GameLoop.js';
const game = new GameName(document.getElementById('game'));
const gameLoop = new GameLoop(game);
window.addEventListener('load', () => {
    gameLoop.start();
});
//# sourceMappingURL=app.js.map