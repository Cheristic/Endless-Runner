class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {
        let menuConfig = {
            fontFamily: 'Source Code Pro',
            fontStyle: 'Bold',
            fontSize: '28px',
            color: '#843605',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        };

        this.add.text(game.config.width/2,game.config.height/2+borderUISize +
        borderPadding, 'Press SPACE to Begin', menuConfig).setOrigin(0.5);

        this.scene.launch('playScene'); // Start play scene to overlap the menu
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.sleep('menuScene');
        }
    }
}