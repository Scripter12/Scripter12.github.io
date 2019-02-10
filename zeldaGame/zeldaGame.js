function start(){
  $("#game").remove();
   setInterval("update()",1000/60);
};
function easy(){
   health = 14;
}
function med(){
   health = 10;
}
function hard(){
   health = 6;
}
window.onload = function(){

var ctx = $("#can")[0].getContext('2d');
var cty = $("#players")[0].getContext('2d');


world();
//object(posx,posy,height,width,speedX,speedY,name,sheetx,sheety,sheetw,sheeth)//

link = new object(200,0,50,50,20,20,hero,0,130,100,145);
key = new object(60,60,32,32,0,0,item);
chest = new object(200,64,40,40,0,0,chest,10,10,220,220);
  for(var i = 0; i < numofArrows;i++){
enemy = new object(360,60 + Math.round(Math.random()* 230),32,32,1 + Math.round(Math.random()* 3),0,arrow);
arrowArry.push(enemy)};
link.drawimg();
key.drawItem();
chest.drawimg();
};

var posX = 0,
posY = 0,
health = 0,
numofArrows = 4,
level = 0;

function object(posx,posy,height,width,speedX,speedY,name,sheetx,sheety,sheetw,sheeth){
var cty = $("#players")[0].getContext('2d');
  this.x = posx;
  this.y = posy;
  this.height = height;
  this.width = width;
  this.speedX = speedX;
  this.speedY = speedY;
  this.name = name;
  this.sheetX = sheetx;
  this.sheetY = sheety;
  this.sheetW = sheetw;
  this.sheetH = sheeth;
  this.pickup = false;
  this.touch = false;
  this.draw = function(){
  cty.fillStyle = "red"; cty.fillRect(this.x,this.y,this.height,this.width);
  cty.fill()
  };
  this.drawItem = function(){
       cty.drawImage(this.name,this.x,this.y,this.width,this.height);
  }
  this.drawimg = function(){
  cty.drawImage(this.name,this.sheetX,this.sheetY,this.sheetW,this.sheetH,this.x,this.y,this.width,this.height)
  }
   this.right = function(){
   this.x += this.speedX;
   }
   this.left = function(){
   this.x -= this.speedX;
   }
   this.down = function(){
   this.y += this.speedY;
   }
   this.up = function(){
   this.y -= this.speedY;
   }

}


var arrowArry = [];

function update(){
    var cty = $("#players")[0].getContext('2d');
    cty.clearRect(0,0,1000,1000);
    Collision (link,key);
    if(key.pickup == false){
    key.drawItem()
    }
    else{
       Collision (link,chest);
    };
    if (chest.pickup == false){
    chest.drawimg()
    }
    else if(chest.pickup == true && link.y > 259){

       key.pickup = false;
       chest.pickup = false;
       key.x = Math.round(Math.random()*280);
       key.y = Math.round(Math.random()*250);
       chest.x = Math.round(Math.random()*280);
       chest.y = Math.round(Math.random()*250);
       link.y = 0;
       level += 1;
    };
    link.drawimg();



     for(var i = 0; i < numofArrows;i++){

   arrowArry.push(enemy)

   arrowArry[i].left();
   arrowArry[i].drawItem();
   if (arrowArry[i].x < 0 ) {
      arrowArry[i].x = 360;
   }


   Collision (link,arrowArry[i]);
   if (arrowArry[i].touch == true){
      health -= 1;
      link.y -= 20;
      if(health == 0){
      var score = level + 1;
         add("Score: Level "+ score );

      }
   }

   };
   var heartArry = [];

       for(var h = 0; h < health;h++){
    love = new object(23 * h,0,20,20,0,0,heart);
    heartArry.push(love);
    heartArry[h].drawItem();
    };
    var stage = level%8;
    switch(stage){
       case 0:
       earth.src="https://0.s3.envato.com/files/142044071/03.jpg";
       link.sheetX = 0;
       world();
       break;
       case 1:
       earth.src = flowers.src;
       link.sheetX = 100;
       world();
       break;
       case 2:
       earth.src= sand.src;
       link.sheetX = 190;
       world();
       break;
       case 3:
       earth.src=grass.src;
       link.sheetX = 280;
       world();
       break;
       case 4:
       earth.src=lava.src;
       link.sheetX = 380;
       world();
       break;
       case 5:
       earth.src=snow.src;
       link.sheetX = 480;
       world();
       break;
       case 6:
       earth.src=egypt.src;
       link.sheetX = 590;
       world();
       break;
       case 7:
       earth.src=rainbow.src;
       link.sheetX = 690;
       world();
       break;
    };
  };





function Collision (ob1,ob2){

 if (ob1.x < ob2.x + ob2.width && ob1.x + ob1.width > ob2.x && ob1.y < ob2.y + ob2.height && ob1.y + ob1.height > ob2.y){
     ob2.pickup = true;
     ob2.touch = true;
 }
 else {
    ob2.touch = false;
 };

}

function world(){
var ctx = $("#can")[0].getContext('2d');
ctx.clearRect(0,0,1000,1000);
posX = 0;
posY = 0;
var stage = [
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0]
];


for (var i = 0; i < stage.length;i++){
   for (var j = 0; j < stage[i].length;j++) {

 switch(stage[i][j]) {
 case 0:
    ctx.drawImage(earth,posX,posY,32,32);
    break;

 };

 posX += 32;
}
 posX = 0;
 posY += 32;
}};


function add(color){
    $("#invent").append("<input type = 'radio' name = 'shirt' id ="+color+"></input><label for = "+color+">"+color+"</label> </br>");
}


var sword = new Audio();
var earth = new Image();
var item = new Image();
var hero = new Image();
var ground = new Image();
var arrow = new Image();
var chest = new Image();
var heart = new Image();
var flowers = new Image();
var sand = new Image();
var lava = new Image();
var grass = new Image();
var snow = new Image();
var egypt = new Image();
var rainbow = new Image();

egypt.src = "http://img12.deviantart.net/367a/i/2006/209/0/7/egypt_texture___2_by_adaae_stock.jpg"
snow.src ="http://www.psd-dude.com/tutorials/resources-images/high-quality-collection-of-free-snow-and-ice-textures/523-snow--on-the-ground-seamless-texture.jpg"
rainbow.src ="https://s-media-cache-ak0.pinimg.com/736x/09/86/9d/09869d921fa955d9d46014021e97ebd8.jpg"
grass.src = "http://www.artinstructionblog.com/wp-content/uploads/2013/07/watercolor-crayons-texture-15.jpg"
lava.src = "http://www.dundjinni.com/forums/uploads/Cryogenes/891_Lava.jpg"
sand.src = "http://www.textures123.com/free-texture/sand/sand-texture4.jpg"
flowers.src = "http://images.all-free-download.com/images/graphicthumb/flowers_tile_shading_vector_287199.jpg"
sword.src = "http://noproblo.dayjo.org/ZeldaSounds/TP/TP_Link_Backflip1.wav"

earth.src = "https://0.s3.envato.com/files/142044071/03.jpg"
item.src = "http://vignette1.wikia.nocookie.net/zelda/images/0/0b/Big_Key_Artwork_(The_Wind_Waker).png/revision/latest?cb=20100402022226"
hero.src = "http://orig13.deviantart.net/3359/f/2015/171/3/4/toon_link_by_saikayden-d8y05dz.gif"
ground.src = "http://cartoon6r.free.fr/pictures/RocksHandDrawnAnti.png"
arrow.src = "http://static.wixstatic.com/media/1829c2_2dd51106f43b4aa28aa66d5bca6bc7fe.png_srz_821_255_85_22_0.50_1.20_0.00_png_srz";
chest.src = "http://vignette2.wikia.nocookie.net/cookierun/images/c/c6/Good_Treasure_Chest_01.png/revision/latest?cb=20150816092702 "
heart.src = "http://content.mycutegraphics.com/graphics/hearts/pink-heart.png"


function moveRight(){
if (link.x < 300){
link.right();};

};

function moveLeft(){
if (link.x > 0){
link.left();};

};

function moveUp(){
if (link.y > 0){
link.up();};

};

function moveDown(){
if (link.y < 260){
link.down();};

};

function attack(){
   sword.play();
};

function hbox(){
   alert("Dodge the arrows while you collect the key to open the chest. Once you open the chest race to the bottom to get to the next level. Leave a comment to tell me your highest score!");
}
