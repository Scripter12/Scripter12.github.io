window.onload = ()=> {
var arr = ["0","0","1","1","2","2","3","3","4","4","5","5"];
shuffle(arr);

for(var i = 0;i < arr.length;i++){

  var template = '<div class = "card" ><div class = "back"><img src = '+ deck[arr[i]].face +'/></div><div class = "front" ><div onclick = "flip(event)" class ='+arr[i]+'></div><div></div>';

  $("#spread").append(template);
};
};

    function shuffle(array) {
    var i = array.length, j, temp;
    while(i-- > 0)
    {
     j = Math.floor(Math.random() * (i+1))
     temp = array[j]
     array[j] = array[i];
     array[i] = temp; }
     return array;
    }


    var fliped = 0;
    var chosen = [];


    function flip(event){

   chosen.push(event.target.className);

    fliped++;

    card = event.target;

   card.parentElement.style.transform = 'rotateY(180deg)';
    //
       //check if matched
    if ( fliped % 2 == 0 && fliped > 0 ){
       if (chosen[0] != chosen[1]){
       //flip back if no match
    var c1 = document.getElementsByClassName(chosen[0]);
   var c2 = document.getElementsByClassName(chosen[1]);
   var s = 0;
   setTimeout(function(){
    while(s < 2){
      c1[s].parentElement.style.transform = 'rotateY(0deg)';

      c2[s].parentElement.style.transform = 'rotateY(0deg)';
      s++;}} ,500);

       }
      //reset the check if matched array
        chosen.splice(0,2);

       }

     };

var deck = [
    {
     face:'http://vignette3.wikia.nocookie.net/gameofthrones/images/e/e9/Margaery-Game-of-Thrones.png/revision/latest?cb=20140615234400'
    },{
        face:'http://vignette2.wikia.nocookie.net/gameofthrones/images/d/d2/Ramsay_S06E09_RESZIED_FOR_INFOBOX.jpg/revision/latest?cb=20160622071734'
    },{
    face:'https://vignette.wikia.nocookie.net/gameofthrones/images/7/71/Emilia-clarke-outtake-127104.jpg/revision/latest?cb=20150312221114'
    },{
face: 'https://vignette.wikia.nocookie.net/gameofthrones/images/c/c2/Drogon_5x02.jpg/revision/latest?cb=20150420161252'
    },{
    face:'http://vignette1.wikia.nocookie.net/gameofthrones/images/2/2d/NightsKingCrop_(Hardhome).PNG/revision/latest?cb=20150616005007'

  },{
      face:'https://vignette.wikia.nocookie.net/gameofthrones/images/7/74/Jon-Snow-Profile-HD.png/revision/latest?cb=20140518133249'
  }
]
