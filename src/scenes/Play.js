class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
        rotationSpeed = 0.5;

    }

    create() {
        this.platform = this.physics.add.sprite(width/2, height-56, 'base-platform');
        this.platform.body.setImmovable(true);

        this.hamster = new Hamster(this, width/2, height-65);
        this.physics.add.collider(this.hamster, this.platform);
        this.hamster.anims.play('hamster');
        this.hamster.addToUpdateList();

        this.wheel = new Wheel(this, width/2, height/2);
        this.wheel.addToUpdateList();

        eventEmitter.on('startGame', this.onStartGame, this);
        eventEmitter.on('gameOver', this.onGameOver, this);
        eventEmitter.on('scorePoints', this.onScorePoints, this);
        eventEmitter.on('restart', this.onRestart, this);

        rotationSpeed = 0.5;

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.debugKEY = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.physics.world.debugGraphic.clear();
        this.physics.world.drawDebug = false;


        this.wedgeTimerInterval = 67; 
        this.wedgeTimer = this.wedgeTimerInterval;

        gameActive = false;
        this.speedUpTime = 5000;

        let scoreConfig = {
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

        this.scoreText = this.add.text(game.config.width/2,game.config.height/2,
        null, scoreConfig).setOrigin(0.5);
        this.score = 0;

        this.music = this.sound.add('music', {
            mute: false,
            volume: .1,
            rate: 1,
            loop: true
        });
        this.tiptoe = this.sound.add('tiptoe', {
            mute: false,
            volume: .01,
            rate: 1,
            loop: true
        });
        this.tiptoe.play();
    }

    restart() {
        this.tiptoe.play();

        this.hamster = new Hamster(this, width/2, height-65);
        this.physics.add.collider(this.hamster, this.platform);
        this.hamster.addToUpdateList();

        this.portal.destroy();

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        rotationSpeed = 0.5;
        this.wedgeTimerInterval = 67; 
        this.wedgeTimer = this.wedgeTimerInterval;

        gameActive = false;

        this.score = 0;

    }

    update(time, delta) {
        if (gameActive) {
            this.wedgeTimer += rotationSpeed;
            while (this.wedgeTimer > this.wedgeTimerInterval) {
                this.wedgeTimer -= this.wedgeTimerInterval; // CREDIT: https://gamedev.stackexchange.com/questions/182242/phaser-3-how-to-trigger-an-event-every-1-second
                let wedge = this.add.wedge(this, Phaser.Math.Between(1, 8));
                this.physics.add.collider(this.hamster, wedge.list, this.checkDeathCollision)
            }
        }

        if(gameActive) this.scoreText.text = this.score;
        

        if (Phaser.Input.Keyboard.JustDown(this.debugKEY)) {
            this.physics.world.debugGraphic.clear();
            this.physics.world.drawDebug = !(this.physics.world.drawDebug);
        }
    }

    checkDeathCollision(object1, object2) {
        if(object2.name == "lava") {
            object1.destroy()
            eventEmitter.emit("gameOver");
        }
    }

    onStartGame() {
        this.portal = this.add.sprite(width/2, borderUISize*2+borderPadding, 'portal');
        this.portal.anims.play('portal');
        this.portal.setDepth(10);
        rotationSpeed = 0.5;

        this.clock = this.time.delayedCall(this.speedUpTime, this.increaseSpeed, null, this);

        this.music.play();
        gameActive = true;

    }

    onGameOver() {
        this.music.stop();
        this.tiptoe.stop();
        this.sound.play('death', {volume: 0.25});
        this.scene.launch('gameOverScene');
        this.clock.remove();

    }

    onScorePoints() {
        this.score += 1;
    }

    onRestart() {
        this.input.keyboard.clearCaptures();
        this.input.keyboard.removeKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        this.scoreText.text = null;
    }

    increaseSpeed() {
        if (rotationSpeed < 1.5) rotationSpeed+=0.05;
        this.clock = this.time.delayedCall(this.speedUpTime, this.increaseSpeed, null, this);
    }
}