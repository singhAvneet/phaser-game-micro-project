export default class Preload extends Phaser.State {

    preload() {

        // this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg');
        // this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar');
        // this.loaderBg.anchor.setTo(0.5);
        // this.loaderBar.anchor.setTo(0.5);

        // this.load.setPreloadSprite(this.loaderBar);

        // this.load.atlasJSONArray('smallfighter', 'img/spritesheet/smallfighter.png', 'data/spritesheet/smallfighter.json');
        // this.load.atlasJSONArray('alien', 'img/spritesheet/alien.png', 'data/spritesheet/alien.json');
        // this.load.atlasJSONArray('button', 'img/spritesheet/button.png', 'data/spritesheet/button.json');
        // this.load.image('farback', 'img/farback.jpg');
        // this.load.image('bullet', 'img/bullet.png');
        // this.load.image('particle', 'img/particle.gif');
        // this.load.image('healthbar', 'img/healthbar.png');
        // this.load.image('hudBg', 'img/hud-bg.png');

        // this.load.audio('playMusic', ['audio/music/play.mp3']);
        // this.load.audio('menuMusic', ['audio/music/menu.mp3']);

        // this.load.audio('menuOver', ['audio/sound/menu-over.mp3']);
        // this.load.audio('menuOut', ['audio/sound/menu-out.mp3']);
        // this.load.audio('menuDown', ['audio/sound/menu-click.mp3']);

        // this.load.audio('bulletHit', ['audio/sound/bullet-hit.mp3']);
        // this.load.audio('enemyShot', ['audio/sound/enemy-shot.mp3']);
        // this.load.audio('enemyExplosion', ['audio/sound/enemy-explosion.mp3']);
        // this.load.audio('playerShot', ['audio/sound/player-shot.mp3']);
        // this.load.audio('playerExplosion', ['audio/sound/player-explosion.mp3']);

        // this.load.audio('gameOver', ['audio/sound/game-over.mp3']);


        this.load.image('brand', root+'/images/brand.png');
this.load.image('button', root+'/images/button.png');
this.load.image('sky', root+'/images/sky.png');
this.load.image('brown2', root+'/images/brown2.png');
this.load.image('ground', root+'/images/platform.png');
this.load.image('ground2', root+'/images/platform2.png');
this.load.image('key', root+'/images/key.png');
this.load.image('gameover', root+'/images/gameover.png');
this.load.image('win', root+'/images/win.png');
this.load.image('keys', root+'/images/keys.png');
this.load.spritesheet('btn', root+'/images/button_sprite_sheet.png', { frameWidth: 64, frameHeight: 64 });
this.load.spritesheet('btnJ', root+'/images/jump.png', { frameWidth: 64, frameHeight: 64 });

this.load.spritesheet('door',root+'/images/door.png', { frameWidth: 50, frameHeight: 63 } );
this.load.spritesheet('dude',root+'/images/dude.png', { frameWidth: 40, frameHeight: 60 } );
this.load.spritesheet('star',root+'/images/coins.png', { frameWidth: 16, frameHeight: 16 } );
this.load.spritesheet('enemy',root+'/images/enemy.png', { frameWidth: 20, frameHeight: 20 } );
this.load.spritesheet('car',root+'/images/car.png', { frameWidth: 152, frameHeight: 50 } );
this.load.image('start', root+'/images/start.png');
this.load.audio('coin',root+'/sounds/coin.wav');
this.load.audio('over',root+'/sounds/over.wav');
this.load.audio('won',root+'/sounds/won.wav');
this.load.audio('music',root+'/sounds/game.wav');
this.load.audio('jump',root+'/sounds/jump.wav');
this.load.audio('happy',root+'/sounds/happy.wav');

    }

    create() {
        this.state.start('Menu');
    }

}
