import Drawable from '../Misc/Drawable.js';
export default class Wall extends Drawable {
    direction;
    width;
    height;
    constructor(maxX, maxY, direction, posX, posY, width, height) {
        super();
        this.maxX = maxX;
        this.maxY = maxY;
        this.direction = direction;
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
    }
    updateWall(player) {
        if (this.direction === 0) {
            if (player.getPosX() + player.getWidth() >= (this.posX)
                && player.getPosX() <= (this.posX) + (this.width)
                && player.getPosY() + player.getHeight() >= (this.posY)
                && player.getPosY() <= (this.posY) + (this.height)) {
                player.setPosY(this.posY + this.height);
            }
        }
        else if (this.direction === 1) {
            if (player.getPosX() + player.getWidth() >= (this.posX)
                && player.getPosX() <= (this.posX) + (this.width)
                && player.getPosY() + player.getHeight() >= (this.posY)
                && player.getPosY() <= (this.posY) + (this.height)) {
                player.setPosY(this.posY - player.getHeight());
            }
        }
        else if (this.direction === 2) {
            if (player.getPosX() + player.getWidth() >= (this.posX)
                && player.getPosX() <= (this.posX) + (this.width)
                && player.getPosY() + player.getHeight() >= (this.posY)
                && player.getPosY() <= (this.posY) + (this.height)) {
                player.setPosX(this.posX + this.width);
            }
        }
        else if (this.direction === 3) {
            if (player.getPosX() + player.getWidth() >= (this.posX)
                && player.getPosX() <= (this.posX) + (this.width)
                && player.getPosY() + player.getHeight() >= (this.posY)
                && player.getPosY() <= (this.posY) + (this.height)) {
                player.setPosX(this.posX - player.getWidth());
            }
        }
    }
}
//# sourceMappingURL=Wall.js.map