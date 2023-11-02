class Hamster extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'hamster');

        // add object to existing scene
        scene.physics.add.existing(this);
    }
}