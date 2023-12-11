import Drawable from '../Misc/Drawable.js';
import Player from '../Game/Player.js';

export default class Wall extends Drawable {
  private direction: number;

  private width: number;

  private height: number;

  public constructor(
    maxX: number,
    maxY: number,
    direction: number,
    posX: number,
    posY: number,
    width: number,
    height: number,
  ) {
    super();
    this.maxX = maxX;
    this.maxY = maxY;
    this.direction = direction;
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
  }

  /**
   * Makes a wall
   *
   * @param player player of the level
   */
  public updateWall(player: Player): void {
    if (this.direction === 0) {
      if (player.getPosX() + player.getWidth() >= (this.posX)
      && player.getPosX() <= (this.posX) + (this.width)
      && player.getPosY() + player.getHeight() >= (this.posY)
      && player.getPosY() <= (this.posY) + (this.height)) {
        player.setPosY(this.posY + this.height);
      }
    } else if (this.direction === 1) {
      if (player.getPosX() + player.getWidth() >= (this.posX)
      && player.getPosX() <= (this.posX) + (this.width)
      && player.getPosY() + player.getHeight() >= (this.posY)
      && player.getPosY() <= (this.posY) + (this.height)) {
        player.setPosY(this.posY - player.getHeight());
      }
    } else if (this.direction === 2) {
      if (player.getPosX() + player.getWidth() >= (this.posX)
      && player.getPosX() <= (this.posX) + (this.width)
      && player.getPosY() + player.getHeight() >= (this.posY)
      && player.getPosY() <= (this.posY) + (this.height)) {
        player.setPosX(this.posX + this.width);
      }
    } else if (this.direction === 3) {
      if (player.getPosX() + player.getWidth() >= (this.posX)
      && player.getPosX() <= (this.posX) + (this.width)
      && player.getPosY() + player.getHeight() >= (this.posY)
      && player.getPosY() <= (this.posY) + (this.height)) {
        player.setPosX(this.posX - player.getWidth());
      }
    }
  }
}
