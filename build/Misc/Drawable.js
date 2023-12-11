import CanvasUtil from '../Misc/CanvasUtil.js';
export default class Drawable {
    image;
    posX;
    posY;
    maxX;
    maxY;
    getPosX() {
        return this.posX;
    }
    getPosY() {
        return this.posY;
    }
    setPosX(posX) {
        this.posX = posX;
    }
    setPosY(posY) {
        this.posY = posY;
    }
    getWidth() {
        return this.image.width;
    }
    getHeight() {
        return this.image.height;
    }
    render(canvas) {
        CanvasUtil.drawImage(canvas, this.image, this.posX, this.posY);
    }
}
//# sourceMappingURL=Drawable.js.map