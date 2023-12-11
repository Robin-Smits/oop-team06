import CanvasUtil from '../Misc/CanvasUtil.js';
import Drawable from '../Misc/Drawable.js';
export default class DungeonEnemy extends Drawable {
    timeToNextImage;
    facingDirection;
    speed;
    imageState;
    timesMoved;
    facingDown;
    facingUp;
    facingLeft;
    facingRight;
    constructor() {
        super();
        this.image = CanvasUtil.loadNewImage('./assets/enemyBald/down1.png');
        this.timeToNextImage = 60;
        this.imageState = 0;
    }
    updateAnimation() {
        if (this.timeToNextImage <= 0) {
            if (this.facingDirection === 0) {
                if (this.imageState === 0) {
                    this.image = this.facingUp.at(0);
                }
                else if (this.imageState === 1) {
                    this.image = this.facingUp.at(1);
                }
                else if (this.imageState === 2) {
                    this.image = this.facingUp.at(0);
                }
                else if (this.imageState === 3) {
                    this.image = this.facingUp.at(2);
                    this.imageState = -1;
                }
            }
            if (this.facingDirection === 1) {
                if (this.imageState === 0) {
                    this.image = this.facingDown.at(0);
                }
                else if (this.imageState === 1) {
                    this.image = this.facingDown.at(1);
                }
                else if (this.imageState === 2) {
                    this.image = this.facingDown.at(0);
                }
                else if (this.imageState === 3) {
                    this.image = this.facingDown.at(2);
                    this.imageState = -1;
                }
            }
            if (this.facingDirection === 2) {
                if (this.imageState === 0) {
                    this.image = this.facingLeft.at(0);
                }
                else if (this.imageState === 1) {
                    this.image = this.facingLeft.at(1);
                }
                else if (this.imageState === 2) {
                    this.image = this.facingLeft.at(0);
                }
                else if (this.imageState === 3) {
                    this.image = this.facingLeft.at(2);
                    this.imageState = -1;
                }
            }
            if (this.facingDirection === 3) {
                if (this.imageState === 0) {
                    this.image = this.facingRight.at(0);
                }
                else if (this.imageState === 1) {
                    this.image = this.facingRight.at(1);
                }
                else if (this.imageState === 2) {
                    this.image = this.facingRight.at(0);
                }
                else if (this.imageState === 3) {
                    this.image = this.facingRight.at(2);
                    this.imageState = -1;
                }
            }
            this.imageState += 1;
        }
    }
    setDirection(direction) {
        this.facingDirection = direction;
    }
}
//# sourceMappingURL=DungeonEnemy.js.map