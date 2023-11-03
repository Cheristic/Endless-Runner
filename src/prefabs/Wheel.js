class Wheel extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'wheel');

        // add object to existing scene
        scene.add.existing(this);
        this.rotationSpeed = 0.5;
        this.angle = 0;
    }

    preUpdate() {
        this.angle+=this.rotationSpeed;
        this.setAngle(this.angle)
        if (this.angle == 180) this.angle = -180;
    }
}