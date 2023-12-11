import KeyListener from '../Game/KeyListener.js';
import Locale from '../Misc/Locale.js';

export default abstract class Scene {
  protected maxX: number;

  protected maxY: number;

  protected scoreboard: Array<number>;

  public constructor(maxX: number, maxY: number, scoreboard: Array<number>) {
    this.scoreboard = scoreboard;
    this.maxX = maxX;
    this.maxY = maxY;
  }

  public abstract processInput(keyListener: KeyListener): void;
  public abstract update(elapsed: number): Scene;
  public abstract render(canvas: HTMLCanvasElement, language?: Locale): void;
}
