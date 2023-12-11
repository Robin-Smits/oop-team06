import CanvasUtil from '../Misc/CanvasUtil.js';
import Drawable from '../Misc/Drawable.js';
import Player from '../Game/Player.js';

export default class Crates extends Drawable {
  private value: boolean;

  public constructor(posX: number, posY: number) {
    super();
    this.image = CanvasUtil.loadNewImage('./assets/icons/Chest.png');
    this.value = false;
    this.posX = posX;
    this.posY = posY;
  }

  /**
   * checks if the chest is being opened
   *
   * @param player player
   * @returns number
   */
  public update(player: Player): boolean {
    if (player.getPosX() + player.getWidth() >= this.posX
      && player.getPosX() <= this.posX + this.image.width
      && player.getPosY() >= this.posY
      && player.getPosY() <= this.posY + this.image.height
      && this.value === false) {
      this.value = true;
    }
    return this.value;
  }

  /**
   * renders the crates
   *
   * @param canvas canvas to draw on
   */
  public override render(canvas: HTMLCanvasElement): void {
    CanvasUtil.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
