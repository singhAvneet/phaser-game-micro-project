import * as Assest  from '../variables';
import  Helper from '../sprites/helper';
import  Actor from '../sprites/actor';

export class GameScene extends Phaser.Scene {
  
  helper: Helper;

   

  constructor() {
    super({
      key: "GameScene"
    });    
  } 



  init(): void {
    this.helper= new Helper();  
    Assest.default.assets.cursors = this.input.keyboard.createCursorKeys(); 
    Assest.default.assets.platforms = this.physics.add.staticGroup();
  }

preload(){

  this.load.image('button', Assest.default.root+'/images/button.png');


}
  
  create(): void {
    this.scene.stop('Preload')   

      Assest.default.assets.coin = this.sound.add('coin');      
      Assest.default.assets.over = this.sound.add('over'); 
      Assest.default.assets.won = this.sound.add('won'); 
      Assest.default.assets.jump = this.sound.add('jump'); 
      Assest.default.assets.happy = this.sound.add('happy');//you won 
      
     this.sound.resumeAll();
  
    Assest.default.assets.platforms.create(400, 300, 'sky');
    Assest.default.airplatform[0] = Assest.default.assets.platforms.create(440, 400, 'ground');
    Assest.default.airplatform[1] = Assest.default.assets.platforms.create(390, 250, 'ground');
    Assest.default.airplatform[2] = Assest.default.assets.platforms.create(650, 190, 'ground');
    Assest.default.airplatform[3] = Assest.default.assets.platforms.create(650, 300, 'ground');
    Assest.default.airplatform[4] = Assest.default.assets.platforms.create(16, 170, 'ground');
    Assest.default.airplatform[5] = Assest.default.assets.platforms.create(105, 280, 'ground');

    Assest.default.assets.platforms.create(0, 504, 'brown2').setOrigin(0, 0).setScale(3).refreshBody();
    Assest.default.assets.platforms.create(0, 441, 'ground2').setOrigin(0, 0).setScale(2).refreshBody();
    Assest.default.assets.scoreText = this.add.text(16, 16, 'SCORE: 0', { fontSize: '30px', fill: '#fff' });
    Assest.default.assets.quit = this.add.text(100, 100, 'Exit', { font: '24px Arial Bold', fill: 'white' });

    Assest.default.assets.quit.setInteractive();
    Assest.default.assets.btnL = this.add.sprite(100, 530, 'btn').setScale(2).setInteractive();
    Assest.default.assets.btnR = this.add.sprite(300, 530, 'btn').setScale(2).setInteractive();
    Assest.default.assets.btnJ = this.add.sprite(700, 530, 'btnJ').setScale(2).setInteractive();
    Assest.default.assets.restart = this.add.sprite(500, 530, 'button').setScale(2).setInteractive();

    Assest.default.assets.player =  new Actor({ scene: this, x:0,  y: 100, asset: 'dude', gravity: true, bounce: 0.2 });
    Assest.default.assets.enemy = new Actor({ scene: this, x:50,  y: 400, asset: 'enemy', gravity: true, bounce: 0  })
    Assest.default.assets.car =   new Actor({ scene: this, x:870,  y: 400, asset: 'car' , gravity: true, bounce: 0 });
    Assest.default.assets.car.flipX= true;
    Assest.default.assets.dooor = new Actor({ scene: this, x:800,  y: 410, asset: 'door' , gravity: true, bounce: 0 });   
  
    this.physics.add.overlap(Assest.default.assets.car, Assest.default.assets.enemy,function(){Assest.default.assets.enemy.destroy()} , null, this);
    this.physics.add.overlap(Assest.default.assets.player, Assest.default.assets.dooor, this.openDoor, null, this);
    this.physics.add.collider(Assest.default.assets.car, Assest.default.assets.platforms);
    this.physics.add.collider(Assest.default.assets.player, Assest.default.assets.platforms);
    this.physics.add.collider(Assest.default.assets.player, Assest.default.airplatform);
    this.physics.add.collider(Assest.default.stars, Assest.default.assets.platforms);
    this.physics.add.collider(Assest.default.assets.dooor, Assest.default.assets.platforms);
    this.physics.add.collider(Assest.default.assets.player, Assest.default.assets.dooor);
    this.physics.add.collider(Assest.default.assets.enemy, Assest.default.assets.platforms);

    this.helper.addButtonListerners(Assest.default.assets);
    this.helper.addAnimation(this);

    Assest.default.assets.dooor.anims.play('doorClose');

    for (var i=1,ry,rx;i<12;i++,ry=Math.floor(Math.random() * 236)+64,rx=Math.floor(Math.random() * 736)+64){
      Assest.default.stars[i]= new Actor({ scene: this, x:rx,  y: ry, asset: 'star' , gravity: false, bounce: 0.2 });
      Assest.default.stars[i].body.allowGravity=false; 
      this.physics.add.overlap( Assest.default.assets.player,  Assest.default.stars[i], this.collectStar, null, this);
      this.physics.add.overlap( Assest.default.airplatform,  Assest.default.stars[i],  this.overlapStars, null, this);    
      this.physics.add.overlap( Assest.default.assets.player , Assest.default.assets.enemy,  this.killPlayer, null, this);             
  
      Assest.default.stars[i].anims.play('rotatecCoins');
   
  }





  }
  update(time: number): void {
    if(Assest.default.assets.win ){ 
      if(Assest.default.assets.hasKey){ 
      Assest.default.assets.car.setVelocityX(-80);
      }            
     }
   

     if(Assest.default.assets.enemy.x>=630){
      Assest.default.assets.enemy.setVelocityX(-160);
      Assest.default.assets.enemy.anims.play('enemyright');
    }
    if(Assest.default.assets.enemy.x<=50){        
      Assest.default.assets.enemy.setVelocityX(160);
      Assest.default.assets.enemy.anims.play('enemyleft');
    }


    if(!Assest.default.assets.win){
      if (Assest.default.assets.cursors.left.isDown || Assest.default.assets.move=="left" )
          {
            Assest.default.assets.player.setVelocityX(-160);
            Assest.default.assets.player.anims.play('left', true);
          }
          else if (Assest.default.assets.cursors.right.isDown || Assest.default.assets.move=="right" )
              {
                Assest.default.assets.player.setVelocityX(160);
                 
                Assest.default.assets.player.anims.play('right', true);
              }
              else
              {
                Assest.default.assets.player.setVelocityX(0);
                Assest.default.assets.player.anims.play('turn');
              }

      if (Assest.default.assets.cursors.up.isDown && Assest.default.assets.player.body.touching.down)
      {
        Assest.default.assets.jump.play();
        Assest.default.assets.player.setVelocityY(-330);
      }
      
          }

        if(! Assest.default.music.loop){
              Assest.default.assets=null;
              Assest.default.music.stop();
              this.scene.stop('GameScene'); 
              this.scene.start('WelcomeScene');         
        }

  }

  private killPlayer(player, star){
    player.disableBody(true, true);
    Assest.default.assets.platforms.create(400, 150, 'gameover');
    Assest.default.assets.over.play();
    Assest.default.music.stop();
    player.destroy();
    Assest.default.assets.win=true;
//  game.destroy();
//  parent.classList.remove("mystyle");
//  document.body.style.backgroundColor="transparent";
 
}
private overlapStars(player, star){  
    star.x = Math.floor(Math.random() * 736)+64;
    star.y = Math.floor(Math.random() * 236)+64;
  
}

private collectStar (player, star)
{      
  Assest.default.assets.coin.play();
    star.destroy();    
    Assest.default.assets.score += 1;
    Assest.default.assets.scoreText.setText('Score: ' + Assest.default.assets.score);
    if(Assest.default.assets.score==11){
      Assest.default.key=this.physics.add.sprite(100,180,'key').setScale(2);
      Assest.default.key.setCollideWorldBounds(true);  
        this.physics.add.collider(player, Assest.default.key); 
        this.physics.add.collider(Assest.default.airplatform, Assest.default.key);
        this.physics.add.collider(Assest.default.key, Assest.default.assets.platforms);         
        this.physics.add.overlap(player, Assest.default.key, this.collectKey, null, this);
           }


}

private collectKey(player, varkey){ 
  Assest.default.assets.happy.play();  
    varkey.destroy();    
    Assest.default.assets.hasKey=true;
}

 private openDoor(player: any, dooor: any) {
  if(Assest.default.assets.hasKey){ 
    Assest.default.assets.win=true;       
    dooor.anims.play('doorOpen');
    player.destroy();
    Assest.default.assets.platforms.create(400, 150, 'win');
    Assest.default.airplatform.forEach(function(element) { element.destroy(); });
    Assest.default.music.stop();
    Assest.default.assets.won.play();  
    Assest.default.assets.car.anims.play('carmove'); 
} 
  }
 
}
