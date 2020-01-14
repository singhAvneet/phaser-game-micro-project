// import Player from '../prefabs/player';
// import Enemy from '../prefabs/enemy';
// import HUD from '../prefabs/hud';

export default class Play extends Phaser.State {

    create() {

        // this.farback = this.add.tileSprite(0, 0, 800, 2380, 'farback');

        // this.game.time.slowMotion = 1;

        // this.enemies = this.add.group();
        // this.enemies.enableBody = true;

        // this.player = new Player({
        //     game: this.game,
        //     x: this.game.world.centerX,
        //     y: 0.92 * this.game.world.height,
        //     health: 100,
        //     asset: 'smallfighter',
        //     frame: 1
        // });
        // this.game.stage.addChild(this.player);

        // this.hud = new HUD({
        //     game: this.game,
        //     player: this.player
        // });

        // this.game.input.onDown.add(() => {
        //     this.game.time.slowMotion = 1;
        // });

        // this.game.input.onUp.add(() => {
        //     this.game.time.slowMotion = 3;
        // });

        // this.enemyTime = 0;
        // this.enemyInterval = 1.5;
        // this.enemyShootTime = 0;
        // this.enemyShootInterval = 1;
        // this.playerShootTime = 0;
        // this.playerShootInterval = 0.16;

        // this.game.time.events.loop(Phaser.Timer.SECOND * 10, () => {
        //     if(this.enemyInterval > 0.2 ){
        //         this.enemyInterval -= 0.1;
        //     }
        // });

        // this.overlayBitmap = this.add.bitmapData(this.game.width, this.game.height);
        // this.overlayBitmap.ctx.fillStyle = '#000';
        // this.overlayBitmap.ctx.fillRect(0, 0, this.game.width, this.game.height);

        // this.overlay = this.add.sprite(0, 0, this.overlayBitmap);
        // this.overlay.visible = false;
        // this.overlay.alpha = 0.75;

        // this.music = this.game.add.audio('playMusic');
        // this.bulletHitSound = this.add.sound('bulletHit');
        // this.enemyExplosionSound = this.add.sound('enemyExplosion');
        // this.playerExplosionSound = this.add.sound('playerExplosion');
        // this.gameOverSound = this.add.sound('gameOver');

        // this.music.loopFull();

 
    
        coin = this.sound.add('coin'); 
        music = this.sound.add('music'); 
        over = this.sound.add('over'); 
        won = this.sound.add('won'); 
        jump = this.sound.add('jump'); 
        happy = this.sound.add('happy');//you won 
        
       this.sound.context.resume();
       platforms = this.physics.add.staticGroup();
       this.add.image(390, 250, 'worker');
       platforms.create(400, 300, 'sky');
       airplatform[0] = platforms.create(440, 400, 'ground');
       airplatform[1] = platforms.create(390, 250, 'ground'); 
       airplatform[2] = platforms.create(650, 190, 'ground');
       airplatform[3] = platforms.create(650, 300, 'ground');//low
       airplatform[4] = platforms.create(16, 170, 'ground');
       airplatform[5] = platforms.create(105, 280, 'ground'); 
       platforms.create(0, 504, 'brown2').setOrigin(0, 0).setScale(3).refreshBody();
       platforms.create(0, 441, 'ground2').setOrigin(0, 0).setScale(2).refreshBody();
       scoreText = this.add.text(16, 16, 'SCORE: 0', { fontSize: '30px', fill: '#fff' });
       
       btnL = this.add.sprite(100, 530, 'btn').setScale(2).setInteractive();
       btnR = this.add.sprite(300, 530, 'btn').setScale(2).setInteractive();
       btnJ = this.add.sprite(700, 530, 'btnJ').setScale(2).setInteractive();
       btnL.on('pointerup', function (pointer) {
           move="stop";
           this.anims.play('buttonUp', true);
       });
       btnL.on('pointerdown', function (pointer) {
           move="left";
           this.anims.play('buttonDown', true);
       });
       btnR.on('pointerup', function (pointer) {
           move="stop";
           this.anims.play('buttonUp', true);
       });
       btnR.on('pointerdown', function (pointer) {
           move="right";
           this.anims.play('buttonDown', true);
       });
       btnJ.on('pointerdown', function (pointer) {
           jump.play();
           this.anims.play('buttonJDown', true);
           player.setVelocityY(-330);  
       });
       btnJ.on('pointerup', function (pointer) {   
           this.anims.play('buttonJUp', true);   
       });
       
       player = this.physics.add.sprite(0, 100, 'dude');           
       player.setBounce(0.2);//0.2
       player.setCollideWorldBounds(true);
       player.body.setGravityY(150);
       
       enemy = this.physics.add.sprite(50, 400, 'enemy');  
       enemy.setCollideWorldBounds(true);
       enemy.body.setGravityY(150);
       
       
       car = this.physics.add.sprite(870,400, 'car');
       car.setCollideWorldBounds(true);
       car.body.setGravityY(150);
       car.flipX= true;
       this.physics.add.collider(car, platforms);
       this.physics.add.overlap(car, enemy,function(){enemy.destroy()} , null, this);
       
       dooor = this.physics.add.sprite(800,410, 'door');//876 
       dooor.setCollideWorldBounds(true);
       dooor.body.allowGravity=false; 
       this.physics.add.overlap(player, dooor, openDoor, null, this);
       
       this.anims.create({
           key: 'buttonDown',
           frames: [ { key: 'btn', frame: 0 } ]   
       });
       this.anims.create({
           key: 'buttonUp',
           frames: [ { key: 'btn', frame: 1 } ]   
       });
       this.anims.create({
           key: 'buttonJDown',
           frames: [ { key: 'btnJ', frame: 0 } ]   
       });
       this.anims.create({
           key: 'buttonJUp',
           frames: [ { key: 'btnJ', frame: 1 } ]   
       });
       this.anims.create({
           key: 'doorClose',
           frames: [ { key: 'door', frame: 0 } ]   
       });
       this.anims.create({
           key: 'doorOpen',
           frames: this.anims.generateFrameNumbers('door',{ start: 0, end: 4 }),
           frameRate:20,
       
       });
       this.anims.create({
           key: 'rotatecCoins',
           frames: this.anims.generateFrameNumbers('star',{ start: 0, end: 3 }),
           frameRate:20,
           repeat:-1
       });
       this.anims.create({
           key: 'right',
           frames: this.anims.generateFrameNumbers('dude', { start: 3, end: 4 }),
           frameRate: 3,
           repeat: -1
       });
       this.anims.create({
           key: 'turn',
           frames: [ { key: 'dude', frame: 0 } ],
           frameRate: 20
       });
       this.anims.create({
           key: 'left',
           frames: this.anims.generateFrameNumbers('dude', { start: 1, end: 2 }),
           frameRate: 3,
           repeat: -1,
           
       });
       this.anims.create({
           key: 'enemyleft',
           frames: this.anims.generateFrameNumbers('enemy', { start: 0, end: 1 }),
           frameRate: 3,
           repeat: -1,
           
       });
       this.anims.create({
           key: 'enemyright',
           frames: this.anims.generateFrameNumbers('enemy', { start: 2, end: 3 }),
           frameRate: 3,
           repeat: -1,
           
       });
       this.anims.create({
           key: 'carmove',
           frames: this.anims.generateFrameNumbers('car', { start: 1, end: 5 }),
           frameRate: 4,
           repeat: -1,
           
       });
       this.anims.create({
           key: 'cardisable',   
           frames: [ { key: 'car', frame: 5 } ]
           
       });
       
       cursors = this.input.keyboard.createCursorKeys();
       this.physics.add.collider(player, platforms);
       this.physics.add.collider(player, airplatform);
       this.physics.add.collider(stars, platforms);
       this.physics.add.collider(dooor, platforms);
       this.physics.add.collider(player, dooor);
       this.physics.add.collider(enemy, platforms);
       // this.physics.add.collider(car, platforms);
       
       
       
       for (var i=1,ry,rx;i<12;i++,ry=Math.floor(Math.random() * 236)+64,rx=Math.floor(Math.random() * 736)+64){
       
           stars[i] = this.physics.add.sprite(rx, ry, 'star'); 
           stars[i].setCollideWorldBounds(true);
           stars[i].setBounce(0.2);//0.2
           stars[i].body.allowGravity=false; 
           this.physics.add.overlap(player, stars[i], collectStar, null, this);
           this.physics.add.overlap(airplatform, stars[i], overlapStars, null, this);    
           this.physics.add.overlap(player ,enemy, killPlayer, null, this);             
       
           stars[i].anims.play('rotatecCoins');
        
       }
       
       startScene = this.add.sprite(400, 300, 'start');
       keys = this.add.sprite(400, 470, 'keys');
       button = this.add.sprite(400, 350, 'button').setInteractive();
       
       brand = this.add.sprite(400, 200, 'brand');
       button.on('pointerdown', function (pointer) {
           startScene.destroy(); 
           music.play();
            button.destroy();brand.destroy();keys.destroy();
           music.loop=true;
       });
       
       
       dooor.anims.play('doorClose');
       
       function killPlayer(player, star){
           player.disableBody(true, true);
           platforms.create(400, 150, 'gameover');
           over.play();
           music.stop();
          win='';
           player.destroy();
        
           music.stop(); 
        
       }
       function overlapStars(player, star){  
           star.x = Math.floor(Math.random() * 736)+64;
           star.y = Math.floor(Math.random() * 236)+64;
         
       }
       
       function collectStar (player, star)
       {      
           coin.play();
           star.destroy();    
           score += 1;
           scoreText.setText('Score: ' + score);
           if(score==11){
               key=this.physics.add.sprite(100,180,'key').setScale(2);
               key.setCollideWorldBounds(true);  
               this.physics.add.collider(player, key); 
               this.physics.add.collider(airplatform, key);
               this.physics.add.collider(key, platforms);         
               this.physics.add.overlap(player, key, collectKey, null, this);
                  }
       
       
       }
       
       function collectKey(player, varkey){ 
           happy.play();  
           varkey.destroy();    
           hasKey=!hasKey;
       }
       
       function openDoor(player,door){
          
           if(hasKey){
               
               dooor.anims.play('doorOpen');
               player.disableBody(true, true); 
               platforms.create(400, 150, 'win');
               airplatform.forEach(function(element) { element.destroy(); });
               btnL.destroy();btnR.destroy();btnJ.destroy();
               coin.destroy();music.destroy();over.destroy();
               hasKey=!hasKey; 
               won.play();
               music.stop(); 
               win='true';
               car.anims.play('carmove'); 
           } 
       } 


    }

    update() {

        // this.enemyTime += this.game.time.physicsElapsed;
        // this.enemyShootTime += this.game.time.physicsElapsed;
        // this.playerShootTime += this.game.time.physicsElapsed;

        // if (this.enemyTime > this.enemyInterval) {
        //     this.enemyTime = 0;

        //     this.createEnemy({
        //         game: this.game,
        //         x: this.game.rnd.integerInRange(6, 76) * 10,
        //         y: 0,
        //         speed: {
        //             x: this.game.rnd.integerInRange(5, 10) * 10 * (Math.random() > 0.5 ? 1 : -1),
        //             y: this.game.rnd.integerInRange(5, 10) * 10
        //         },
        //         health: 9,
        //         bulletSpeed: this.game.rnd.integerInRange(10, 20) * 10,
        //         asset: 'alien'
        //     });
        // }

        // if (this.enemyShootTime > this.enemyShootInterval) {
        //     this.enemyShootTime = 0;
        //     this.enemies.forEachAlive(enemy => enemy.shoot());
        //     if (!this.player.alive) {
        //         this.game.world.bringToTop(this.overlay);
        //     }
        // }

        // if (this.playerShootTime > this.playerShootInterval) {
        //     this.playerShootTime = 0;
        //     if (this.player.alive) {
        //         this.player.shoot();
        //     }
        // }

        // this.game.physics.arcade.overlap(this.player.bullets, this.enemies, this.hitEnemy, null, this);

        // this.game.physics.arcade.overlap(this.player, this.enemies, this.crashEnemy, null, this);

        // this.enemies.forEach(enemy => this.game.physics.arcade.overlap(this.player, enemy.bullets, this.hitPlayer, null, this));

        // this.farback.tilePosition.y += 3;

        if(win=='true'){   
            car.setVelocityX(-80);            
           }
           This.sound.context.resume();
           if(enemy.x>=630){
               enemy.setVelocityX(-160);
               enemy.anims.play('enemyright');
           }
           if(enemy.x<=50){        
               enemy.setVelocityX(160);
               enemy.anims.play('enemyleft');
           }
          
           if(win=="false"){
           if (cursors.left.isDown || move=="left" )
               {
                   player.setVelocityX(-160);
                   player.anims.play('left', true);
               }
               else if (cursors.right.isDown || move=="right" )
                   {
                       player.setVelocityX(160);
                      
                       player.anims.play('right', true);
                   }
                   else
                   {
                       player.setVelocityX(0);
                       player.anims.play('turn');
                   }
               }
                   if (cursors.up.isDown && player.body.touching.down)
                   {
                       jump.play();
                       player.setVelocityY(-330);                
                   } 
       
    }

    createEnemy(data) {

        let enemy = this.enemies.getFirstExists(false);

        if (!enemy) {
            enemy = new Enemy(data);
            this.enemies.add(enemy);
        }
        enemy.reset(data);
    }

    hitEffect(obj, color) {
        let tween = this.game.add.tween(obj);
        let emitter = this.game.add.emitter();
        let emitterPhysicsTime = 0;
        let particleSpeed = 100;
        let maxParticles = 10;

        tween.to({tint: 0xff0000}, 100);
        tween.onComplete.add(() => {
            obj.tint = 0xffffff;
        });
        tween.start();

        emitter.x = obj.x;
        emitter.y = obj.y;
        emitter.gravity = 0;
        emitter.makeParticles('particle');

        if (obj.health <= 0) {
            particleSpeed = 200;
            maxParticles = 40;
            color = 0xff0000;
        }

        emitter.minParticleSpeed.setTo(-particleSpeed, -particleSpeed);
        emitter.maxParticleSpeed.setTo(particleSpeed, particleSpeed);
        emitter.start(true, 500, null, maxParticles);
        emitter.update = () => {
            emitterPhysicsTime += this.game.time.physicsElapsed;
            if(emitterPhysicsTime >= 0.6){
                emitterPhysicsTime = 0;
                emitter.destroy();
            }

        };
        emitter.forEach(particle => particle.tint = color);
        if (!this.player.alive) {
            this.game.world.bringToTop(this.overlay);
        }
    }

    hitEnemy(bullet, enemy) {
        this.bulletHitSound.play("",0,0.5);
        enemy.damage(bullet.health);
        this.hitEffect(enemy, bullet.tint);
        if (!enemy.alive) {
            this.enemyExplosionSound.play("",0,0.5);
            this.hud.updateScore(enemy.maxHealth);
        }
        bullet.kill();
    }

    hitPlayer(player, bullet) {
        this.bulletHitSound.play("",0,0.5);
        player.damage(bullet.health);
        this.hud.updateHealth();
        this.hitEffect(player, bullet.tint);
        if (!player.alive) {
            this.playerExplosionSound.play();
            this.gameOver();
        }
        bullet.kill();
    }

    crashEnemy(player, enemy) {
        enemy.damage(enemy.health);
        player.damage(enemy.health);
        this.hitEffect(player);
        this.hitEffect(enemy);
        if (!enemy.alive) {
            this.enemyExplosionSound.play("",0,0.5);
            this.hud.updateScore(enemy.maxHealth);
        }
        this.hud.updateHealth();
        if (!player.alive) {
            this.playerExplosionSound.play();
            this.gameOver();
        }
    }

    gameOver(){
        this.game.time.slowMotion = 3;
        this.overlay.visible = true;
        this.game.world.bringToTop(this.overlay);
        let timer = this.game.time.create(this.game, true);
        timer.add(3000, () => {
            this.music.stop();
            this.gameOverSound.play();
            this.game.state.start('Over');
        });
        timer.start();
    }

}
