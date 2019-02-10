window.onload = function(){
initSpiral();

}

function initSpiral(){
var can = document.getElementById("can")
var ctx = can.getContext("2d");
ctx.clearRect(0,0,1000,1000);
recursion();
};

//make the spiral
function recursion(){
var can = document.getElementById("can");
var ctx = can.getContext("2d");
ctx.strokeStyle = color;

if (end < 700){

 for (var i = start; i < end ;i++){
setTimeout(function(){
  gap += space;
  angle = a * i;
  x=(gap+angle)*Math.cos(angle);
  y=(gap+angle)*Math.sin(angle);
  ctx.lineTo(x + can.width/2,y + can.height/2);
  ctx.stroke();

  }

  ,1000);
  };
  start += 1;
  end += 1;
  recursion();}

  };

var start = 0,
end = 1,
space = 0.1,
gap = 1,
a = 0.1,
color = "aqua";

function change(){
   start = 0;
   end = 1;
   gap = 1;
   var input = document.getElementsByTagName("input");
   var prog = document.getElementById("p")
   color = input[0].value;
   prog.style.backgroundColor = input[0].value;

  initSpiral();
  }
