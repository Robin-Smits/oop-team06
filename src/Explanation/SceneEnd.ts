import CanvasUtil from '../Misc/CanvasUtil.js';
import KeyListener from '../Game/KeyListener.js';
import Scene from '../Misc/Scene.js';
import SceneStart from '../Explanation/SceneStart.js';
import Locale from '../Misc/Locale.js';

export default class SceneEnd extends Scene {
  private goBack: boolean;

  public constructor(maxX: number, maxY: number, scoreboard: Array<number>) {
    super(maxX, maxY, scoreboard);
    this.goBack = false;
    document.body.style.backgroundImage = "url('./assets/EndSceneBG.png')";
  }

  /**
   * checks if key is pressed to start the game
   *
   * @param keyListener keylistener
   */
  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed('Space') || keyListener.keyPressed('KeyE')) {
      this.goBack = true;
    }
  }

  /**
   * @returns a fitting letter for the amount of mistakes
   */
  public gradingSystem(): string {
    if (this.scoreboard.at(1) === 0) {
      return 'S';
    } if (this.scoreboard.at(1) > 0 && this.scoreboard.at(1) <= 2) {
      return 'A';
    } if (this.scoreboard.at(1) > 2 && this.scoreboard.at(1) <= 5) {
      return 'B';
    } if (this.scoreboard.at(1) > 5 && this.scoreboard.at(1) <= 8) {
      return 'C';
    } if (this.scoreboard.at(1) > 8 && this.scoreboard.at(1) <= 17) {
      return 'D';
    }
    return 'E';
  }

  /**
   * checks if game should start
   *
   * @returns the next scene
   */
  public update(): Scene {
    if (this.goBack) {
      return new SceneStart(this.maxX, this.maxY, [0, 0, 0, 0]);
    }
    return null;
  }

  /**
   * renders the logo
   *
   * @param canvas renders image to canvas
   * @param translator translate text
   */
  public render(canvas: HTMLCanvasElement, translator: Locale):void {
    CanvasUtil.writeTextToCanvas(canvas, translator.t('- Total score :number', { number: `${this.scoreboard.at(0)}` }), this.maxX * 0.21, this.maxY * 0.32, 'center', 'Arial', this.maxX * 0.025, 'lime');
    CanvasUtil.writeTextToCanvas(canvas, translator.t('- Total mistakes :number', { number: `${this.scoreboard.at(1)}` }), this.maxX * 0.79, this.maxY * 0.32, 'center', 'Arial', this.maxX * 0.025, 'red');
    CanvasUtil.writeTextToCanvas(canvas, this.gradingSystem(), this.maxX / 2, this.maxY * 0.6, 'center', 'Arial', this.maxX * 0.08, 'gold');
  }
}
