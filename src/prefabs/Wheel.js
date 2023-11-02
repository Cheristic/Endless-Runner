class Wheel extends Phaser.GameObjects.Sprite {
    contructor(scene, x, y) {
        super(scene, x, y, 'wheel');

        scene.physics.add.existing(this);
    }

    update() {
        this.body.
    }
}