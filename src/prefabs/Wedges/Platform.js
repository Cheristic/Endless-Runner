class Platform extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, rotation) {
        super(scene, x, y, 'platform');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.setImmovable(true);
        this.body.checkCollision.down = false;
        this.body.checkCollision.left = false;

        this.angleTracker = rotation;
        this.initialAngle = rotation;
        this.setAngle(rotation);
        this.hasLooped = false;

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