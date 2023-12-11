import CanvasUtil from '../Misc/CanvasUtil.js';
import KeyListener from '../Game/KeyListener.js';
import Locale from '../Misc/Locale.js';
import Scene from '../Misc/Scene.js';
import SceneDungeon from '../Dungeon/SceneDungeon.js';
import SceneHome from '../Home/SceneHome.js';
import SceneSchool from '../School/SceneSchool.js';

export default class SceneStory extends Scene {
  private nextScene: Scene;

  private shouldContinue: boolean;

  private version: number;

  public constructor(maxX: number, maxY: number, version: number, scoreboard: Array<number>) {
    super(maxX, maxY, scoreboard);
    this.shouldContinue = false;
    this.maxX = maxX;
    this.maxY = maxY;
    this.version = version;
    if (this.version === 0) {
      this.nextScene = new SceneHome(maxX, maxY, scoreboard);
    }
    if (this.version === 1) {
      this.nextScene = new SceneSchool(maxX, maxY, this.scoreboard);
    }
    if (this.version === 2) {
      this.nextScene = new SceneDungeon(maxX, maxY, scoreboard);
    }
  }

  /**
   * If key is pressed the loads next scene
   *
   * @param keyListener retrieves key input
   */
  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed('Space') || keyListener.keyPressed('KeyE')) {
      this.shouldContinue = true;
    }
  }

  /**
   * Checks if the player wants to continue
   *
   * @returns Next scene
   */
  public update(): Scene {
    if (this.shouldContinue) {
      return this.nextScene;
    }
    return null;
  }

  /**
   * Draws storyText to the canvas
   *
   * @param canvas canvas to draw on
   * @param translator writes text in users language
   */
  public render(canvas: HTMLCanvasElement, translator: Locale): void {
    CanvasUtil.fillCanvas(canvas, 'lightslategrey');
    if (this.version === 0) {
      // display movement controlls
      CanvasUtil.writeTextToCanvas(canvas, translator.t('CONTROLLS'), this.maxX * 0.5, 80, 'center', undefined, 40, 'White');
      CanvasUtil.writeTextToCanvas(canvas, translator.t('MOVEMENT & INTERACTIONS'), this.maxX * 0.5, 165, 'center', undefined, 20, 'White');
      CanvasUtil.drawImage(canvas, CanvasUtil.loadNewImage('./assets/controlls/controllsMovement.png'), this.maxX * 0.55, 170);
      CanvasUtil.writeTextToCanvas(canvas, translator.t('forwards'), this.maxX * 0.4, 202, 'left', undefined, 20, 'White');
      CanvasUtil.writeTextToCanvas(canvas, translator.t('backwards'), this.maxX * 0.4, 240, 'left', undefined, 20, 'White');
      CanvasUtil.writeTextToCanvas(canvas, translator.t('left'), this.maxX * 0.4, 278, 'left', undefined, 20, 'White');
      CanvasUtil.writeTextToCanvas(canvas, translator.t('right'), this.maxX * 0.4, 316, 'left', undefined, 20, 'White');
      CanvasUtil.writeTextToCanvas(canvas, translator.t('interact'), this.maxX * 0.4, 352, 'left', undefined, 20, 'White');
      // display quiz controlls
      CanvasUtil.writeTextToCanvas(canvas, translator.t('QUIZ'), this.maxX * 0.5, 400, 'center', undefined, 20, 'White');
      CanvasUtil.drawImage(canvas, CanvasUtil.loadNewImage('./assets/controlls/quizButtons.png'), this.maxX * 0.55, 400);
      CanvasUtil.writeTextToCanvas(canvas, translator.t('Answer 1'), this.maxX * 0.4, 430, 'left', undefined, 20, 'White');
      CanvasUtil.writeTextToCanvas(canvas, translator.t('Answer 2'), this.maxX * 0.4, 470, 'left', undefined, 20, 'White');
      CanvasUtil.writeTextToCanvas(canvas, translator.t('Answer 3'), this.maxX * 0.4, 505, 'left', undefined, 20, 'White');
      // How to set the language
      CanvasUtil.writeTextToCanvas(canvas, translator.t('LANGUAGE'), this.maxX * 0.5, 550, 'center', undefined, 20, 'White');
      CanvasUtil.drawImage(canvas, CanvasUtil.loadNewImage('./assets/controlls/quizButtons.png'), this.maxX * 0.55, 400);
      CanvasUtil.writeTextToCanvas(canvas, 'Nederlands', this.maxX * 0.4, 580, 'left', undefined, 20, 'White');
      CanvasUtil.writeTextToCanvas(canvas, 'English', this.maxX * 0.4, 610, 'left', undefined, 20, 'White');
      CanvasUtil.writeTextToCanvas(canvas, 'N', this.maxX * 0.572, 580, 'left', undefined, 20, 'White');
      CanvasUtil.writeTextToCanvas(canvas, 'M', this.maxX * 0.572, 615, 'left', undefined, 20, 'White');
    }
    if (this.version === 1) {
      CanvasUtil.writeTextToCanvas(canvas, translator.t('You are going to school'), this.maxX * 0.5, this.maxY * 0.1, 'center', undefined, 40, 'White');
    }
    if (this.version === 2) {
      // story of the escape room
      CanvasUtil.writeTextToCanvas(canvas, translator.t('YOUR CATFISHED'), this.maxX * 0.5, this.maxY * 0.1, 'center', undefined, 40, 'White');
      CanvasUtil.writeTextToCanvas(canvas, translator.t("The person you were chatting with wasn't who he said he was"), this.maxX * 0.5, this.maxY * 0.2, 'center', undefined, 20, 'White');
      CanvasUtil.writeTextToCanvas(canvas, translator.t('He put you in his basement'), this.maxX * 0.5, this.maxY * 0.23, 'center', undefined, 20, 'White');
      CanvasUtil.writeTextToCanvas(canvas, translator.t('Find a way to escape the basement'), this.maxX * 0.5, this.maxY * 0.26, 'center', undefined, 20, 'White');
      CanvasUtil.writeTextToCanvas(canvas, translator.t("But whatever you do don't let him catch you"), this.maxX * 0.5, this.maxY * 0.29, 'center', undefined, 20, 'White');
      CanvasUtil.writeTextToCanvas(canvas, translator.t('Open chests to get tools & interact with the buttons to change the doors'), this.maxX * 0.5, this.maxY * 0.44, 'center', undefined, 20, 'White');
    }
    CanvasUtil.writeTextToCanvas(canvas, translator.t('Press [SPACEBAR] or [E] to continue'), (this.maxX / 2), (this.maxY * 0.95), 'center', undefined, undefined, 'black');
  }
}
