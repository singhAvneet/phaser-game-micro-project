


import * as Assest  from '../variables';


  export default class Helper{ 


     addButtonListerners(This) {


            This.btnL.on('pointerup', function (pointer) {
                This.move="stop";
                this.anims.play('buttonUp', true);
            });
            This.btnL.on('pointerdown', function (pointer) {
            This.move="left";
            this.anims.play('buttonDown', true);
            });
            This.btnR.on('pointerup', function (pointer) {
            This.move="stop";
            this.anims.play('buttonUp', true);
            });
            This.btnR.on('pointerdown', function (pointer) {
            This.move="right";
            this.anims.play('buttonDown', true);
            });
            This.btnJ.on('pointerdown', function (pointer) {
            This.jump.play();
            this.anims.play('buttonJDown', true);
                This.player.setVelocityY(-330);  
            });
            This.btnJ.on('pointerup', function (pointer) {   
                this.anims.play('buttonJUp', true);   
            });
            
            This.restart.on('pointerdown', function (pointer) {   
                Assest.default.music.loop=false; 
            });

            This.quit.on('pointerdown', function () {
                location.reload();
          
                
              }, this);
        




 
    }


    addAnimation(This){      
      This.anims.create({
        key: 'buttonDown',
        frames: [ { key: 'btn', frame: 0 } ]   
    });
    This.anims.create({
        key: 'buttonUp',
        frames: [ { key: 'btn', frame: 1 } ]   
    });
    This.anims.create({
        key: 'buttonJDown',
        frames: [ { key: 'btnJ', frame: 0 } ]   
    });
    This.anims.create({
        key: 'buttonJUp',
        frames: [ { key: 'btnJ', frame: 1 } ]   
    });
    This.anims.create({
        key: 'doorClose',
        frames: [ { key: 'door', frame: 0 } ]   
    });
    This.anims.create({
        key: 'doorOpen',
        frames: This.anims.generateFrameNumbers('door',{ start: 0, end: 4 }),
        frameRate:20,
    
    });
    This.anims.create({
        key: 'rotatecCoins',
        frames: This.anims.generateFrameNumbers('star',{ start: 0, end: 3 }),
        frameRate:20,
        repeat:-1
    });
    This.anims.create({
        key: 'right',
        frames: This.anims.generateFrameNumbers('dude', { start: 3, end: 4 }),
        frameRate: 3,
        repeat: -1
    });
    This.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 0 } ],
        frameRate: 20
    });
    This.anims.create({
        key: 'left',
        frames: This.anims.generateFrameNumbers('dude', { start: 1, end: 2 }),
        frameRate: 3,
        repeat: -1,
        
    });
    This.anims.create({
        key: 'enemyleft',
        frames: This.anims.generateFrameNumbers('enemy', { start: 0, end: 1 }),
        frameRate: 3,
        repeat: -1,
        
    });
    This.anims.create({
        key: 'enemyright',
        frames: This.anims.generateFrameNumbers('enemy', { start: 2, end: 3 }),
        frameRate: 3,
        repeat: -1,
        
    });
    This.anims.create({
        key: 'carmove',
        frames: This.anims.generateFrameNumbers('car', { start: 1, end: 5 }),
        frameRate: 4,
        repeat: -1,
        
    });
    This.anims.create({
        key: 'cardisable',   
        frames: [ { key: 'car', frame: 5 } ]
        
    });


 
    }




 


  }


