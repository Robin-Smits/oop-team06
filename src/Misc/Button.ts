import CanvasUtil from '../Misc/CanvasUtil.js';
import Drawable from '../Misc/Drawable.js';
import Player from '../Game/Player.js';

export default class Button extends Drawable {
  public constructor(maxX:number, maxY: number) {
    super();
    this.maxX = maxX;
    this.maxY = maxY;
  }

  /**
   * Checks if the button is pressed
   *
   * @param player player
   * @returns true or false
   */
  public playerAtRedButton(player: Player):boolean {
    if (player.getPosX() + player.getWidth() >= (this.maxX * 0.3755)
    && player.getPosX() <= (this.maxX * 0.3755) + (this.maxX / 45)
    && player.getPosY() + player.getHeight() >= (this.maxY * 0.097)
    && player.getPosY() <= (this.maxY * 0.097) + (this.maxX / 45)) {
      return true;
    }
    return false;
  }

  /**
   * Checks if the button is pressed
   *
   * @param player player
   * @returns true or false
   */
  public playerAtGreenButton(player: Player):boolean {
    if (player.getPosX() + player.getWidth() >= (this.maxX * 0.5375)
    && player.getPosX() <= (this.maxX * 0.5375) + (this.maxX / 45)
    && player.getPosY() >= (this.maxY * 0.675)
    && player.getPosY() <= (this.maxY * 0.675) + (this.maxX / 45)) {
      return true;
    }
    return false;
  }

  /**
   * Renders the button
   *
   * @param canvas canvas to draw on
   */
  public override render(canvas: HTMLCanvasElement): void {
    // Green BUTTON
    CanvasUtil.fillCircle(canvas, this.maxX * 0.549, this.maxY * 0.698, 5, 'forestgreen');
    // hitbox
    // CanvasUtil.fillRectangle(canvas, this.maxX * 0.5375,
    // this.maxY * 0.675, this.maxX / 45, this.maxX / 45, 'lime');
    // RED BUTTON
    CanvasUtil.fillCircle(canvas, this.maxX * 0.387, this.maxY * 0.115, 5, 'red');
    // hitbox
    // CanvasUtil.fillRectangle(canvas, this.maxX * 0.3755,
    // this.maxY * 0.097, this.maxX / 45, this.maxX / 45, 'white');
  }
}
