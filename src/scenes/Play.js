class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create() {
        let platform = this.physics.add.sprite(width/2, height-35, 'base-platform');
        platform.body.setImmovable(true);

        this.hamster = new Hamster(this, width/2, height-40);
        this.physics.add.collider(this.hamster, platform);

        this.wheel = new Wheel(this, width/2, height/2);
        this.wheel.addToUpdateList();

        eventEmitter.on('startGame', this.onStartGame, this);

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }

    onStartGame() {
        this.portal = this.add.sprite(width/2, borderUISize*3, 'portal');
        this.portal.anims.play('portal');
    }

}