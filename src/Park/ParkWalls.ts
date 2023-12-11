import CanvasUtil from '../Misc/CanvasUtil.js';
import Drawable from '../Misc/Drawable.js';
import Player from '../Game/Player.js';
import Wall from '../Misc/Wall.js';

export default class ParkWalls extends Drawable {
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
      [0, 0, this.maxY * 0.062, this.maxX * 0.47, this.maxY * 0.006], // above
      [2, this.maxX * 0.47, 0, this.maxX * 0.003, this.maxY * 0.065], // left
      [0, this.maxX * 0.658, this.maxY * 0.28, this.maxY * 0.8, this.maxY * 0.006], // above
      [3, this.maxX * 0.658, 0, this.maxX * 0.003, this.maxY * 0.28], // right
      // red
      [1, this.maxX * 0, this.maxY * 0.81, this.maxX * 0.092, this.maxY * 0.006], // under
      [2, this.maxX * 0.091, this.maxY * 0.81, this.maxX * 0.003, this.maxY * 0.4], // left
      [1, this.maxX * 0.09, this.maxY * 0.91, this.maxX * 0.04, this.maxY * 0.006], // under
      [1, this.maxX * 0.124, this.maxY * 0.79, this.maxX * 0.1, this.maxY * 0.006], // under
      [3, this.maxX * 0.124, this.maxY * 0.79, this.maxX * 0.003, this.maxY * 0.4], // right
      [2, this.maxX * 0.222, this.maxY * 0.79, this.maxX * 0.003, this.maxY * 0.024], // left
      [1, this.maxX * 0.222, this.maxY * 0.81, this.maxX * 0.103, this.maxY * 0.006], // under
      [2, this.maxX * 0.325, this.maxY * 0.81, this.maxX * 0.003, this.maxY * 0.197], // left
      [1, this.maxX * 0.107, this.maxY * 0.59, this.maxX * 0.115, this.maxY * 0.006], // under
      [2, this.maxX * 0.22, this.maxY * 0.59, this.maxX * 0.003, this.maxY * 0.145], // left
      [3, this.maxX * 0.107, this.maxY * 0.59, this.maxX * 0.003, this.maxY * 0.09], // right
      [0, this.maxX * 0.107, this.maxY * 0.675, this.maxX * 0.05, this.maxY * 0.006], // above
      [3, this.maxX * 0.155, this.maxY * 0.675, this.maxX * 0.003, this.maxY * 0.06], // right
      [0, this.maxX * 0.155, this.maxY * 0.73, this.maxX * 0.068, this.maxY * 0.006], // above
      // purple
      [1, this.maxX * 0.014, this.maxY * 0.237, this.maxX * 0.05, this.maxY * 0.006], // under
      [3, this.maxX * 0.014, this.maxY * 0.237, this.maxX * 0.003, this.maxY * 0.12], // right
      [2, this.maxX * 0.064, this.maxY * 0.237, this.maxX * 0.003, this.maxY * 0.12], // left
      [0, this.maxX * 0.014, this.maxY * 0.351, this.maxX * 0.05, this.maxY * 0.006], // above
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
    // doors
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.025, this.maxY * 0.351, this.maxX * 0.03, this.maxY * 0.06, 'yellow'); // home
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.97, this.maxY * 0.415, this.maxX * 0.37, this.maxY * 0.15, 'cyan'); // school
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.492, this.maxY * 0, this.maxX * 0.055, this.maxY * 0.055, 'red'); // dungeon
    // W 1456 H 809
    // H this.maxX * 0.003
    // W this.maxY * 0.006
    // walls
    CanvasUtil.fillRectangle(canvas, 0, this.maxY * 0.062, this.maxX * 0.47, this.maxY * 0.006, 'cyan'); // above
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.47, 0, this.maxX * 0.003, this.maxY * 0.065, 'cyan'); // left
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.658, this.maxY * 0.28, this.maxY * 0.8, this.maxY * 0.006, 'cyan'); // above
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.658, 0, this.maxX * 0.003, this.maxY * 0.28, 'cyan'); // right

    CanvasUtil.fillRectangle(canvas, this.maxX * 0, this.maxY * 0.81, this.maxX * 0.092, this.maxY * 0.006, 'red'); // under
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.091, this.maxY * 0.81, this.maxX * 0.003, this.maxY * 0.4, 'red'); // left
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.09, this.maxY * 0.91, this.maxX * 0.04, this.maxY * 0.006, 'red'); // under
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.124, this.maxY * 0.79, this.maxX * 0.1, this.maxY * 0.006, 'red'); // under
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.124, this.maxY * 0.79, this.maxX * 0.003, this.maxY * 0.4, 'red'); // right
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.222, this.maxY * 0.79, this.maxX * 0.003, this.maxY * 0.024, 'red'); // left
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.222, this.maxY * 0.81, this.maxX * 0.103, this.maxY * 0.006, 'red'); // under
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.325, this.maxY * 0.81, this.maxX * 0.003, this.maxY * 0.197, 'red'); // left
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.107, this.maxY * 0.59, this.maxX * 0.115, this.maxY * 0.006, 'red'); // under
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.22, this.maxY * 0.59, this.maxX * 0.003, this.maxY * 0.145, 'red'); // left
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.107, this.maxY * 0.59, this.maxX * 0.003, this.maxY * 0.09, 'red'); // right
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.107, this.maxY * 0.675, this.maxX * 0.05, this.maxY * 0.006, 'red'); // above
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.155, this.maxY * 0.675, this.maxX * 0.003, this.maxY * 0.06, 'red'); // right
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.155, this.maxY * 0.73, this.maxX * 0.068, this.maxY * 0.006, 'red'); // above

    CanvasUtil.fillRectangle(canvas, this.maxX * 0.014, this.maxY * 0.237, this.maxX * 0.05, this.maxY * 0.006, 'purple'); // under
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.014, this.maxY * 0.237, this.maxX * 0.003, this.maxY * 0.12, 'purple'); // right
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.064, this.maxY * 0.237, this.maxX * 0.003, this.maxY * 0.12, 'purple'); // left
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.014, this.maxY * 0.351, this.maxX * 0.05, this.maxY * 0.006, 'purple'); // above
  }
}
