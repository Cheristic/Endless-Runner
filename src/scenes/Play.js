class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create() {
        this.hamster = new Hamster(width/2, height-20);
        this.wheel = new Wheel(width/2, height/2);
    }

}