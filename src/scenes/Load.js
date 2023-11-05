
class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {
        this.load.atlas('hamster', './assets/hamster-Sheet.png', './assets/hamster-sheet.json');
        /*this.load.spritesheet('hamster', './assets/hamster-Sheet.png', {
            frameWidth: 20,
            frameHeight: 10,
            startFrame: 0,
            endFrame: 1
        })*/
        this.load.spritesheet('portal', './assets/portal-Sheet.png', {
            frameWidth: 128,
            frameHeight: 196,
            startFrame: 0,
            endFrame: 1
        })
        this.load.image('wheel', './assets/wheel.png')
        this.load.image('base-platform', './assets/base-platform.png');
        this.load.image('lava', './assets/lava-block.png');
        this.load.image('platform', './assets/platform.png');

        this.load.audio('music', ['./assets/monkeys.mp3'])
        this.load.audio('death', ['./assets/death.ogg'])
        this.load.audio('tiptoe', ['./assets/tiptoe.mp3'])
        this.load.audio('jump', ['./assets/jump.wav'])
        this.load.audio('blip', ['./assets/blip.wav'])
    }

    create() {
        this.anims.create({
            key: 'hamster',
            frames: this.anims.generateFrameNames('hamster', {
                prefix: "ham",
                start: 0,
                end: 1
            }),
            frameRate: 6,
            repeat: -1
        });
        
        this.anims.create({
            key: 'portal',
            frames: this.anims.generateFrameNames('portal', {
                start: 0,
                end: 1
            }),
            frameRate: 6,
            repeat: -1
        });

        this.scene.start('menuScene');
    }
}