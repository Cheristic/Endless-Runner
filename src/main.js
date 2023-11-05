

let config = {
    type: Phaser.CANVAS,
    width: 700,
    height: 700,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {x: 0, y: 0},
            debug: true
        }
    },
    scene: [ Load, Menu, Play, GameOver ] 
};

let game = new Phaser.Game(config);

let keySPACE;

let gameActive = false;

let rotationSpeed;
//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let {width, height} = game.config;

let eventEmitter = new Phaser.Events.EventEmitter();