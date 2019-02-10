
var toggle = false;
function slide(){
    var s = document.getElementById("slideBar");
    if (toggle == false){
    s.style.left = "0px";
    toggle = true;
    }
    else{
        s.style.left = "-80px";
        toggle = false;
    }
}
 
