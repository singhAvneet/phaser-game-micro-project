import * as Assest  from '../variables';



export  class Preload extends Phaser.Scene {


    constructor(){
        super({
            key: "Preload"
          });
    }
  
    preload() {
        this.load.setBaseURL(Assest.default.root);
        this.load.image('sky', 'images/sky.png')
        .image('brown2', 'images/brown2.png')
        .image('ground', 'images/platform.png')
        .image('ground2', 'images/platform2.png')
        .image('key', 'images/key.png')
        .image('gameover', 'images/gameover.png')
        .image('win', 'images/win.png')  
        .spritesheet('btn', 'images/button_sprite_sheet.png', { frameWidth: 64, frameHeight: 64 })
        .spritesheet('btnJ', 'images/jump.png', { frameWidth: 64, frameHeight: 64 })
        .spritesheet('door','images/door.png', { frameWidth: 50, frameHeight: 63 } )
        .spritesheet('dude','images/dude.png', { frameWidth: 40, frameHeight: 60 } )
        .spritesheet('star','images/coins.png', { frameWidth: 16, frameHeight: 16 } )
        .spritesheet('enemy','images/enemy.png', { frameWidth: 20, frameHeight: 20 } )
        .spritesheet('car','images/car.png', { frameWidth: 152, frameHeight: 50 } )

        .audio('coin','sounds/coin.wav')
        .audio('over','sounds/over.wav')
        .audio('won','sounds/won.wav')        
        .audio('jump','sounds/jump.wav')
        .audio('happy','sounds/happy.wav')

    }

    create() {
        this.scene.stop('WelcomeScene');        
        this.scene.start('GameScene');  
    }
   

}
