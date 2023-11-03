
class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {
        this.load.spritesheet('hamster', './assets/hamster-Sheet.png', {
            frameWidth: 20,
            frameHeight: 10,
            startFrame: 0,
            endFrame: 1
        })
        this.load.spritesheet('portal', './assets/portal-Sheet.png', {
            frameWidth: 128,
            frameHeight: 196,
            startFrame: 0,
            endFrame: 1
        })
        this.load.image('wheel', './assets/wheel.png')
        this.load.image('base-platform', './assets/base-platform.png');
    }

    create() {
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNames('hamster', {
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