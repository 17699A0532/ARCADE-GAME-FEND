let score = 0;
let scoreSection = document.getElementById("score");
// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x=this.x + this.speed * dt;
    if(this.x==0){
    this.speed=100+Math.floor(Math.random()*400);
    }
    if(this.x>500){
      this.speed=100+Math.floor(Math.random()*400);
        this.x=0;
    }
    // console.log(this.x);
    // console.log(this.y);
        if(player.x<this.x+60 && player.x+60>this.x && player.y<this.y+60 && player.y+60>this.y){
           player.x=200;
           player.y=400;
           player.sprite = 'images/char-cat-girl.png';
           score=0;
           scoreSection.innerHTML=score;
           document.getElementById("container").style.background="#fff";
           alert("Ops You are caught");
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player{
  constructor(x,y,sprite){
  this.x=x;
  this.y=y;
  this.sprite= 'images/char-cat-girl.png';
  }
}

Player.prototype.update=function(dt){

}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies=[];
var enemyLocations=[60,143,226];
enemyLocations.map((positionY)=>{
var enemyItem=new Enemy(0,positionY,150);
  allEnemies.push(enemyItem);
})

var player=new Player(200,400);

Player.prototype.handleInput=function(key){
  if(key=='left'){
    this.x=this.x-101;
    if(this.x<0){
      this.x=0;
    }
  } else if(key=='right'){
    this.x=this.x+101;
    if(this.x>404){
      this.x=404;
    }
  } else if(key=='up'){
    this.y=this.y-82;

    if(this.y<60){

    setTimeout(()=>{
       this.x=200;
       this.y=400;
     }, 100);
     score=score+1;
     scoreSection.innerHTML=score;
     if(score==5){
       document.getElementById("container").style.background="#edfbed";
     } else if(score==10){
       document.getElementById("container").style.background="#edeefb";
     }
    }
  }
  if(key=='down'){
    this.y=this.y+82;
    if(this.y>404){
      this.y=404;
    }
  }
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
