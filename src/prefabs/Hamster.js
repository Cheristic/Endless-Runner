class Hamster extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'hamster');

        this.anims.play('run', true);

        // add object to existing scene
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.setGravityY(1200);
        this.body.setMaxVelocityY(400);
        this.setCollideWorldBounds(true);

        eventEmitter.on('stopGame', this.onStopGame, this);

        this.jumpHeight = 800;

    }

    preUpdate() {
        super.preUpdate();
        if (keySPACE.isDown && this.body.onFloor()) {
            this.setVelocityY(-this.jumpHeight);
        }
    }

    onStopGame() {

    }
    
}