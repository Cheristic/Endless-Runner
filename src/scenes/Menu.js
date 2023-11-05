class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {
        let menuConfig = {
            fontFamily: 'Source Code Pro',
            fontStyle: 'Bold',
            fontSize: '28px',
            color: '#A9E010',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        };
        console.log()
        if(!this.scene.isActive('playScene')) {
            this.scene.launch('playScene'); // Start play scene to overlap the menu
            keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        }
        else {
            this.scene.get('playScene').restart();
            this.scene.resume('playScene');
        }

        this.add.text(game.config.width/2,game.config.height/2,
        'Press SPACE to Begin', menuConfig).setOrigin(0.5);
        menuConfig.color = "#FFFFFF"
        menuConfig.fontSize = '14px'
        this.add.text(width-borderUISize*2-30,height-20,
        'Everything by Ethan Heffan\n© Brainrot Inc.', menuConfig).setOrigin(0.5);

        this.scene.bringToTop();

        this.started = false;
    }

    update() {
        if (keySPACE.isDown && !this.started) {
            this.started = true;
            this.sound.play('blip', {volume: 0.01});
            eventEmitter.emit('startGame');
            this.scene.stop('menuScene')

        }
    }

}