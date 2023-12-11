import CanvasUtil from '../Misc/CanvasUtil.js';
import Drawable from '../Misc/Drawable.js';
export default class Crates extends Drawable {
    value;
    constructor(posX, posY) {
        super();
        this.image = CanvasUtil.loadNewImage('./assets/icons/Chest.png');
        this.value = false;
        this.posX = posX;
        this.posY = posY;
    }
    update(player) {
        if (player.getPosX() + player.getWidth() >= this.posX
            && player.getPosX() <= this.posX + this.image.width
            && player.getPosY() >= this.posY
            && player.getPosY() <= this.posY + this.image.height
            && this.value === false) {
            this.value = true;
        }
        return this.value;
    }
    render(canvas) {
        CanvasUtil.drawImage(canvas, this.image, this.posX, this.posY);
    }
}
//# sourceMappingURL=Crates.js.map