import CanvasUtil from '../Misc/CanvasUtil.js';

export default class Drawable {
  protected image: HTMLImageElement;

  protected posX: number;

  protected posY: number;

  protected maxX: number;

  protected maxY: number;

  /**
   * Function that returns the Xpos of the item
   *
   * @returns the Xpos of the item
   */
  public getPosX(): number {
    return this.posX;
  }

  /**
   * Function that returns the Ypos of the item
   *
   * @returns the Ypos of the item
   */
  public getPosY(): number {
    return this.posY;
  }

  /**
   * Function that sets the Xpos of the item
   *
   * @param posX posX of the drawable
   */
  public setPosX(posX: number): void {
    this.posX = posX;
  }

  /**
   * Function that sets the Ypos of the item
   *
   * @param posY posX of the drawable
   */
  public setPosY(posY: number): void {
    this.posY = posY;
  }

  /**
   * Function that returns the width of the item
   *
   * @returns the width of the item
   */
  public getWidth(): number {
    return this.image.width;
  }

  /**
   * Function that returns the width of the item
   *
   * @returns the width of the item
   */
  public getHeight(): number {
    return this.image.height;
  }

  /**
   * renders the image of the drawable
   *
   * @param canvas the canvas to draw on
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
