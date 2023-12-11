import CanvasUtil from '../Misc/CanvasUtil.js';
import Drawable from '../Misc/Drawable.js';
import Player from '../Game/Player.js';
import Wall from '../Misc/Wall.js';

export default class SchoolWalls extends Drawable {
  private wallsPositions: Array<Array<number>>;

  private walls: Wall[];

  public constructor(maxX: number, maxY: number) {
    super();
    this.maxX = maxX;
    this.maxY = maxY;
    // [direction, xPos, Ypos, width, height]
    // Direction the wall is ... to you
    // 0 = Above
    // 1 = Underneat
    // 2 = left
    // 3 = right

    // wallsPostions [direction, X, Y, width, height]
    this.wallsPositions = [
      // red
      [2, this.maxX * 0.0125, 0, 5, this.maxY], // left
      [3, this.maxX - this.maxX * 0.0155, 0, 5, this.maxY], // right
      [0, 0, this.maxY * 0.215, this.maxX, 5], // above
      // cyan
      [3, this.maxX * 0.455, this.maxY * 0.215, 5, this.maxY * 0.09], // right
      [2, this.maxX * 0.54, this.maxY * 0.215, 5, this.maxY * 0.09], // left
      [0, this.maxX * 0.455, this.maxY * 0.3, this.maxX * 0.0875, 5], // above
    ];
    this.walls = [
    ];
    for (let index = 0; index < this.wallsPositions.length; index++) {
      this.walls.push(new Wall(
        maxX,
        maxY,
        this.wallsPositions[index][0],
        this.wallsPositions[index][1],
        this.wallsPositions[index][2],
        this.wallsPositions[index][3],
        this.wallsPositions[index][4],
      ));
    }
  }

  /**
   * testupdates the wall
   *
   * @param player player
   */
  public update(player:Player): void {
    this.walls.forEach((wall) => {
      wall.updateWall(player);
    });
  }

  /**
   * Renders all the doors
   *
   * @param canvas canvas to draw on
   */
  public override render(canvas: HTMLCanvasElement): void {
    // exit door
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.055, this.maxY * 0.22, this.maxX * 0.0625, this.maxY * 0.0825, 'yellow');
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.83, this.maxY * 0.58, this.maxX * 0.133, this.maxY * 0.42, 'orange');
    // walls
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.0125, 0, 5, this.maxY, 'red'); // left
    CanvasUtil.fillRectangle(canvas, this.maxX - this.maxX * 0.0155, 0, 5, this.maxY, 'red'); // right
    CanvasUtil.fillRectangle(canvas, 0, this.maxY * 0.215, this.maxX, 5, 'red'); // above

    CanvasUtil.fillRectangle(canvas, this.maxX * 0.455, this.maxY * 0.215, 5, this.maxY * 0.09, 'cyan'); // right
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.54, this.maxY * 0.215, 5, this.maxY * 0.09, 'cyan'); // left
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.455, this.maxY * 0.3, this.maxX * 0.0875, 5, 'cyan'); // above
  }
}
