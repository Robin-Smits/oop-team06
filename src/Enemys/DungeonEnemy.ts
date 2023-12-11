import CanvasUtil from '../Misc/CanvasUtil.js';
import Drawable from '../Misc/Drawable.js';
import Player from '../Game/Player.js';

export default abstract class DungeonEnemy extends Drawable {
  protected timeToNextImage: number;

  protected facingDirection: number;

  protected speed: number;

  protected imageState: number;

  protected timesMoved: number;

  protected facingDown: Array<HTMLImageElement>;

  protected facingUp: Array<HTMLImageElement>;

  protected facingLeft: Array<HTMLImageElement>;

  protected facingRight: Array<HTMLImageElement>;

  public constructor() {
    super();
    this.image = CanvasUtil.loadNewImage('./assets/enemyBald/down1.png');
    this.timeToNextImage = 60;
    this.imageState = 0;
  }

  /**
   * Updates the position of the enemy
   */
  public updateAnimation(): void {
    if (this.timeToNextImage <= 0) {
      if (this.facingDirection === 0) {
        if (this.imageState === 0) {
          this.image = this.facingUp.at(0);
        } else if (this.imageState === 1) {
          this.image = this.facingUp.at(1);
        } else if (this.imageState === 2) {
          this.image = this.facingUp.at(0);
        } else if (this.imageState === 3) {
          this.image = this.facingUp.at(2);
          this.imageState = -1;
        }
      }
      if (this.facingDirection === 1) {
        if (this.imageState === 0) {
          this.image = this.facingDown.at(0);
        } else if (this.imageState === 1) {
          this.image = this.facingDown.at(1);
        } else if (this.imageState === 2) {
          this.image = this.facingDown.at(0);
        } else if (this.imageState === 3) {
          this.image = this.facingDown.at(2);
          this.imageState = -1;
        }
      }
      if (this.facingDirection === 2) {
        if (this.imageState === 0) {
          this.image = this.facingLeft.at(0);
        } else if (this.imageState === 1) {
          this.image = this.facingLeft.at(1);
        } else if (this.imageState === 2) {
          this.image = this.facingLeft.at(0);
        } else if (this.imageState === 3) {
          this.image = this.facingLeft.at(2);
          this.imageState = -1;
        }
      }
      if (this.facingDirection === 3) {
        if (this.imageState === 0) {
          this.image = this.facingRight.at(0);
        } else if (this.imageState === 1) {
          this.image = this.facingRight.at(1);
        } else if (this.imageState === 2) {
          this.image = this.facingRight.at(0);
        } else if (this.imageState === 3) {
          this.image = this.facingRight.at(2);
          this.imageState = -1;
        }
      }
      this.imageState += 1;
    }
  }

  public abstract update(elapsed: number): void;
  public abstract collidesWithPlayer(player: Player): boolean;
  public abstract drawHitbox(canvas: HTMLCanvasElement): void;

  /**
   * Sets the direction
   *
   * @param direction side to move to
   */
  public setDirection(direction: number): void {
    this.facingDirection = direction;
  }
}
