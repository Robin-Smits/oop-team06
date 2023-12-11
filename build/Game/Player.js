import CanvasUtil from '../Misc/CanvasUtil.js';
import Drawable from '../Misc/Drawable.js';
export default class Player extends Drawable {
    speed;
    facingDirection;
    timeToNextImage;
    imageState;
    images;
    constructor(startPosX, startPosY, speed, version, maxX, maxY) {
        super();
        if (version === 1) {
            this.image = CanvasUtil.loadNewImage('./assets/player1/player_down1(2).png');
        }
        if (version === 2) {
            this.image = CanvasUtil.loadNewImage('./assets/player1/player_down1.png');
        }
        this.posX = startPosX;
        this.posY = startPosY;
        this.speed = speed;
        this.maxX = maxX;
        this.maxY = maxY;
        this.facingDirection = 0;
        this.timeToNextImage = 60;
        this.imageState = 0;
        if (version === 1) {
            this.images = [CanvasUtil.loadNewImage('./assets/player1/player_up1(2).png'),
                CanvasUtil.loadNewImage('./assets/player1/player_up2(2).png'),
                CanvasUtil.loadNewImage('./assets/player1/player_up3(2).png'),
                CanvasUtil.loadNewImage('./assets/player1/player_down1(2).png'),
                CanvasUtil.loadNewImage('./assets/player1/player_down2(2).png'),
                CanvasUtil.loadNewImage('./assets/player1/player_down3(2).png'),
                CanvasUtil.loadNewImage('./assets/player1/player_left1(2).png'),
                CanvasUtil.loadNewImage('./assets/player1/player_left2(2).png'),
                CanvasUtil.loadNewImage('./assets/player1/player_left3(2).png'),
                CanvasUtil.loadNewImage('./assets/player1/player_right1(2).png'),
                CanvasUtil.loadNewImage('./assets/player1/player_right2(2).png'),
                CanvasUtil.loadNewImage('./assets/player1/player_right3(2).png'),
            ];
        }
        if (version === 2) {
            this.images = [CanvasUtil.loadNewImage('./assets/player1/player_up1.png'),
                CanvasUtil.loadNewImage('./assets/player1/player_up2.png'),
                CanvasUtil.loadNewImage('./assets/player1/player_up3.png'),
                CanvasUtil.loadNewImage('./assets/player1/player_down1.png'),
                CanvasUtil.loadNewImage('./assets/player1/player_down2.png'),
                CanvasUtil.loadNewImage('./assets/player1/player_down3.png'),
                CanvasUtil.loadNewImage('./assets/player1/player_left1.png'),
                CanvasUtil.loadNewImage('./assets/player1/player_left2.png'),
                CanvasUtil.loadNewImage('./assets/player1/player_left3.png'),
                CanvasUtil.loadNewImage('./assets/player1/player_right1.png'),
                CanvasUtil.loadNewImage('./assets/player1/player_right2.png'),
                CanvasUtil.loadNewImage('./assets/player1/player_right3.png'),
            ];
        }
    }
    move(direction) {
        if (direction === 'up') {
            this.posY -= this.speed;
            this.facingDirection = 0;
            if (this.posY <= 0) {
                this.posY = 0;
            }
        }
        else if (direction === 'down') {
            this.posY += this.speed;
            this.facingDirection = 1;
            if (this.posY + this.image.height >= this.maxY) {
                this.posY = this.maxY - this.image.height;
            }
        }
        else if (direction === 'left') {
            this.posX -= this.speed;
            this.facingDirection = 2;
            if (this.posX <= 0) {
                this.posX = 0;
            }
        }
        else if (direction === 'right') {
            this.posX += this.speed;
            this.facingDirection = 3;
            if (this.posX + this.image.width >= this.maxX) {
                this.posX = this.maxX - this.image.width;
            }
        }
    }
    update(elapsed) {
        this.timeToNextImage -= elapsed;
        if (this.timeToNextImage <= 0) {
            if (this.facingDirection === 0) {
                if (this.imageState === 0) {
                    this.image = this.images.at(0);
                }
                else if (this.imageState === 1) {
                    this.image = this.images.at(1);
                }
                else if (this.imageState === 2) {
                    this.image = this.images.at(0);
                }
                else if (this.imageState === 3) {
                    this.image = this.images.at(2);
                    this.imageState = -1;
                }
            }
            if (this.facingDirection === 1) {
                if (this.imageState === 0) {
                    this.image = this.images.at(3);
                }
                else if (this.imageState === 1) {
                    this.image = this.images.at(4);
                }
                else if (this.imageState === 2) {
                    this.image = this.images.at(3);
                }
                else if (this.imageState === 3) {
                    this.image = this.images.at(5);
                    this.imageState = -1;
                }
            }
            if (this.facingDirection === 2) {
                if (this.imageState === 0) {
                    this.image = this.images.at(6);
                }
                else if (this.imageState === 1) {
                    this.image = this.images.at(7);
                }
                else if (this.imageState === 2) {
                    this.image = this.images.at(6);
                }
                else if (this.imageState === 3) {
                    this.image = this.images.at(8);
                    this.imageState = -1;
                }
            }
            if (this.facingDirection === 3) {
                if (this.imageState === 0) {
                    this.image = this.images.at(9);
                }
                else if (this.imageState === 1) {
                    this.image = this.images.at(10);
                }
                else if (this.imageState === 2) {
                    this.image = this.images.at(9);
                }
                else if (this.imageState === 3) {
                    this.image = this.images.at(11);
                    this.imageState = -1;
                }
            }
            this.imageState += 1;
            this.timeToNextImage = 60;
        }
    }
    setDirection(direction) {
        this.facingDirection = direction;
    }
}
//# sourceMappingURL=Player.js.map