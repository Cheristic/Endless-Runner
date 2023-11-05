/*

Ethan Heffan
This Game Really Makes You Feel Like A Hamster
30+ Hours

Creative Tilt:
I really challenged myself by formulating the entire Endless Runner as a spinning wheel with groups of objects.
This required me to really understand arcade collisions, containers, inheritance, and hamster physics, which was
very challenging to figure out on my own. I think it ended up being a fairly new endless runner type that I'm
definitely proud of.

I definitely am not an "artist" (however you wanna define that), but I finally caved and bought Aseprite to create
the pixel art assets and learn that whole process. I think the theme is incredibly cute. Hamsters in a hamster wheel
are the irl endless runner, so I wanted to translate that experience into the crisp format of beginner browser game.

*/

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