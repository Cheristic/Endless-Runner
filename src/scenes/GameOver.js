class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOverScene");
    }

    create() {
        console.log("you lost L")

        let menuConfig = {
            fontFamily: 'Source Code Pro',
            fontStyle: 'Bold',
            fontSize: '28px',
            color: '#A9E010',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        };

        this.add.text(game.config.width/2,game.config.height/2+100,
        'YOU DIED', menuConfig).setOrigin(0.5);

        menuConfig.fontSize = '20px';
        this.add.text(game.config.width/2,game.config.height/2+130,
        'Press R to Restart', menuConfig).setOrigin(0.5);

        this.scene.bringToTop();
        this.keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

        gameActive = false;

        this.restart = false;

    }

    update() {
        if (this.keyR.isDown && !this.restart) {
            this.restart = true;
            this.sound.play('blip', {volume: 0.01});
            eventEmitter.emit('restart');
            this.scene.start('menuScene');
            this.scene.stop('gameOverScene');

        }
    }
}