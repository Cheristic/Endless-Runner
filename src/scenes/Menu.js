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

        this.scene.launch('playScene'); // Start play scene to overlap the menu

        this.add.text(game.config.width/2,game.config.height/2,
        'Press SPACE to Begin', menuConfig).setOrigin(0.5);

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }

    update() {
        if (keySPACE.isDown) {
            this.scene.sleep('menuScene');
            eventEmitter.emit('startGame');
        }
    }
}