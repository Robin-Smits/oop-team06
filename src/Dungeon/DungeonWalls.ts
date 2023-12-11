import CanvasUtil from '../Misc/CanvasUtil.js';
import DungeonWallsDoors from '../Dungeon/DungeonBorders.js';
import Player from '../Game/Player.js';
import Wall from '../Misc/Wall.js';

export default class DungeonWalls extends DungeonWallsDoors {
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
      // horizontaly
      // cyan
      [0, this.maxX * 0.362, this.maxY * 0.11, this.maxX * 0.128, 2], // above
      [1, this.maxX * 0.362, this.maxY * 0.27, this.maxX * 0.274, 2], // under
      [1, this.maxX * 0.44, this.maxY * 0.214, this.maxX * 0.021, 2], // under
      [0, this.maxX * 0.49, this.maxY * 0.18, this.maxX * 0.021, 2], // above
      [0, this.maxX * 0.51, this.maxY * 0.04, this.maxX * 0.126, 2], // above
      [0, this.maxX * 0.585, this.maxY * 0.18, this.maxX * 0.021, 2], // above
      // pink
      [0, this.maxX * 0.635, this.maxY * 0.142, this.maxX * 0.096, 2], // above
      [0, this.maxX * 0.752, this.maxY * 0.142, this.maxX * 0.044, 2], // above
      [0, this.maxX * 0.717, this.maxY * 0.04, this.maxX * 0.05, 2], // above
      [1, this.maxX * 0.717, this.maxY * 0.22, this.maxX * 0.05, 2], // under
      [1, this.maxX * 0.635, this.maxY * 0.22, this.maxX * 0.053, 2], // under
      [0, this.maxX * 0.717, this.maxY * 0.315, this.maxX * 0.05, 2], // above
      [1, this.maxX * 0.717, this.maxY * 0.39, this.maxX * 0.05, 2], // under
      // white
      [0, this.maxX * 0.796, this.maxY * 0.41, this.maxX * 0.052, this.maxY * 0.002], // above
      [1, this.maxX * 0.765, this.maxY * 0.50, this.maxX * 0.195, this.maxY * 0.002], // under
      [0, this.maxX * 0.845, this.maxY * 0.28, this.maxX * 0.115, this.maxY * 0.002], // above
      // white
      [0, this.maxX * 0.796, this.maxY * 0.41, this.maxX * 0.052, this.maxY * 0.002], // above
      [1, this.maxX * 0.765, this.maxY * 0.50, this.maxX * 0.195, this.maxY * 0.002], // under
      [0, this.maxX * 0.845, this.maxY * 0.28, this.maxX * 0.115, this.maxY * 0.002], // above
      // orange
      [0, this.maxX * 0.409, this.maxY * 0.45, this.maxX * 0.037, this.maxY * 0.004], // above
      [0, this.maxX * 0.52, this.maxY * 0.415, this.maxX * 0.038, this.maxY * 0.004], // above
      [1, this.maxX * 0.52, this.maxY * 0.515, this.maxX * 0.135, this.maxY * 0.004], // under
      [0, this.maxX * 0.635, this.maxY * 0.415, this.maxX * 0.054, this.maxY * 0.004], // above
      [1, this.maxX * 0.7, this.maxY * 0.50, this.maxX * 0.1, this.maxY * 0.004], // under
      [0, this.maxX * 0.362, this.maxY * 0.352, this.maxX * 0.3, this.maxY * 0.004], // above
      [1, this.maxX * 0.362, this.maxY * 0.565, this.maxX * 0.29, this.maxY * 0.004], // under
      // blue
      [0, this.maxX * 0.33, this.maxY * 0.655, this.maxX * 0.325, this.maxY * 0.004], // above
      [1, this.maxX * 0.33, this.maxY * 0.935, this.maxX * 0.42, this.maxY * 0.004], // under
      [0, this.maxX * 0.44, this.maxY * 0.86, this.maxX * 0.02, this.maxY * 0.004], // above
      [0, this.maxX * 0.506, this.maxY * 0.86, this.maxX * 0.082, this.maxY * 0.004], // above
      [1, this.maxX * 0.506, this.maxY * 0.735, this.maxX * 0.082, this.maxY * 0.004], // under
      [0, this.maxX * 0.7, this.maxY * 0.655, this.maxX * 0.05, this.maxY * 0.004], // above
      // purple
      [0, this.maxX * 0.635, this.maxY * 0.845, this.maxX * 0.07, this.maxY * 0.002], // above
      [1, this.maxX * 0.635, this.maxY * 0.715, this.maxX * 0.07, this.maxY * 0.002], // under
      // yellow
      [1, this.maxX * 0.748, this.maxY * 0.78, this.maxX * 0.035, this.maxY * 0.002], // under
      [0, this.maxX * 0.748, this.maxY * 0.722, this.maxX * 0.067, this.maxY * 0.002], // above
      [1, this.maxX * 0.782, this.maxY * 0.965, this.maxX * 0.16, this.maxY * 0.002], // under
      [0, this.maxX * 0.813, this.maxY * 0.88, this.maxX * 0.10, this.maxY * 0.002], // above
      [1, this.maxX * 0.83, this.maxY * 0.77, this.maxX * 0.082, this.maxY * 0.002], // under
      [0, this.maxX * 0.83, this.maxY * 0.643, this.maxX * 0.115, this.maxY * 0.002], // above
      // vertical
      // cyan
      [2, this.maxX * 0.362, this.maxY * 0.11, 2, this.maxY * 0.465], // left
      [3, this.maxX * 0.49, this.maxY * 0.11, 2, this.maxY * 0.07], // right
      [3, this.maxX * 0.44, this.maxY * 0.215, 2, this.maxY * 0.055], // right
      [2, this.maxX * 0.46, this.maxY * 0.215, 2, this.maxY * 0.055], // left
      [2, this.maxX * 0.51, this.maxY * 0.04, 2, this.maxY * 0.14], // left
      [3, this.maxX * 0.585, this.maxY * 0.04, 2, this.maxY * 0.14], // right
      [2, this.maxX * 0.605, this.maxY * 0.04, 2, this.maxY * 0.14], // left
      [3, this.maxX * 0.635, this.maxY * 0.04, 2, this.maxY * 0.103], // right
      [3, this.maxX * 0.635, this.maxY * 0.22, 2, this.maxY * 0.05], // right
      // blue
      [2, this.maxX * 0.33, this.maxY * 0.655, this.maxX * 0.0015, this.maxY * 0.28], // left
      [3, this.maxX * 0.44, this.maxY * 0.655, this.maxX * 0.0015, this.maxY * 0.21], // right
      [2, this.maxX * 0.46, this.maxY * 0.655, this.maxX * 0.0015, this.maxY * 0.21], // left
      [3, this.maxX * 0.57, this.maxY * 0.655, this.maxX * 0.0015, this.maxY * 0.1], // right
      [2, this.maxX * 0.587, this.maxY * 0.655, this.maxX * 0.0015, this.maxY * 0.21], // left
      [3, this.maxX * 0.506, this.maxY * 0.745, this.maxX * 0.0015, this.maxY * 0.115], // right
      [3, this.maxX * 0.748, this.maxY * 0.655, this.maxX * 0.0015, this.maxY * 0.07], // right
      [3, this.maxX * 0.748, this.maxY * 0.8, this.maxX * 0.0015, this.maxY * 0.135], // right
      // white
      [2, this.maxX * 0.848, this.maxY * 0.28, this.maxX * 0.0015, this.maxY * 0.13], // right
      [3, this.maxX * 0.957, this.maxY * 0.28, this.maxX * 0.0015, this.maxY * 0.225], // left
      // pink
      [3, this.maxX * 0.717, this.maxY * 0.39, 2, this.maxY * 0.11], // right
      [2, this.maxX * 0.767, this.maxY * 0.39, 2, this.maxY * 0.11], // left
      [3, this.maxX * 0.717, this.maxY * 0.22, 2, this.maxY * 0.095], // right
      [2, this.maxX * 0.767, this.maxY * 0.22, 2, this.maxY * 0.095], // left
      [2, this.maxX * 0.688, this.maxY * 0.22, 2, this.maxY * 0.196], // left
      [3, this.maxX * 0.795, this.maxY * 0.142, 2, this.maxY * 0.27], // right
      [3, this.maxX * 0.717, 0, 2, this.maxY * 0.144], // right
      [2, this.maxX * 0.767, 0, 2, this.maxY * 0.144], // left
      // orange
      [3, this.maxX * 0.409, this.maxY * 0.33, this.maxX * 0.0015, this.maxY * 0.12], // right
      [3, this.maxX * 0.52, this.maxY * 0.33, this.maxX * 0.0015, this.maxY * 0.09], // right
      [3, this.maxX * 0.522, this.maxY * 0.52, this.maxX * 0.0015, this.maxY * 0.045], // right
      [3, this.maxX * 0.635, this.maxY * 0.33, this.maxX * 0.0015, this.maxY * 0.09], // right
      [2, this.maxX * 0.446, this.maxY * 0.33, this.maxX * 0.0015, this.maxY * 0.12], // left
      [2, this.maxX * 0.558, this.maxY * 0.33, this.maxX * 0.0015, this.maxY * 0.09], // left
      [2, this.maxX * 0.656, this.maxY * 0.52, this.maxX * 0.0015, this.maxY * 0.14], // left
      [3, this.maxX * 0.7, this.maxY * 0.51, this.maxX * 0.0015, this.maxY * 0.15], // right
      // purple
      [3, this.maxX * 0.635, this.maxY * 0.715, this.maxX * 0.0015, this.maxY * 0.13], // right
      [2, this.maxX * 0.704, this.maxY * 0.715, this.maxX * 0.0015, this.maxY * 0.13], // left
      // yellow
      [2, this.maxX * 0.783, this.maxY * 0.78, this.maxX * 0.0015, this.maxY * 0.19], // left
      [3, this.maxX * 0.812, this.maxY * 0.722, this.maxX * 0.0015, this.maxY * 0.16], // right
      [2, this.maxX * 0.833, this.maxY * 0.642, this.maxX * 0.0015, this.maxY * 0.13], // left
      [3, this.maxX * 0.94, this.maxY * 0.655, this.maxX * 0.0015, this.maxY * 0.31], // right
      [2, this.maxX * 0.912, this.maxY * 0.77, this.maxX * 0.0015, this.maxX * 0.053], // left
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
    console.log(this.wallsPositions);
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
    // door
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.732, this.maxY * 0.034, this.maxX / 50, this.maxY / 25, 'yellow');
    // tunnels
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.375, this.maxY * 0.35, this.maxX / 50, this.maxY / 25, 'blue');
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.375, this.maxY * 0.23, this.maxX / 50, this.maxY / 25, 'blue');
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.893, this.maxY * 0.64, this.maxX / 50, this.maxY / 20, 'green');
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.893, this.maxY * 0.28, this.maxX / 50, this.maxY / 25, 'green');
    // walls
    // horizontal
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.362, this.maxY * 0.11, this.maxX * 0.128, 2, 'cyan'); // above
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.362, this.maxY * 0.27, this.maxX * 0.274, 2, 'cyan'); // under
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.44, this.maxY * 0.214, this.maxX * 0.021, 2, 'cyan'); // under
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.49, this.maxY * 0.18, this.maxX * 0.021, 2, 'cyan'); // above
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.51, this.maxY * 0.04, this.maxX * 0.126, 2, 'cyan'); // under
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.585, this.maxY * 0.18, this.maxX * 0.021, 2, 'cyan'); // above

    CanvasUtil.fillRectangle(canvas, this.maxX * 0.635, this.maxY * 0.142, this.maxX * 0.096, 2, 'pink'); // above
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.752, this.maxY * 0.142, this.maxX * 0.044, 2, 'pink'); // above
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.717, this.maxY * 0.04, this.maxX * 0.05, 2, 'pink'); // above
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.717, this.maxY * 0.22, this.maxX * 0.05, 2, 'pink'); // under
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.635, this.maxY * 0.22, this.maxX * 0.053, 2, 'pink'); // under
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.717, this.maxY * 0.315, this.maxX * 0.05, 2, 'pink'); // above
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.717, this.maxY * 0.39, this.maxX * 0.05, 2, 'pink'); // under

    CanvasUtil.fillRectangle(canvas, this.maxX * 0.796, this.maxY * 0.41, this.maxX * 0.052, this.maxY * 0.002, 'white'); // above
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.765, this.maxY * 0.50, this.maxX * 0.195, this.maxY * 0.002, 'white'); // under
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.845, this.maxY * 0.28, this.maxX * 0.115, this.maxY * 0.002, 'white'); // above

    CanvasUtil.fillRectangle(canvas, this.maxX * 0.409, this.maxY * 0.45, this.maxX * 0.037, this.maxY * 0.004, 'orange'); // above
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.52, this.maxY * 0.415, this.maxX * 0.038, this.maxY * 0.004, 'orange'); // above
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.52, this.maxY * 0.515, this.maxX * 0.135, this.maxY * 0.004, 'orange'); // under
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.635, this.maxY * 0.415, this.maxX * 0.054, this.maxY * 0.004, 'orange'); // above
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.7, this.maxY * 0.50, this.maxX * 0.1, this.maxY * 0.004, 'orange'); // under
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.362, this.maxY * 0.352, this.maxX * 0.3, this.maxY * 0.004, 'orange'); // above
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.362, this.maxY * 0.565, this.maxX * 0.29, this.maxY * 0.004, 'orange'); // under

    CanvasUtil.fillRectangle(canvas, this.maxX * 0.33, this.maxY * 0.655, this.maxX * 0.325, this.maxY * 0.004, 'blue'); // above
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.33, this.maxY * 0.935, this.maxX * 0.42, this.maxY * 0.004, 'blue'); // under
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.44, this.maxY * 0.86, this.maxX * 0.02, this.maxY * 0.004, 'blue'); // above
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.506, this.maxY * 0.86, this.maxX * 0.082, this.maxY * 0.004, 'blue'); // above
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.506, this.maxY * 0.735, this.maxX * 0.082, this.maxY * 0.004, 'blue'); // under
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.7, this.maxY * 0.655, this.maxX * 0.05, this.maxY * 0.004, 'blue'); // above

    CanvasUtil.fillRectangle(canvas, this.maxX * 0.635, this.maxY * 0.845, this.maxX * 0.07, this.maxY * 0.002, 'purple'); // above
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.635, this.maxY * 0.715, this.maxX * 0.07, this.maxY * 0.002, 'purple'); // under

    CanvasUtil.fillRectangle(canvas, this.maxX * 0.748, this.maxY * 0.78, this.maxX * 0.035, this.maxY * 0.002, 'yellow'); // under
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.748, this.maxY * 0.722, this.maxX * 0.067, this.maxY * 0.002, 'yellow'); // above
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.782, this.maxY * 0.965, this.maxX * 0.16, this.maxY * 0.002, 'yellow'); // under
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.813, this.maxY * 0.88, this.maxX * 0.10, this.maxY * 0.002, 'yellow'); // above
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.83, this.maxY * 0.77, this.maxX * 0.082, this.maxY * 0.002, 'yellow'); // under
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.83, this.maxY * 0.643, this.maxX * 0.115, this.maxY * 0.002, 'yellow'); // above

    // vertical
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.362, this.maxY * 0.11, 2, this.maxY * 0.465, 'cyan'); // left
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.49, this.maxY * 0.11, 2, this.maxY * 0.07, 'cyan');// right
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.44, this.maxY * 0.215, 2, this.maxY * 0.055, 'cyan'); // right
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.46, this.maxY * 0.215, 2, this.maxY * 0.055, 'cyan'); // left
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.51, this.maxY * 0.04, 2, this.maxY * 0.14, 'cyan'); // left
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.585, this.maxY * 0.04, 2, this.maxY * 0.14, 'cyan'); // right
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.605, this.maxY * 0.04, 2, this.maxY * 0.14, 'cyan'); // left
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.635, this.maxY * 0.04, 2, this.maxY * 0.103, 'cyan'); // right
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.635, this.maxY * 0.22, 2, this.maxY * 0.05, 'cyan'); // right

    CanvasUtil.fillRectangle(canvas, this.maxX * 0.33, this.maxY * 0.655, this.maxX * 0.0015, this.maxY * 0.28, 'blue'); // left
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.44, this.maxY * 0.655, this.maxX * 0.0015, this.maxY * 0.21, 'blue'); // right
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.46, this.maxY * 0.655, this.maxX * 0.0015, this.maxY * 0.21, 'blue'); // left
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.57, this.maxY * 0.655, this.maxX * 0.0015, this.maxY * 0.1, 'blue'); // right
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.587, this.maxY * 0.655, this.maxX * 0.0015, this.maxY * 0.21, 'blue'); // left
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.506, this.maxY * 0.745, this.maxX * 0.0015, this.maxY * 0.115, 'blue'); // right
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.748, this.maxY * 0.655, this.maxX * 0.0015, this.maxY * 0.07, 'blue'); // right
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.748, this.maxY * 0.8, this.maxX * 0.0015, this.maxY * 0.135, 'blue'); // right

    CanvasUtil.fillRectangle(canvas, this.maxX * 0.848, this.maxY * 0.28, this.maxX * 0.0015, this.maxY * 0.13, 'white'); // right
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.957, this.maxY * 0.28, this.maxX * 0.0015, this.maxY * 0.225, 'white'); // left

    CanvasUtil.fillRectangle(canvas, this.maxX * 0.717, this.maxY * 0.39, 2, this.maxY * 0.11, 'pink'); // right
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.767, this.maxY * 0.39, 2, this.maxY * 0.11, 'pink'); // left
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.717, this.maxY * 0.22, 2, this.maxY * 0.095, 'pink'); // right
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.767, this.maxY * 0.22, 2, this.maxY * 0.095, 'pink'); // left
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.688, this.maxY * 0.22, 2, this.maxY * 0.196, 'pink'); // left
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.795, this.maxY * 0.142, 2, this.maxY * 0.27, 'pink'); // right
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.717, 0, 2, this.maxY * 0.144, 'pink'); // right
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.767, 0, 2, this.maxY * 0.144, 'pink'); // left

    CanvasUtil.fillRectangle(canvas, this.maxX * 0.409, this.maxY * 0.33, this.maxX * 0.0015, this.maxY * 0.12, 'orange'); // right
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.52, this.maxY * 0.33, this.maxX * 0.0015, this.maxY * 0.09, 'orange'); // right
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.522, this.maxY * 0.52, this.maxX * 0.0015, this.maxY * 0.045, 'orange'); // right
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.635, this.maxY * 0.33, this.maxX * 0.0015, this.maxY * 0.09, 'orange'); // right
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.446, this.maxY * 0.33, this.maxX * 0.0015, this.maxY * 0.12, 'orange'); // left
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.558, this.maxY * 0.33, this.maxX * 0.0015, this.maxY * 0.09, 'orange'); // left

    CanvasUtil.fillRectangle(canvas, this.maxX * 0.656, this.maxY * 0.52, this.maxX * 0.0015, this.maxY * 0.14, 'orange'); // left
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.7, this.maxY * 0.51, this.maxX * 0.0015, this.maxY * 0.15, 'orange'); // right

    CanvasUtil.fillRectangle(canvas, this.maxX * 0.635, this.maxY * 0.715, this.maxX * 0.0015, this.maxY * 0.13, 'purple'); // right
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.704, this.maxY * 0.715, this.maxX * 0.0015, this.maxY * 0.13, 'purple'); // left

    CanvasUtil.fillRectangle(canvas, this.maxX * 0.783, this.maxY * 0.78, this.maxX * 0.0015, this.maxY * 0.19, 'yellow'); // left
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.812, this.maxY * 0.722, this.maxX * 0.0015, this.maxY * 0.16, 'yellow'); // right
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.833, this.maxY * 0.642, this.maxX * 0.0015, this.maxY * 0.13, 'yellow'); // left
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.94, this.maxY * 0.655, this.maxX * 0.0015, this.maxY * 0.31, 'yellow'); // right
    CanvasUtil.fillRectangle(canvas, this.maxX * 0.912, this.maxY * 0.77, this.maxX * 0.0015, this.maxX * 0.053, 'yellow'); // left
  }
}
