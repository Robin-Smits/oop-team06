import CanvasUtil from '../Misc/CanvasUtil.js';
import Drawable from '../Misc/Drawable.js';
import Wall from '../Misc/Wall.js';
export default class HomeWalls extends Drawable {
    wallsPositions;
    walls;
    constructor(maxX, maxY) {
        super();
        this.maxX = maxX;
        this.maxY = maxY;
        this.wallsPositions = [
            [0, 0, this.maxY * 0.4, this.maxX, this.maxY * 0.007],
            [1, this.maxX * 0.52, this.maxY * 0.5, this.maxX * 0.045, this.maxY * 0.007],
            [3, this.maxX * 0.52, this.maxY * 0.4, this.maxX * 0.003, this.maxY * 0.105],
            [0, this.maxX * 0.563, this.maxY * 0.4, this.maxX * 0.003, this.maxY * 0.105],
            [1, this.maxX * 0.365, this.maxY * 0.6, this.maxX * 0.065, this.maxY * 0.007],
            [3, this.maxX * 0.365, this.maxY * 0.6, this.maxX * 0.003, this.maxY * 0.278],
            [0, this.maxX * 0.365, this.maxY * 0.87, this.maxX * 0.065, this.maxY * 0.007],
            [2, this.maxX * 0.43, this.maxY * 0.6, this.maxX * 0.003, this.maxY * 0.278],
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
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.875, this.maxY * 0.40, this.maxX * 0.11, this.maxY * 0.12, 'cyan');
        CanvasUtil.fillRectangle(canvas, 0, this.maxY * 0.4, this.maxX, this.maxY * 0.007, 'cyan');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.52, this.maxY * 0.5, this.maxX * 0.045, this.maxY * 0.007, 'cyan');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.52, this.maxY * 0.4, this.maxX * 0.003, this.maxY * 0.105, 'cyan');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.563, this.maxY * 0.4, this.maxX * 0.003, this.maxY * 0.105, 'cyan');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.365, this.maxY * 0.6, this.maxX * 0.065, this.maxY * 0.007, 'red');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.365, this.maxY * 0.6, this.maxX * 0.003, this.maxY * 0.278, 'red');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.365, this.maxY * 0.87, this.maxX * 0.065, this.maxY * 0.007, 'red');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.43, this.maxY * 0.6, this.maxX * 0.003, this.maxY * 0.278, 'red');
    }
}
//# sourceMappingURL=HomeWalls.js.map