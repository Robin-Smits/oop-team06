import CanvasUtil from '../Misc/CanvasUtil.js';
import Player from '../Game/Player.js';
import DungeonWallsDoors from '../Dungeon/DungeonBorders.js';

export default class GreenDoors extends DungeonWallsDoors {
  public constructor(maxX: number, maxY: number, color: string) {
    super();
    this.maxX = maxX;
    this.maxY = maxY;
    this.state = 0;
    this.color = color;
  }

  /**
   * Renders all the doors
   *
   * @param canvas canvas to draw on
   */
  public override render(canvas: HTMLCanvasElement): void {
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.684, this.maxY * 0.38, this.maxX * 0.035, this.maxY * 0.035, 'cyan'); // door 2
    if (this.state === 0) {
      CanvasUtil.fillRectangle(canvas, this.maxX * 0.764, this.maxY * 0.38, this.maxX * 0.035, this.maxY * 0.035, 'forestgreen'); // door 1
      CanvasUtil.drawRectangle(canvas, this.maxX * 0.653, this.maxY * 0.122, this.maxX * 0.015, this.maxY * 0.095, 'forestgreen'); // door 3
      CanvasUtil.fillRectangle(canvas, this.maxX * 0.731, this.maxY * 0.131, this.maxX / 47.5, this.maxY / 30, 'forestgreen'); // door 4
    } else if (this.state === 1) {
      CanvasUtil.drawRectangle(canvas, this.maxX * 0.764, this.maxY * 0.38, this.maxX * 0.035, this.maxY * 0.035, 'forestgreen'); // door 1
      CanvasUtil.fillRectangle(canvas, this.maxX * 0.653, this.maxY * 0.122, this.maxX * 0.015, this.maxY * 0.095, 'forestgreen');// door 3
      CanvasUtil.drawRectangle(canvas, this.maxX * 0.731, this.maxY * 0.131, this.maxX / 47.5, this.maxY / 30, 'forestgreen'); // door 4
    }
  }

  /**
   * Updates the doors
   *
   * @param player player
   */
  public update(player: Player): void {
    // Door 2
    if (player.getPosX() + player.getWidth() >= (this.maxX * 0.684)
    && player.getPosX() <= (this.maxX * 0.684) + (this.maxX * 0.035)
    && player.getPosY() + player.getHeight() >= (this.maxY * 0.38)
    && player.getPosY() <= (this.maxY * 0.38) + (0.5 * (this.maxY * 0.035))) {
      player.setPosY((this.maxY * 0.38) - player.getHeight());
    }
    if (player.getPosX() + player.getWidth() >= (this.maxX * 0.684)
    && player.getPosX() <= (this.maxX * 0.684) + (this.maxX * 0.035)
    && player.getPosY() + player.getHeight() >= (this.maxY * 0.38) + (0.5 * (this.maxY * 0.035))
    && player.getPosY() <= (this.maxY * 0.38) + (this.maxY * 0.035)) {
      player.setPosY((this.maxY * 0.38) + (this.maxY * 0.035));
    }

    if (this.state === 0) {
      // Door 1
      if (player.getPosX() + player.getWidth() >= (this.maxX * 0.764)
      && player.getPosX() <= (this.maxX * 0.764) + (this.maxX * 0.035)
      && player.getPosY() + player.getHeight() >= (this.maxY * 0.38)
      && player.getPosY() <= (this.maxY * 0.38) + (0.5 * (this.maxY * 0.035))) {
        player.setPosY((this.maxY * 0.38) - player.getHeight());
      }
      if (player.getPosX() + player.getWidth() >= (this.maxX * 0.764)
      && player.getPosX() <= (this.maxX * 0.764) + (this.maxX * 0.035)
      && player.getPosY() + player.getHeight() >= (this.maxY * 0.38) + (0.5 * this.maxY * 0.035)
      && player.getPosY() <= (this.maxY * 0.38) + (this.maxY * 0.035)) {
        player.setPosY((this.maxY * 0.38) + (this.maxY * 0.035));
      }
      // Door 4
      if (player.getPosX() + player.getWidth() >= (this.maxX * 0.731)
      && player.getPosX() <= (this.maxX * 0.731) + this.maxX / 47.5
      && player.getPosY() + player.getHeight() >= (this.maxY * 0.131) + ((this.maxY / 30) / 2)
      && player.getPosY() <= (this.maxY * 0.131) + (this.maxY / 30)) {
        player.setPosY((this.maxY * 0.131) + (this.maxY / 30));
      }
    } else {
      // Door 3
      if (player.getPosX() + player.getWidth() >= (this.maxX * 0.653)
      && player.getPosX() <= (this.maxX * 0.653) + (this.maxX * 0.015)
      && player.getPosY() >= (this.maxY * 0.122)
      && player.getPosY() <= (this.maxY * 0.122) + (this.maxY * 0.095)) {
        player.setPosX((this.maxX * 0.653) - player.getWidth());
      }
      if (player.getPosX() + player.getWidth() >= (this.maxX * 0.653) + (0.5 * this.maxX * 0.015)
      && player.getPosX() <= (this.maxX * 0.653) + (this.maxX * 0.015)
      && player.getPosY() >= (this.maxY * 0.122)
      && player.getPosY() <= (this.maxY * 0.122) + (this.maxY * 0.095)) {
        player.setPosX((this.maxX * 0.653) + this.maxX * 0.015);
      }
    }
  }
}
