import CanvasUtil from '../Misc/CanvasUtil.js';
import DungeonWallsDoors from '../Dungeon/DungeonBorders.js';
import Player from '../Game/Player.js';

export default class RedDoors extends DungeonWallsDoors {
  public constructor(maxX: number, maxY: number, color: string) {
    super();
    this.maxX = maxX;
    this.maxY = maxY;
    this.color = color;
    this.state = 0;
  }

  /**
   * Renders all the doors
   *
   * @param canvas canvas to draw on
   */
  public override render(canvas: HTMLCanvasElement): void {
    if (this.state === 0) {
      CanvasUtil.fillRectangle(canvas, this.maxX * 0.444, this.maxY * 0.089, this.maxX * 0.015, this.maxY * 0.1275, 'red'); // door 1
      CanvasUtil.fillRectangle(canvas, this.maxX * 0.533, this.maxY * 0.385, this.maxX * 0.015, this.maxY * 0.132, 'red'); // door 2
      CanvasUtil.drawRectangle(canvas, this.maxX * 0.715, this.maxY * 0.122, this.maxX * 0.015, this.maxY * 0.095, 'red'); // door 3
    } else if (this.state === 1) {
      CanvasUtil.drawRectangle(canvas, this.maxX * 0.444, this.maxY * 0.089, this.maxX * 0.015, this.maxY * 0.1275, 'red'); // door 1
      CanvasUtil.drawRectangle(canvas, this.maxX * 0.533, this.maxY * 0.395, this.maxX * 0.015, this.maxY * 0.1275, 'red'); // door 2
      CanvasUtil.fillRectangle(canvas, this.maxX * 0.715, this.maxY * 0.122, this.maxX * 0.015, this.maxY * 0.095, 'red'); // door 3
    }
  }

  /**
   * Updates the doors
   *
   * @param player player
   */
  public update(player: Player): void {
    // TODO hitboxes here
    if (this.state === 0) {
      // Door 1
      if (player.getPosX() + player.getWidth() >= (this.maxX * 0.444)
      && player.getPosX() <= (this.maxX * 0.444) + ((this.maxX * 0.015) / 2)
      && player.getPosY() >= (this.maxY * 0.089)
      && player.getPosY() <= (this.maxY * 0.089) + (this.maxY * 0.1275)) {
        player.setPosX((this.maxX * 0.444) - player.getWidth());
      }
      if (player.getPosX() + player.getWidth() >= (this.maxX * 0.444) + ((this.maxX * 0.015) / 2)
      && player.getPosX() <= (this.maxX * 0.444) + (this.maxX * 0.015)
      && player.getPosY() >= (this.maxY * 0.089)
      && player.getPosY() <= (this.maxY * 0.089) + (this.maxY * 0.1275)) {
        player.setPosX((this.maxX * 0.444) + (this.maxX * 0.015));
      }
      // Door 2
      if (player.getPosX() + player.getWidth() >= (this.maxX * 0.533)
      && player.getPosX() <= (this.maxX * 0.533) + (13)
      && player.getPosY() >= (this.maxY * 0.385)
      && player.getPosY() <= (this.maxY * 0.385) + (this.maxY * 0.132)) {
        player.setPosX((this.maxX * 0.533) - player.getWidth());
      }
      if (player.getPosX() + player.getWidth() >= (this.maxX * 0.533) + ((this.maxX * 0.015) / 2)
      && player.getPosX() <= (this.maxX * 0.533) + (this.maxX * 0.015)
      && player.getPosY() >= (this.maxY * 0.385)
      && player.getPosY() <= (this.maxY * 0.385) + (this.maxY * 0.132)) {
        player.setPosX((this.maxX * 0.533) + (this.maxX * 0.015));
      }
    } else {
      // Door 3
      if (player.getPosX() + player.getWidth() >= (this.maxX * 0.715)
      && player.getPosX() <= (this.maxX * 0.715) + ((this.maxX * 0.015) / 2)
      && player.getPosY() >= (this.maxY * 0.122)
      && player.getPosY() <= (this.maxY * 0.122) + (this.maxY * 0.095)) {
        player.setPosX((this.maxX * 0.715) - player.getWidth());
      }
      if (player.getPosX() + player.getWidth() >= (this.maxX * 0.715) + ((this.maxX * 0.015) / 2)
      && player.getPosX() <= (this.maxX * 0.715) + (this.maxX * 0.015)
      && player.getPosY() + player.getHeight() >= (this.maxY * 0.122)
      && player.getPosY() <= (this.maxY * 0.122) + (this.maxY * 0.095)) {
        player.setPosX((this.maxX * 0.715) + this.maxX * 0.015);
      }
    }
  }
}
