import CanvasUtil from '../Misc/CanvasUtil.js';
import { Game } from '../Game/GameLoop.js';
import KeyListener from '../Game/KeyListener.js';
import Locale from '../Misc/Locale.js';
import Scene from '../Misc/Scene.js';
import StartScene from '../Explanation/SceneStart.js';

export default class GameName extends Game {
  private canvas: HTMLCanvasElement;

  private keyListener: KeyListener;

  private currentScene: Scene;

  private scoreboard: Array<number>;

  private translator: Locale;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.scoreboard = [0, 0, 0, 0];
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.keyListener = new KeyListener();
    this.translator = new Locale(Locale.getCurrentBrowserLocale());
    // Set the starting scene
    this.currentScene = new StartScene(canvas.width, canvas.height, this.scoreboard);
  }

  /**
   * Process all input. Called from the GameLoop.
   */
  public processInput(): void {
    if (this.keyListener.keyPressed('KeyN')) {
      this.translator = new Locale('nl');
    }
    if (this.keyListener.keyPressed('KeyM')) {
      this.translator = new Locale('en-US');
    }
    this.currentScene.processInput(this.keyListener);
  }

  /**
   * Update game state. Called from the GameLoop
   *
   * @param elapsed time elapsed from the GameLoop
   * @returns true if the game should continue
   */
  public update(elapsed: number): boolean {
    const nextScene = this.currentScene.update(elapsed);
    if (nextScene !== null) this.currentScene = nextScene;
    return true;
  }

  /**
   * Render all the elements in the screen. Called from GameLoop
   */
  public render(): void {
    CanvasUtil.clearCanvas(this.canvas);
    this.currentScene.render(this.canvas, this.translator);
  }
}
