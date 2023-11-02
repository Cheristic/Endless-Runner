class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {
        this.load.spritesheet('hamster', './assets/hamster-Sheet.png')
        this.load.spritesheet('portal', './assets/portal-Sheet.png')
        this.load.image('wheel', './assets/wheel.png')
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
        
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.game.start('menuScene');
    }
}