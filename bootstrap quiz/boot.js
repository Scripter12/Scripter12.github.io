$(function(){
$("em").addClass("fa fa-bolt");});
function takeQuiz(){
for (var i = 0;i<questions.length;i++){
$("#testArea").before("<p class='ques' id = '"+i+"'>"+questions[i].question+"</p>")

for (var c = 0;c<questions[i].choices.length;c++){
$("#"+i).append("<li><input type='radio' name='"+i+"' value='"+c+"'> "+ questions[i].choices[c] +"</input></li>")};
};

$("#testArea").before("<div id='contain'> <button id = 'sub'onclick = 'checkAnswers();hideSub()'>Submit</button> <p id = 'results'> </p> </div>");

};

function hideFront(){
  $(".container").hide();
};

function goBack(){
    $(".container").show();
    $(".ques").remove();
    $("#contain").remove();
    correct = 0;
};

function hideSub(){
    $("#sub").remove();
};

function checkAnswers(){
  for(var t = 0;t<questions.length;t++){
    if (questions[t].answer==  $("input:radio[name='"+t+"']:checked").val()
){
       correct++
    };};
    $("#results").html("You got "+correct+" out of 5 correct!");
    };

var begin = false;
var correct = 0;



var questions = [{
   question:"what is <img src='https://i.stack.imgur.com/3zB62.png'></img>",
   choices:['a badge','an img-circle','a jumbotron'],
   answer:0
   },
   {
   question: "what is  <img src='https://v4-alpha.getbootstrap.com/examples/screenshots/jumbotron.jpg'",
   choices:["a glypicon","an img-thumbnail","a jumbotron"],
   answer:2
   },
   {
   question: "what is <img src='https://leanpub.com/site_images/frontend/leanpub_info-circle.png'></img>",
   choices:["a jumbotron","a glypicon","a badge"],
   answer:1
   },
   {
   question:"what is <img src='http://11986-presscdn-0-77.pagely.netdna-cdn.com/wp-content/uploads/2007/11/small-thumbnails.jpg'></img>",
   choices:["an img-circle","a badge","an img-thumbnail"],
   answer:2
   },
   {
   question:"what is <img src= 'https://i.stack.imgur.com/zvbrI.png'></img>",
   choices:['an img-circle','an img-thumbnail','a jumbotron'],
   answer:0
   }]
