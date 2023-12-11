import Drawable from '../Misc/Drawable.js';
export default class DungeonWallsDoors extends Drawable {
    color;
    state;
    switchState() {
        if (this.state === 0) {
            this.state = 1;
        }
        else if (this.state === 1) {
            this.state = 0;
        }
    }
}
//# sourceMappingURL=DungeonBorders.js.map