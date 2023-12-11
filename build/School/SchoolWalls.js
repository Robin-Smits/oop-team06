import CanvasUtil from '../Misc/CanvasUtil.js';
import Drawable from '../Misc/Drawable.js';
import Wall from '../Misc/Wall.js';
export default class SchoolWalls extends Drawable {
    wallsPositions;
    walls;
    constructor(maxX, maxY) {
        super();
        this.maxX = maxX;
        this.maxY = maxY;
        this.wallsPositions = [
            [2, this.maxX * 0.0125, 0, 5, this.maxY],
            [3, this.maxX - this.maxX * 0.0155, 0, 5, this.maxY],
            [0, 0, this.maxY * 0.215, this.maxX, 5],
            [3, this.maxX * 0.455, this.maxY * 0.215, 5, this.maxY * 0.09],
            [2, this.maxX * 0.54, this.maxY * 0.215, 5, this.maxY * 0.09],
            [0, this.maxX * 0.455, this.maxY * 0.3, this.maxX * 0.0875, 5],
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
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.055, this.maxY * 0.22, this.maxX * 0.0625, this.maxY * 0.0825, 'yellow');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.83, this.maxY * 0.58, this.maxX * 0.133, this.maxY * 0.42, 'orange');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.0125, 0, 5, this.maxY, 'red');
        CanvasUtil.fillRectangle(canvas, this.maxX - this.maxX * 0.0155, 0, 5, this.maxY, 'red');
        CanvasUtil.fillRectangle(canvas, 0, this.maxY * 0.215, this.maxX, 5, 'red');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.455, this.maxY * 0.215, 5, this.maxY * 0.09, 'cyan');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.54, this.maxY * 0.215, 5, this.maxY * 0.09, 'cyan');
        CanvasUtil.fillRectangle(canvas, this.maxX * 0.455, this.maxY * 0.3, this.maxX * 0.0875, 5, 'cyan');
    }
}
//# sourceMappingURL=SchoolWalls.js.map