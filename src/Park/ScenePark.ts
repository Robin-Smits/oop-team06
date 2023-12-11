import CanvasUtil from '../Misc/CanvasUtil.js';
import KeyListener from '../Game/KeyListener.js';
import Locale from '../Misc/Locale.js';
import ParkWalls from '../Park/ParkWalls.js';
import Player from '../Game/Player.js';
import Scene from '../Misc/Scene.js';
import SceneHome from '../Home/SceneHome.js';
import SceneStory from '../Explanation/SceneStory.js';
import SceneEnd from '../Explanation/SceneEnd.js';

export default class ScenePark extends Scene {
  private player: Player;

  private nextScene: Scene;

  private walls: ParkWalls;

  public constructor(maxX: number, maxY: number, scoreboard: Array<number>) {
    super(maxX, maxY, scoreboard);
    this.player = new Player(maxX * 0.517, maxY * 0.52, 4, 2, maxX, maxY);
    this.walls = new ParkWalls(maxX, maxY);
    this.nextScene = null;
    this.maxX = maxX;
    this.maxY = maxY;
    document.body.style.backgroundImage = "url('./assets/parkMap.png')";
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

    if (keyListener.keyPressed('KeyE') || keyListener.keyPressed('Space')) {
      if (this.player.getPosX() + this.player.getWidth() >= this.maxX * 0.025
      && this.player.getPosX() <= (this.maxX * 0.025) + (this.maxX * 0.03)
      && this.player.getPosY() >= this.maxY * 0.351
      && this.player.getPosY() <= (this.maxY * 0.351) + (this.maxY * 0.06)) {
        this.nextScene = new SceneHome(this.maxX, this.maxY, this.scoreboard);
      }
      // school
      if (this.player.getPosX() + this.player.getWidth() >= this.maxX * 0.97
      && this.player.getPosX() <= (this.maxX * 0.97) + (this.maxX * 0.37)
      && this.player.getPosY() >= this.maxY * 0.415
      && this.player.getPosY() <= this.maxY * 0.415 + (this.maxY * 0.15)) {
        this.nextScene = new SceneStory(this.maxX, this.maxY, 1, this.scoreboard);
      }
      // dungeon
      if (this.player.getPosX() + this.player.getWidth() >= this.maxX * 0.492
      && this.player.getPosX() <= (this.maxX * 0.492) + (this.maxX * 0.055)
      && this.player.getPosY() >= 0
      && this.player.getPosY() <= this.maxX * 0.055) {
        this.nextScene = new SceneStory(this.maxX, this.maxY, 2, this.scoreboard);
      }
    }
    if ((keyListener.keyPressed('Escape') || keyListener.keyPressed('KeyZ')) && this.scoreboard.at(0) === 17) {
      this.nextScene = new SceneEnd(this.maxX, this.maxY, this.scoreboard);
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
   * @param translator writes text in given language
   */
  public render(canvas: HTMLCanvasElement, translator: Locale): void {
    this.player.render(canvas);
    // map locations
    CanvasUtil.writeTextToCanvas(canvas, translator.t('HOME'), this.maxX * 0.037, this.maxY * 0.215, 'center', undefined, 25, 'Black');
    CanvasUtil.writeTextToCanvas(canvas, 'ONLINE', this.maxX * 0.52, this.maxY * 0.02, 'center', undefined, 20, 'Black');
    CanvasUtil.writeTextToCanvas(canvas, translator.t('FRIEND'), this.maxX * 0.52, this.maxY * 0.05, 'center', undefined, 20, 'Black');
    CanvasUtil.writeTextToCanvas(canvas, 'S', this.maxX * 0.987, this.maxY * 0.450, 'center', undefined, 20, 'Black');
    CanvasUtil.writeTextToCanvas(canvas, 'C', this.maxX * 0.987, this.maxY * 0.472, 'center', undefined, 20, 'Black');
    CanvasUtil.writeTextToCanvas(canvas, 'H', this.maxX * 0.987, this.maxY * 0.494, 'center', undefined, 20, 'Black');
    CanvasUtil.writeTextToCanvas(canvas, 'O', this.maxX * 0.987, this.maxY * 0.516, 'center', undefined, 20, 'Black');
    CanvasUtil.writeTextToCanvas(canvas, 'O', this.maxX * 0.987, this.maxY * 0.538, 'center', undefined, 20, 'Black');
    CanvasUtil.writeTextToCanvas(canvas, 'L', this.maxX * 0.987, this.maxY * 0.560, 'center', undefined, 20, 'Black');
    const objectiveBorderR: HTMLImageElement = CanvasUtil.loadNewImage('./assets/objectiveBorderR.png');
    CanvasUtil.drawImage(canvas, objectiveBorderR, canvas.width - objectiveBorderR.width, 0);

    // objective list
    if (this.scoreboard.at(3) === 1) {
      CanvasUtil.writeTextToCanvas(canvas, translator.t('- Visit your online friend'), canvas.width - objectiveBorderR.width * 0.95, 60, 'left', 'Arial', 20, '#90EE90');
    } else {
      CanvasUtil.writeTextToCanvas(canvas, translator.t('- Visit your online friend'), canvas.width - objectiveBorderR.width * 0.95, 60, 'left', 'Arial', 20, 'white');
    }
    if (this.scoreboard.at(2) === 1) {
      CanvasUtil.writeTextToCanvas(canvas, translator.t('- Go to school'), canvas.width - objectiveBorderR.width * 0.95, 30, 'left', 'Arial', 20, '#90EE90');
    } else {
      CanvasUtil.writeTextToCanvas(canvas, translator.t('- Go to school'), canvas.width - objectiveBorderR.width * 0.95, 30, 'left', 'Arial', 20, 'white');
    }
    if (this.scoreboard.at(0) === 17) {
      CanvasUtil.writeTextToCanvas(canvas, translator.t('- Press [Esc] or [Z] to end'), canvas.width - objectiveBorderR.width * 0.95, 90, 'left', 'Arial', 20, 'white');
      CanvasUtil.writeTextToCanvas(canvas, translator.t('the game'), canvas.width - objectiveBorderR.width * 0.9, 120, 'left', 'Arial', 20, 'white');
    }
    // Left border
    const objectiveBorderL: HTMLImageElement = CanvasUtil.loadNewImage('./assets/objectiveBorderL.png');
    CanvasUtil.drawImage(canvas, objectiveBorderL, 0, 0 - objectiveBorderL.height * 0.4);
    CanvasUtil.writeTextToCanvas(canvas, translator.t('- Total score :number', { number: `${this.scoreboard.at(0)}` }), 10, 30, 'left', 'Arial', 20, 'lime');
    CanvasUtil.writeTextToCanvas(canvas, translator.t('- Total mistakes :number', { number: `${this.scoreboard.at(1)}` }), 10, 60, 'left', 'Arial', 20, 'red');
    // shows hitboxes
    // this.walls.render(canvas);
  }
}
