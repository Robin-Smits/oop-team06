import KeyListener from '../Game/KeyListener.js';
import Player from '../Game/Player.js';
import Scene from '../Misc/Scene.js';
import ScenePark from '../Park/ScenePark.js';
import CanvasUtil from '../Misc/CanvasUtil.js';
import Locale from '../Misc/Locale.js';
import HomeWalls from '../Home/HomeWalls.js';

export default class SceneHome extends Scene {
  private player: Player;

  private nextScene: Scene;

  private walls: HomeWalls;

  public constructor(maxX: number, maxY: number, scoreboard: Array<number>) {
    super(maxX, maxY, scoreboard);
    this.player = new Player(maxX * 0.15, maxY * 0.55, 3.5, 1, maxX, maxY);
    this.walls = new HomeWalls(maxX, maxY);
    this.nextScene = null;
    this.maxX = maxX;
    this.maxY = maxY;
    document.body.style.backgroundImage = "url('./assets/homeMap.png')";
  }

  /**
   * Processes the users input
   *
   * @param keyListener keylistener
   */
  public processInput(keyListener: KeyListener): void {
    if (keyListener.isKeyDown('ArrowLeft') || keyListener.isKeyDown('KeyA')) {
      this.player.move('left');
      this.player.update(6);
    }
    if (keyListener.isKeyDown('ArrowRight') || keyListener.isKeyDown('KeyD')) {
      this.player.move('right');
      this.player.update(6);
    }
    if (keyListener.isKeyDown('ArrowUp') || keyListener.isKeyDown('KeyW')) {
      this.player.move('up');
      this.player.update(6);
    }
    if (keyListener.isKeyDown('ArrowDown') || keyListener.isKeyDown('KeyS')) {
      this.player.move('down');
      this.player.update(6);
    }
    // pauses player if there is no movement
    if (!keyListener.isKeyDown('ArrowLeft')
    || !keyListener.isKeyDown('ArrowRight')
    || !keyListener.isKeyDown('ArrowUp')
    || !keyListener.isKeyDown('ArrowDown')
    || keyListener.isKeyDown('KeyW')
    || keyListener.isKeyDown('KeyA')
    || keyListener.isKeyDown('KeyS')
    || keyListener.isKeyDown('KeyD')
    ) {
      this.player.update(0);
    }
    // check is at the right location and pressed R/Space
    if ((keyListener.keyPressed('KeyE') || keyListener.keyPressed('Space'))
      && this.player.getPosX() + this.player.getWidth() >= this.maxX * 0.875
      && this.player.getPosX() <= (this.maxX * 0.875) + (this.maxX * 0.11)
      && this.player.getPosY() >= this.maxY * 0.40
      && this.player.getPosY() <= (this.maxY * 0.40) + (this.maxY * 0.12)
    ) {
      this.nextScene = new ScenePark(this.maxX, this.maxY, this.scoreboard);
    }
  }

  /**
   * Updates the level
   *
   * @returns nextScene
   */
  public update(): Scene {
    this.walls.update(this.player);
    return this.nextScene;
  }

  /**
   * renders the level to the canvas
   *
   * @param canvas canvas to draw on
   * @param translator writes text in selcted language
   */
  public render(canvas: HTMLCanvasElement, translator: Locale): void {
    this.player.render(canvas);
    // shows hitboxes
    // this.walls.render(canvas);
    CanvasUtil.drawImage(canvas, CanvasUtil.loadNewImage('./assets/objectiveBorderL.png'), 0, 0);
    CanvasUtil.writeTextToCanvas(canvas, translator.t('- Go outside'), 15, 35, 'left', 'Arial', 20, 'white');
  }
}
