import CanvasUtil from '../Misc/CanvasUtil.js';
import DungeonWallsDoors from '../Dungeon/DungeonBorders.js';
export default class RedDoors extends DungeonWallsDoors {
    constructor(maxX, maxY, color) {
        super();
        this.maxX = maxX;
        this.maxY = maxY;
        this.color = color;
        this.state = 0;
    }
    render(canvas) {
        if (this.state === 0) {
            CanvasUtil.fillRectangle(canvas, this.maxX * 0.444, this.maxY * 0.089, this.maxX * 0.015, this.maxY * 0.1275, 'red');
            CanvasUtil.fillRectangle(canvas, this.maxX * 0.533, this.maxY * 0.385, this.maxX * 0.015, this.maxY * 0.132, 'red');
            CanvasUtil.drawRectangle(canvas, this.maxX * 0.715, this.maxY * 0.122, this.maxX * 0.015, this.maxY * 0.095, 'red');
        }
        else if (this.state === 1) {
            CanvasUtil.drawRectangle(canvas, this.maxX * 0.444, this.maxY * 0.089, this.maxX * 0.015, this.maxY * 0.1275, 'red');
            CanvasUtil.drawRectangle(canvas, this.maxX * 0.533, this.maxY * 0.395, this.maxX * 0.015, this.maxY * 0.1275, 'red');
            CanvasUtil.fillRectangle(canvas, this.maxX * 0.715, this.maxY * 0.122, this.maxX * 0.015, this.maxY * 0.095, 'red');
        }
    }
    update(player) {
        if (this.state === 0) {
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
        }
        else {
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
//# sourceMappingURL=RedDoors.js.map