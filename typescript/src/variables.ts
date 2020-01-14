


  export class initAssest2 {
    player;
    platforms;
    
    enemy;
    dooor;          
    cursors;
    score;
    scoreText;
    hasKey;          
    coin;
    over;
    won;
    jump; 
    happy;//you won layer2
    startScene;
    button;
    btnL;
    btnR;
    brand;
    keys;
    btnJ;
    restart;
    quit: Phaser.GameObjects.Text;
    stick;
    pad;
    move;
    car;
    win;
  
  
    constructor(){
       this.score=0;
  this.win= false;
  this.hasKey=false;
    }
  }

export  default {
key:null,
root: "http://localhost:8080",
music:null,
airplatform:[],
stars:[],
assets: new initAssest2()


}




 

