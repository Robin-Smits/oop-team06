import CanvasUtil from '../Misc/CanvasUtil.js';
import Drawable from '../Misc/Drawable.js';
import Wall from '../Misc/Wall.js';
export default class ParkWalls extends Drawable {
    wallsPositions;
    walls;
    constructor(maxX, maxY) {
        super();
        this.maxX = maxX;
        this.maxY = maxY;
        this.wallsPositions = [
            [0, 0, this.maxY * 0.062, this.maxX * 0.47, this.maxY * 0.006],
            [2, this.maxX * 0.47, 0, this.maxX * 0.003, this.maxY * 0.065],
            [0, this.maxX * 0.658, this.maxY * 0.28, this.maxY * 0.8, this.maxY * 0.006],
            [3, this.maxX * 0.658, 0, this.maxX * 0.003, this.maxY * 0.28],
            [1, this.maxX * 0, this.maxY * 0.81, this.maxX * 0.092, this.maxY * 0.006],
            [2, this.maxX * 0.091, this.maxY * 0.81, this.maxX * 0.003, this.maxY * 0.4],
            [1, this.maxX * 0.09, this.maxY * 0.91, this.maxX * 0.04, this.maxY * 0.006],
            [1, this.maxX * 0.124, this.maxY * 0.79, this.maxX * 0.1, this.maxY * 0.006],
            [3, this.maxX * 0.124, this.maxY * 0.79, this.maxX * 0.003, this.maxY * 0.4],
            [2, this.maxX * 0.222, this.maxY * 0.79, this.maxX * 0.003, this.maxY * 0.024],
            [1, this.maxX * 0.222, this.maxY * 0.81, this.maxX * 0.103, this.maxY * 0.006],
            [2, this.maxX * 0.325, this.maxY * 0.81, this.maxX * 0.003, this.maxY * 0.197],
            [1, this.maxX * 0.107, this.maxY * 0.59, this.maxX * 0.115, this.maxY * 0.006],
            [2, this.maxX * 0.22, this.maxY * 0.59, this.maxX * 0.003, this.maxY * 0.145],
            [3, this.maxX * 0.107, this.maxY * 0.59, this.maxX * 0.003, this.maxY * 0.09],
            [0, this.maxX * 0.107, this.maxY * 0.675, this.maxX * 0.05, this.maxY * 0.006],
            [3, this.maxX * 0.155, this.maxY * 0.675, this.maxX * 0.003, this.maxY * 0.06],
            [0, this.maxX * 0.155, this.maxY * 0.73, this.maxX * 0.068, this.maxY * 0.006],
            [1, this.maxX * 0.014, this.maxY * 0.237, this.maxX * 0.05, this.maxY * 0.006],
            [3, this.maxX * 0.014, this.maxY * 0.237, this.maxX * 0.003, this.maxY * 0.12],
            [2, this.maxX * 0.064, this.maxY * 0.237, this.maxX * 0.003, this.maxY * 0.12],
            [0, this.maxX * 0.014, this.maxY * 0.351, this.maxX * 0.05, this.maxY * 0.006],
        ];
        this.walls = [];
        for (let index = 0; index < this.wallsPositions.length; index++) {
            this.walls.push(new Wall(maxX, maxY, this.wallsPositions[index][0], this.wallsPositions[index][1], this.wallsPositions[index][2], this.wallsPositions[index][3], this.wallsPositions[index][4]));
        }
    }
    update(player) {
        this.walls.forEach((wall) => {
            wall.updateWall(player);
        });
    }
    render(canvas) {
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.025, this.maxY * 0.351, this.maxX * 0.03, this.maxY * 0.06, 'yellow');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.97, this.maxY * 0.415, this.maxX * 0.37, this.maxY * 0.15, 'cyan');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.492, this.maxY * 0, this.maxX * 0.055, this.maxY * 0.055, 'red');
        CanvasUtil.fillRectangle(canvas, 0, this.maxY * 0.062, this.maxX * 0.47, this.maxY * 0.006, 'cyan');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.47, 0, this.maxX * 0.003, this.maxY * 0.065, 'cyan');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.658, this.maxY * 0.28, this.maxY * 0.8, this.maxY * 0.006, 'cyan');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.658, 0, this.maxX * 0.003, this.maxY * 0.28, 'cyan');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0, this.maxY * 0.81, this.maxX * 0.092, this.maxY * 0.006, 'red');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.091, this.maxY * 0.81, this.maxX * 0.003, this.maxY * 0.4, 'red');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.09, this.maxY * 0.91, this.maxX * 0.04, this.maxY * 0.006, 'red');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.124, this.maxY * 0.79, this.maxX * 0.1, this.maxY * 0.006, 'red');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.124, this.maxY * 0.79, this.maxX * 0.003, this.maxY * 0.4, 'red');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.222, this.maxY * 0.79, this.maxX * 0.003, this.maxY * 0.024, 'red');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.222, this.maxY * 0.81, this.maxX * 0.103, this.maxY * 0.006, 'red');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.325, this.maxY * 0.81, this.maxX * 0.003, this.maxY * 0.197, 'red');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.107, this.maxY * 0.59, this.maxX * 0.115, this.maxY * 0.006, 'red');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.22, this.maxY * 0.59, this.maxX * 0.003, this.maxY * 0.145, 'red');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.107, this.maxY * 0.59, this.maxX * 0.003, this.maxY * 0.09, 'red');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.107, this.maxY * 0.675, this.maxX * 0.05, this.maxY * 0.006, 'red');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.155, this.maxY * 0.675, this.maxX * 0.003, this.maxY * 0.06, 'red');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.155, this.maxY * 0.73, this.maxX * 0.068, this.maxY * 0.006, 'red');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.014, this.maxY * 0.237, this.maxX * 0.05, this.maxY * 0.006, 'purple');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.014, this.maxY * 0.237, this.maxX * 0.003, this.maxY * 0.12, 'purple');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.064, this.maxY * 0.237, this.maxX * 0.003, this.maxY * 0.12, 'purple');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.014, this.maxY * 0.351, this.maxX * 0.05, this.maxY * 0.006, 'purple');
    }
}
//# sourceMappingURL=ParkWalls.js.map