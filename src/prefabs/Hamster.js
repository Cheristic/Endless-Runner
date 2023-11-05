class Hamster extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'hamster');

        // add object to existing scene
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.setGravityY(1200);
        this.body.setMaxVelocityY(400);
        this.setCollideWorldBounds(true);
        this.anims.play('hamster', true);

        this.name = "hamster"

        this.scene = scene;

        eventEmitter.on('stopGame', this.onStopGame, this);

        this.jumpHeight = 800;

    }

    preUpdate(delta, time) {
        super.preUpdate(delta, time);
        if (keySPACE.isDown && this.body.onFloor()) {
            this.scene.sound.play('jump', {volume: 1});
            this.setVelocityY(-this.jumpHeight);
        }
    }

    onStopGame() {

    }
    
}