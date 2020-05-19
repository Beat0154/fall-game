var character = document.getElementById("character");
var mousedownID = -1;
function mousedownLeft(event) {
  if(mousedownID==-1)mousedownID = setInterval(whilemousedownLeft, 2);
}
function mouseupLeft(event) {
   if(mousedownID!=-1) {
     clearInterval(mousedownID);
     mousedownID=-1;
   }
}
function whilemousedownLeft() {
   var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left > 0){
        if(window.innerWidth < 400){
            var newleft = left - 3;
        }else{
            var newleft = left - 2;
        }
        character.style.left = newleft + "px";
    }
}
document.getElementById("left").addEventListener("mousedown", mousedownLeft);
document.getElementById("left").addEventListener("mouseup", mouseupLeft);
document.getElementById("left").addEventListener("touchstart", mousedownLeft);
document.getElementById("left").addEventListener("touchend", mouseupLeft);

function mousedownRight(event) {
  if(mousedownID==-1)mousedownID = setInterval(whilemousedownRight, 2);
}
function mouseupRight(event) {
   if(mousedownID!=-1) {
     clearInterval(mousedownID);
     mousedownID=-1;
   }
}
function whilemousedownRight() {
   var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(window.innerWidth < 400){
        var num = window.innerWidth - 20;
    }else{
        var num = 380;
    }
    if(left < num){
        if(window.innerWidth < 400){
            var newleft = left + 3;
        }else{
            var newleft = left + 2;
        }
        character.style.left = newleft + "px";
    }
}
document.getElementById("right").addEventListener("mousedown", mousedownRight);
document.getElementById("right").addEventListener("mouseup", mouseupRight);
document.getElementById("right").addEventListener("touchstart", mousedownRight);
document.getElementById("right").addEventListener("touchend", mouseupRight);

document.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  if(event.key==="ArrowLeft"||event.key==="a"){mousedownLeft();}
  if(event.key==="ArrowRight"||event.key==="d"){mousedownRight();}
  
});

document.addEventListener("keyup", event => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  if(event.key==="ArrowLeft"||event.key==="a"){mouseupLeft();}
  if(event.key==="ArrowRight"||event.key==="d"){mouseupRight();}
  
});