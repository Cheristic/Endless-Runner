class Lava extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, rotation) {
        super(scene, x, y, 'lava');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.initialAngle = rotation;
        this.angleTracker = rotation;
        this.setAngle(rotation);
        this.hasLooped = false;

        this.name = "lava"
    }

    preUpdate() {
        super.preUpdate();
        this.angle+=rotationSpeed;
        this.angleTracker += rotationSpeed;
        if (this.angleTracker >= 180) {
            this.angleTracker = this.angle;
            this.hasLooped = true;
        }
        if (this.hasLooped && Math.ceil(this.angle) >= this.initialAngle) {
            this.destroy();
        }
    }
}