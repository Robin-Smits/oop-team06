import CanvasUtil from '../Misc/CanvasUtil.js';
import DungeonEnemy from '../Enemys/DungeonEnemy.js';
export default class DungeonEnemyTwo extends DungeonEnemy {
    constructor(speed, maxX, maxY) {
        super();
        this.facingDown = [
            CanvasUtil.loadNewImage('./assets/enemyTwo/down1.png'),
            CanvasUtil.loadNewImage('./assets/enemyTwo/down2.png'),
            CanvasUtil.loadNewImage('./assets/enemyTwo/down3.png'),
        ];
        this.facingUp = [
            CanvasUtil.loadNewImage('./assets/enemyTwo/up1.png'),
            CanvasUtil.loadNewImage('./assets/enemyTwo/up2.png'),
            CanvasUtil.loadNewImage('./assets/enemyTwo/up3.png'),
        ];
        this.facingLeft = [
            CanvasUtil.loadNewImage('./assets/enemyTwo/left1.png'),
            CanvasUtil.loadNewImage('./assets/enemyTwo/left2.png'),
            CanvasUtil.loadNewImage('./assets/enemyTwo/left3.png'),
        ];
        this.facingRight = [
            CanvasUtil.loadNewImage('./assets/enemyTwo/right1.png'),
            CanvasUtil.loadNewImage('./assets/enemyTwo/right2.png'),
            CanvasUtil.loadNewImage('./assets/enemyTwo/right3.png'),
        ];
        this.speed = speed;
        this.maxX = maxX;
        this.maxY = maxY;
        this.image = this.facingDown.at(0);
        this.posX = maxX * 0.609;
        this.posY = maxY * 0.685;
        this.timeToNextImage = 60;
        this.timesMoved = 0;
    }
    update(elapsed) {
        this.timeToNextImage -= elapsed;
        if (this.timeToNextImage <= 0) {
            if (this.posY <= this.maxY * 0.685
                && this.posX >= this.maxX * 0.609
                && this.posX <= this.maxX * 0.722) {
                this.posX += this.speed;
                this.posY = this.maxY * 0.685;
                this.setDirection(3);
            }
            else if (this.posX >= this.maxX * 0.722
                && this.posY >= this.maxY * 0.685
                && this.posY <= this.maxY * 0.885) {
                this.posX = this.maxX * 0.722;
                this.posY += this.speed;
                this.setDirection(1);
            }
            else if (this.posY >= this.maxY * 0.885
                && this.posX >= this.maxX * 0.609
                && this.posX <= this.maxX * 0.722) {
                this.posX -= this.speed;
                this.posY = this.maxY * 0.885;
                this.setDirection(2);
            }
            else if (this.posX <= this.maxX * 0.685
                && this.posY >= this.maxY * 0.685
                && this.posY <= this.maxY * 0.885) {
                this.posX = this.maxX * 0.609;
                this.posY -= this.speed;
                this.setDirection(0);
            }
            this.updateAnimation();
            this.timeToNextImage = 60;
        }
    }
    collidesWithPlayer(player) {
        if (this.posX - ((this.maxX * 0.048) / 2) <= player.getPosX()
            && this.posX + ((this.maxX * 0.048) / 2) >= player.getPosX()
            && this.posY - ((this.maxY * 0.09) / 2) <= player.getPosY()
            && this.posY + ((this.maxY * 0.09) / 2) >= player.getPosY()) {
            return true;
        }
        return false;
    }
    drawHitbox(canvas) {
        CanvasUtil.fillRectangle(canvas, this.posX - ((this.maxX * 0.048) / 2), this.posY - ((this.maxY * 0.09) / 2), this.maxX * 0.048, this.maxY * 0.09, 'Orange');
    }
}
//# sourceMappingURL=DungeonEnemyTwo.js.map