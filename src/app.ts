import GameName from './Game/GameName.js';
import { GameLoop } from './Game/GameLoop.js';

const game = new GameName(document.getElementById('game') as HTMLCanvasElement);

const gameLoop = new GameLoop(game);
window.addEventListener('load', () => {
  gameLoop.start();
});
