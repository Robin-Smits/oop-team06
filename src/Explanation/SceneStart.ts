import CanvasUtil from '../Misc/CanvasUtil.js';
import KeyListener from '../Game/KeyListener.js';
import Scene from '../Misc/Scene.js';
import SceneStory from '../Explanation/SceneStory.js';

export default class StartScene extends Scene {
  private starting: boolean;

  public constructor(maxX: number, maxY: number, scoreboard: Array<number>) {
    super(maxX, maxY, scoreboard);
    this.starting = false;
    document.body.style.backgroundImage = "url('./assets/BackGroundGame.png')";

    this.maxX = maxX;
    this.maxY = maxY;
  }

  /**
   * checks if key is pressed to start the game
   *
   * @param keyListener keylistener
   */
  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed('Space') || keyListener.keyPressed('KeyE')) {
      this.starting = true;
    }
  }

  /**
   * checks if game should start
   *
   * @returns the next scene
   */
  public update(): Scene {
    if (this.starting) {
      return new SceneStory(this.maxX, this.maxY, 0, this.scoreboard);
    }
    return null;
  }

  /**
   * renders the logo
   *
   * @param canvas renders image to canvas
   */
  public render(canvas: HTMLCanvasElement):void {
    CanvasUtil.writeTextToCanvas(canvas, ('Social Media Adventure'), (this.maxX / 2), (this.maxY * 0.4), 'center', 'Impact', this.maxX * 0.075, 'black');
  }
}
