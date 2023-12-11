import Drawable from '../Misc/Drawable.js';
import Player from '../Game/Player.js';

export default abstract class DungeonWallsDoors extends Drawable {
  protected color: string;

  protected state: number;

  public abstract update(player: Player): void;

  public abstract override render(canvas: HTMLCanvasElement): void;

  /**
   * Switches the state of the walls with every call
   */
  public switchState():void {
    if (this.state === 0) {
      this.state = 1;
    } else if (this.state === 1) {
      this.state = 0;
    }
  }
}
