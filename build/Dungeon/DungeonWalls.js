import CanvasUtil from '../Misc/CanvasUtil.js';
import DungeonWallsDoors from '../Dungeon/DungeonBorders.js';
import Wall from '../Misc/Wall.js';
export default class DungeonWalls extends DungeonWallsDoors {
    wallsPositions;
    walls;
    constructor(maxX, maxY) {
        super();
        this.maxX = maxX;
        this.maxY = maxY;
        this.wallsPositions = [
            [0, this.maxX * 0.362, this.maxY * 0.11, this.maxX * 0.128, 2],
            [1, this.maxX * 0.362, this.maxY * 0.27, this.maxX * 0.274, 2],
            [1, this.maxX * 0.44, this.maxY * 0.214, this.maxX * 0.021, 2],
            [0, this.maxX * 0.49, this.maxY * 0.18, this.maxX * 0.021, 2],
            [0, this.maxX * 0.51, this.maxY * 0.04, this.maxX * 0.126, 2],
            [0, this.maxX * 0.585, this.maxY * 0.18, this.maxX * 0.021, 2],
            [0, this.maxX * 0.635, this.maxY * 0.142, this.maxX * 0.096, 2],
            [0, this.maxX * 0.752, this.maxY * 0.142, this.maxX * 0.044, 2],
            [0, this.maxX * 0.717, this.maxY * 0.04, this.maxX * 0.05, 2],
            [1, this.maxX * 0.717, this.maxY * 0.22, this.maxX * 0.05, 2],
            [1, this.maxX * 0.635, this.maxY * 0.22, this.maxX * 0.053, 2],
            [0, this.maxX * 0.717, this.maxY * 0.315, this.maxX * 0.05, 2],
            [1, this.maxX * 0.717, this.maxY * 0.39, this.maxX * 0.05, 2],
            [0, this.maxX * 0.796, this.maxY * 0.41, this.maxX * 0.052, this.maxY * 0.002],
            [1, this.maxX * 0.765, this.maxY * 0.50, this.maxX * 0.195, this.maxY * 0.002],
            [0, this.maxX * 0.845, this.maxY * 0.28, this.maxX * 0.115, this.maxY * 0.002],
            [0, this.maxX * 0.796, this.maxY * 0.41, this.maxX * 0.052, this.maxY * 0.002],
            [1, this.maxX * 0.765, this.maxY * 0.50, this.maxX * 0.195, this.maxY * 0.002],
            [0, this.maxX * 0.845, this.maxY * 0.28, this.maxX * 0.115, this.maxY * 0.002],
            [0, this.maxX * 0.409, this.maxY * 0.45, this.maxX * 0.037, this.maxY * 0.004],
            [0, this.maxX * 0.52, this.maxY * 0.415, this.maxX * 0.038, this.maxY * 0.004],
            [1, this.maxX * 0.52, this.maxY * 0.515, this.maxX * 0.135, this.maxY * 0.004],
            [0, this.maxX * 0.635, this.maxY * 0.415, this.maxX * 0.054, this.maxY * 0.004],
            [1, this.maxX * 0.7, this.maxY * 0.50, this.maxX * 0.1, this.maxY * 0.004],
            [0, this.maxX * 0.362, this.maxY * 0.352, this.maxX * 0.3, this.maxY * 0.004],
            [1, this.maxX * 0.362, this.maxY * 0.565, this.maxX * 0.29, this.maxY * 0.004],
            [0, this.maxX * 0.33, this.maxY * 0.655, this.maxX * 0.325, this.maxY * 0.004],
            [1, this.maxX * 0.33, this.maxY * 0.935, this.maxX * 0.42, this.maxY * 0.004],
            [0, this.maxX * 0.44, this.maxY * 0.86, this.maxX * 0.02, this.maxY * 0.004],
            [0, this.maxX * 0.506, this.maxY * 0.86, this.maxX * 0.082, this.maxY * 0.004],
            [1, this.maxX * 0.506, this.maxY * 0.735, this.maxX * 0.082, this.maxY * 0.004],
            [0, this.maxX * 0.7, this.maxY * 0.655, this.maxX * 0.05, this.maxY * 0.004],
            [0, this.maxX * 0.635, this.maxY * 0.845, this.maxX * 0.07, this.maxY * 0.002],
            [1, this.maxX * 0.635, this.maxY * 0.715, this.maxX * 0.07, this.maxY * 0.002],
            [1, this.maxX * 0.748, this.maxY * 0.78, this.maxX * 0.035, this.maxY * 0.002],
            [0, this.maxX * 0.748, this.maxY * 0.722, this.maxX * 0.067, this.maxY * 0.002],
            [1, this.maxX * 0.782, this.maxY * 0.965, this.maxX * 0.16, this.maxY * 0.002],
            [0, this.maxX * 0.813, this.maxY * 0.88, this.maxX * 0.10, this.maxY * 0.002],
            [1, this.maxX * 0.83, this.maxY * 0.77, this.maxX * 0.082, this.maxY * 0.002],
            [0, this.maxX * 0.83, this.maxY * 0.643, this.maxX * 0.115, this.maxY * 0.002],
            [2, this.maxX * 0.362, this.maxY * 0.11, 2, this.maxY * 0.465],
            [3, this.maxX * 0.49, this.maxY * 0.11, 2, this.maxY * 0.07],
            [3, this.maxX * 0.44, this.maxY * 0.215, 2, this.maxY * 0.055],
            [2, this.maxX * 0.46, this.maxY * 0.215, 2, this.maxY * 0.055],
            [2, this.maxX * 0.51, this.maxY * 0.04, 2, this.maxY * 0.14],
            [3, this.maxX * 0.585, this.maxY * 0.04, 2, this.maxY * 0.14],
            [2, this.maxX * 0.605, this.maxY * 0.04, 2, this.maxY * 0.14],
            [3, this.maxX * 0.635, this.maxY * 0.04, 2, this.maxY * 0.103],
            [3, this.maxX * 0.635, this.maxY * 0.22, 2, this.maxY * 0.05],
            [2, this.maxX * 0.33, this.maxY * 0.655, this.maxX * 0.0015, this.maxY * 0.28],
            [3, this.maxX * 0.44, this.maxY * 0.655, this.maxX * 0.0015, this.maxY * 0.21],
            [2, this.maxX * 0.46, this.maxY * 0.655, this.maxX * 0.0015, this.maxY * 0.21],
            [3, this.maxX * 0.57, this.maxY * 0.655, this.maxX * 0.0015, this.maxY * 0.1],
            [2, this.maxX * 0.587, this.maxY * 0.655, this.maxX * 0.0015, this.maxY * 0.21],
            [3, this.maxX * 0.506, this.maxY * 0.745, this.maxX * 0.0015, this.maxY * 0.115],
            [3, this.maxX * 0.748, this.maxY * 0.655, this.maxX * 0.0015, this.maxY * 0.07],
            [3, this.maxX * 0.748, this.maxY * 0.8, this.maxX * 0.0015, this.maxY * 0.135],
            [2, this.maxX * 0.848, this.maxY * 0.28, this.maxX * 0.0015, this.maxY * 0.13],
            [3, this.maxX * 0.957, this.maxY * 0.28, this.maxX * 0.0015, this.maxY * 0.225],
            [3, this.maxX * 0.717, this.maxY * 0.39, 2, this.maxY * 0.11],
            [2, this.maxX * 0.767, this.maxY * 0.39, 2, this.maxY * 0.11],
            [3, this.maxX * 0.717, this.maxY * 0.22, 2, this.maxY * 0.095],
            [2, this.maxX * 0.767, this.maxY * 0.22, 2, this.maxY * 0.095],
            [2, this.maxX * 0.688, this.maxY * 0.22, 2, this.maxY * 0.196],
            [3, this.maxX * 0.795, this.maxY * 0.142, 2, this.maxY * 0.27],
            [3, this.maxX * 0.717, 0, 2, this.maxY * 0.144],
            [2, this.maxX * 0.767, 0, 2, this.maxY * 0.144],
            [3, this.maxX * 0.409, this.maxY * 0.33, this.maxX * 0.0015, this.maxY * 0.12],
            [3, this.maxX * 0.52, this.maxY * 0.33, this.maxX * 0.0015, this.maxY * 0.09],
            [3, this.maxX * 0.522, this.maxY * 0.52, this.maxX * 0.0015, this.maxY * 0.045],
            [3, this.maxX * 0.635, this.maxY * 0.33, this.maxX * 0.0015, this.maxY * 0.09],
            [2, this.maxX * 0.446, this.maxY * 0.33, this.maxX * 0.0015, this.maxY * 0.12],
            [2, this.maxX * 0.558, this.maxY * 0.33, this.maxX * 0.0015, this.maxY * 0.09],
            [2, this.maxX * 0.656, this.maxY * 0.52, this.maxX * 0.0015, this.maxY * 0.14],
            [3, this.maxX * 0.7, this.maxY * 0.51, this.maxX * 0.0015, this.maxY * 0.15],
            [3, this.maxX * 0.635, this.maxY * 0.715, this.maxX * 0.0015, this.maxY * 0.13],
            [2, this.maxX * 0.704, this.maxY * 0.715, this.maxX * 0.0015, this.maxY * 0.13],
            [2, this.maxX * 0.783, this.maxY * 0.78, this.maxX * 0.0015, this.maxY * 0.19],
            [3, this.maxX * 0.812, this.maxY * 0.722, this.maxX * 0.0015, this.maxY * 0.16],
            [2, this.maxX * 0.833, this.maxY * 0.642, this.maxX * 0.0015, this.maxY * 0.13],
            [3, this.maxX * 0.94, this.maxY * 0.655, this.maxX * 0.0015, this.maxY * 0.31],
            [2, this.maxX * 0.912, this.maxY * 0.77, this.maxX * 0.0015, this.maxX * 0.053],
        ];
        this.walls = [];
        for (let index = 0; index < this.wallsPositions.length; index++) {
            this.walls.push(new Wall(maxX, maxY, this.wallsPositions[index][0], this.wallsPositions[index][1], this.wallsPositions[index][2], this.wallsPositions[index][3], this.wallsPositions[index][4]));
        }
        console.log(this.wallsPositions);
    }
    update(player) {
        this.walls.forEach((wall) => {
            wall.updateWall(player);
        });
    }
    render(canvas) {
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.732, this.maxY * 0.034, this.maxX / 50, this.maxY / 25, 'yellow');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.375, this.maxY * 0.35, this.maxX / 50, this.maxY / 25, 'blue');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.375, this.maxY * 0.23, this.maxX / 50, this.maxY / 25, 'blue');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.893, this.maxY * 0.64, this.maxX / 50, this.maxY / 20, 'green');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.893, this.maxY * 0.28, this.maxX / 50, this.maxY / 25, 'green');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.362, this.maxY * 0.11, this.maxX * 0.128, 2, 'cyan');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.362, this.maxY * 0.27, this.maxX * 0.274, 2, 'cyan');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.44, this.maxY * 0.214, this.maxX * 0.021, 2, 'cyan');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.49, this.maxY * 0.18, this.maxX * 0.021, 2, 'cyan');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.51, this.maxY * 0.04, this.maxX * 0.126, 2, 'cyan');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.585, this.maxY * 0.18, this.maxX * 0.021, 2, 'cyan');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.635, this.maxY * 0.142, this.maxX * 0.096, 2, 'pink');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.752, this.maxY * 0.142, this.maxX * 0.044, 2, 'pink');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.717, this.maxY * 0.04, this.maxX * 0.05, 2, 'pink');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.717, this.maxY * 0.22, this.maxX * 0.05, 2, 'pink');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.635, this.maxY * 0.22, this.maxX * 0.053, 2, 'pink');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.717, this.maxY * 0.315, this.maxX * 0.05, 2, 'pink');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.717, this.maxY * 0.39, this.maxX * 0.05, 2, 'pink');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.796, this.maxY * 0.41, this.maxX * 0.052, this.maxY * 0.002, 'white');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.765, this.maxY * 0.50, this.maxX * 0.195, this.maxY * 0.002, 'white');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.845, this.maxY * 0.28, this.maxX * 0.115, this.maxY * 0.002, 'white');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.409, this.maxY * 0.45, this.maxX * 0.037, this.maxY * 0.004, 'orange');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.52, this.maxY * 0.415, this.maxX * 0.038, this.maxY * 0.004, 'orange');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.52, this.maxY * 0.515, this.maxX * 0.135, this.maxY * 0.004, 'orange');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.635, this.maxY * 0.415, this.maxX * 0.054, this.maxY * 0.004, 'orange');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.7, this.maxY * 0.50, this.maxX * 0.1, this.maxY * 0.004, 'orange');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.362, this.maxY * 0.352, this.maxX * 0.3, this.maxY * 0.004, 'orange');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.362, this.maxY * 0.565, this.maxX * 0.29, this.maxY * 0.004, 'orange');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.33, this.maxY * 0.655, this.maxX * 0.325, this.maxY * 0.004, 'blue');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.33, this.maxY * 0.935, this.maxX * 0.42, this.maxY * 0.004, 'blue');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.44, this.maxY * 0.86, this.maxX * 0.02, this.maxY * 0.004, 'blue');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.506, this.maxY * 0.86, this.maxX * 0.082, this.maxY * 0.004, 'blue');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.506, this.maxY * 0.735, this.maxX * 0.082, this.maxY * 0.004, 'blue');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.7, this.maxY * 0.655, this.maxX * 0.05, this.maxY * 0.004, 'blue');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.635, this.maxY * 0.845, this.maxX * 0.07, this.maxY * 0.002, 'purple');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.635, this.maxY * 0.715, this.maxX * 0.07, this.maxY * 0.002, 'purple');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.748, this.maxY * 0.78, this.maxX * 0.035, this.maxY * 0.002, 'yellow');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.748, this.maxY * 0.722, this.maxX * 0.067, this.maxY * 0.002, 'yellow');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.782, this.maxY * 0.965, this.maxX * 0.16, this.maxY * 0.002, 'yellow');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.813, this.maxY * 0.88, this.maxX * 0.10, this.maxY * 0.002, 'yellow');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.83, this.maxY * 0.77, this.maxX * 0.082, this.maxY * 0.002, 'yellow');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.83, this.maxY * 0.643, this.maxX * 0.115, this.maxY * 0.002, 'yellow');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.362, this.maxY * 0.11, 2, this.maxY * 0.465, 'cyan');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.49, this.maxY * 0.11, 2, this.maxY * 0.07, 'cyan');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.44, this.maxY * 0.215, 2, this.maxY * 0.055, 'cyan');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.46, this.maxY * 0.215, 2, this.maxY * 0.055, 'cyan');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.51, this.maxY * 0.04, 2, this.maxY * 0.14, 'cyan');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.585, this.maxY * 0.04, 2, this.maxY * 0.14, 'cyan');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.605, this.maxY * 0.04, 2, this.maxY * 0.14, 'cyan');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.635, this.maxY * 0.04, 2, this.maxY * 0.103, 'cyan');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.635, this.maxY * 0.22, 2, this.maxY * 0.05, 'cyan');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.33, this.maxY * 0.655, this.maxX * 0.0015, this.maxY * 0.28, 'blue');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.44, this.maxY * 0.655, this.maxX * 0.0015, this.maxY * 0.21, 'blue');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.46, this.maxY * 0.655, this.maxX * 0.0015, this.maxY * 0.21, 'blue');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.57, this.maxY * 0.655, this.maxX * 0.0015, this.maxY * 0.1, 'blue');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.587, this.maxY * 0.655, this.maxX * 0.0015, this.maxY * 0.21, 'blue');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.506, this.maxY * 0.745, this.maxX * 0.0015, this.maxY * 0.115, 'blue');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.748, this.maxY * 0.655, this.maxX * 0.0015, this.maxY * 0.07, 'blue');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.748, this.maxY * 0.8, this.maxX * 0.0015, this.maxY * 0.135, 'blue');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.848, this.maxY * 0.28, this.maxX * 0.0015, this.maxY * 0.13, 'white');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.957, this.maxY * 0.28, this.maxX * 0.0015, this.maxY * 0.225, 'white');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.717, this.maxY * 0.39, 2, this.maxY * 0.11, 'pink');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.767, this.maxY * 0.39, 2, this.maxY * 0.11, 'pink');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.717, this.maxY * 0.22, 2, this.maxY * 0.095, 'pink');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.767, this.maxY * 0.22, 2, this.maxY * 0.095, 'pink');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.688, this.maxY * 0.22, 2, this.maxY * 0.196, 'pink');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.795, this.maxY * 0.142, 2, this.maxY * 0.27, 'pink');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.717, 0, 2, this.maxY * 0.144, 'pink');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.767, 0, 2, this.maxY * 0.144, 'pink');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.409, this.maxY * 0.33, this.maxX * 0.0015, this.maxY * 0.12, 'orange');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.52, this.maxY * 0.33, this.maxX * 0.0015, this.maxY * 0.09, 'orange');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.522, this.maxY * 0.52, this.maxX * 0.0015, this.maxY * 0.045, 'orange');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.635, this.maxY * 0.33, this.maxX * 0.0015, this.maxY * 0.09, 'orange');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.446, this.maxY * 0.33, this.maxX * 0.0015, this.maxY * 0.12, 'orange');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.558, this.maxY * 0.33, this.maxX * 0.0015, this.maxY * 0.09, 'orange');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.656, this.maxY * 0.52, this.maxX * 0.0015, this.maxY * 0.14, 'orange');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.7, this.maxY * 0.51, this.maxX * 0.0015, this.maxY * 0.15, 'orange');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.635, this.maxY * 0.715, this.maxX * 0.0015, this.maxY * 0.13, 'purple');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.704, this.maxY * 0.715, this.maxX * 0.0015, this.maxY * 0.13, 'purple');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.783, this.maxY * 0.78, this.maxX * 0.0015, this.maxY * 0.19, 'yellow');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.812, this.maxY * 0.722, this.maxX * 0.0015, this.maxY * 0.16, 'yellow');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.833, this.maxY * 0.642, this.maxX * 0.0015, this.maxY * 0.13, 'yellow');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.94, this.maxY * 0.655, this.maxX * 0.0015, this.maxY * 0.31, 'yellow');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.912, this.maxY * 0.77, this.maxX * 0.0015, this.maxX * 0.053, 'yellow');
    }
}
//# sourceMappingURL=DungeonWalls.js.map