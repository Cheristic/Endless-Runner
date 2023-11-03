

let config = {
    type: Phaser.CANVAS,
    width: 700,
    height: 700,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {x: 0, y: 0}
        }
    },
    scene: [ Load, Menu, Play ] 
};

let game = new Phaser.Game(config);

let keySPACE;
//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let {width, height} = game.config;

let eventEmitter = new Phaser.Events.EventEmitter();