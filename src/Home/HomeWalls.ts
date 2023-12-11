import CanvasUtil from '../Misc/CanvasUtil.js';
import Drawable from '../Misc/Drawable.js';
import Player from '../Game/Player.js';
import Wall from '../Misc/Wall.js';

export default class HomeWalls extends Drawable {
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
      // cyan
      [0, 0, this.maxY * 0.4, this.maxX, this.maxY * 0.007], // above
      [1, this.maxX * 0.52, this.maxY * 0.5, this.maxX * 0.045, this.maxY * 0.007], // above
      [3, this.maxX * 0.52, this.maxY * 0.4, this.maxX * 0.003, this.maxY * 0.105], // left
      [0, this.maxX * 0.563, this.maxY * 0.4, this.maxX * 0.003, this.maxY * 0.105], // right
      // red
      [1, this.maxX * 0.365, this.maxY * 0.6, this.maxX * 0.065, this.maxY * 0.007], // under
      [3, this.maxX * 0.365, this.maxY * 0.6, this.maxX * 0.003, this.maxY * 0.278], // right
      [0, this.maxX * 0.365, this.maxY * 0.87, this.maxX * 0.065, this.maxY * 0.007], // above
      [2, this.maxX * 0.43, this.maxY * 0.6, this.maxX * 0.003, this.maxY * 0.278], // left
    ];
    this.walls = [];
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
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.875, this.maxY * 0.40, this.maxX * 0.11, this.maxY * 0.12, 'cyan');
    // walls
    CanvasUtil.fillRectangle(canvas, 0, this.maxY * 0.4, this.maxX, this.maxY * 0.007, 'cyan'); // above
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.52, this.maxY * 0.5, this.maxX * 0.045, this.maxY * 0.007, 'cyan'); // above
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.52, this.maxY * 0.4, this.maxX * 0.003, this.maxY * 0.105, 'cyan'); // left
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.563, this.maxY * 0.4, this.maxX * 0.003, this.maxY * 0.105, 'cyan'); // right

    CanvasUtil.fillRectangle(canvas, this.maxX * 0.365, this.maxY * 0.6, this.maxX * 0.065, this.maxY * 0.007, 'red');// above
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.365, this.maxY * 0.6, this.maxX * 0.003, this.maxY * 0.278, 'red'); // left
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.365, this.maxY * 0.87, this.maxX * 0.065, this.maxY * 0.007, 'red'); // under
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.43, this.maxY * 0.6, this.maxX * 0.003, this.maxY * 0.278, 'red'); // right
  }
}
