import CanvasUtil from '../Misc/CanvasUtil.js';
import Drawable from '../Misc/Drawable.js';
export default class Button extends Drawable {
    constructor(maxX, maxY) {
        super();
        this.maxX = maxX;
        this.maxY = maxY;
    }
    playerAtRedButton(player) {
        if (player.getPosX() + player.getWidth() >= (this.maxX * 0.3755)
            && player.getPosX() <= (this.maxX * 0.3755) + (this.maxX / 45)
            && player.getPosY() + player.getHeight() >= (this.maxY * 0.097)
            && player.getPosY() <= (this.maxY * 0.097) + (this.maxX / 45)) {
            return true;
        }
        return false;
    }
    playerAtGreenButton(player) {
        if (player.getPosX() + player.getWidth() >= (this.maxX * 0.5375)
            && player.getPosX() <= (this.maxX * 0.5375) + (this.maxX / 45)
            && player.getPosY() >= (this.maxY * 0.675)
            && player.getPosY() <= (this.maxY * 0.675) + (this.maxX / 45)) {
            return true;
        }
        return false;
    }
    render(canvas) {
        CanvasUtil.fillCircle(canvas, this.maxX * 0.549, this.maxY * 0.698, 5, 'forestgreen');
        CanvasUtil.fillCircle(canvas, this.maxX * 0.387, this.maxY * 0.115, 5, 'red');
    }
}
//# sourceMappingURL=Button.js.map