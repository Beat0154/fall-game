var game = document.getElementById("game");
var character = document.getElementById("character");
var block = document.getElementById("block");
var hole = document.getElementById("hole");
var currentBlocks = [];
var counter = 0;
setInterval(function(){
    var holeLast = document.getElementById("hole".concat(counter-1));
    var blockLast = document.getElementById("block".concat(counter-1));
    if(counter > 0){
        var blockLastTop = parseInt(window.getComputedStyle(blockLast).getPropertyValue("top"));
        var holeLastTop = parseInt(window.getComputedStyle(holeLast).getPropertyValue("top"));
    }
    if(blockLastTop < 400||counter==0){
        var block = document.createElement("div");
        var hole = document.createElement("div");
        block.setAttribute("class", "block");
        block.setAttribute("id", "block".concat(counter));
        hole.setAttribute("class", "hole");
        hole.setAttribute("id", "hole".concat(counter));
        block.style.top = blockLastTop + 100 + "px";
        hole.style.top = holeLastTop + 100 + "px";
        var random = Math.floor(Math.random() * 380);
        hole.style.left = random + "px";
        game.appendChild(hole); 
        game.appendChild(block);
        currentBlocks.push(counter);
        counter++;
    }
},100);

setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    let block1 = currentBlocks[0];
    let hole1 = currentBlocks[0];
    let block2 = document.getElementById("block".concat(block1));
    let hole2 = document.getElementById("hole".concat(hole1));
    var blockTop = parseInt(window.getComputedStyle(block2).getPropertyValue("top"));
    var holeLeft = parseInt(window.getComputedStyle(hole2).getPropertyValue("left"));
    if((holeLeft <= characterLeft && characterLeft <= holeLeft + 20) || (blockTop > 20)){
        var newtop = blockTop - 5;
        block2.style.top = newtop + "px";
        hole2.style.top = newtop + "px";
        currentBlocks.forEach(function(i){
            let iblock = document.getElementById("block".concat(i));
            let ihole = document.getElementById("hole".concat(i));
            var blockTopI = parseInt(window.getComputedStyle(iblock).getPropertyValue("top"));
            var holeLeftI = parseInt(window.getComputedStyle(ihole).getPropertyValue("left"));
            var newtop = blockTopI - 5;
            iblock.style.top = newtop + "px";
            ihole.style.top = newtop + "px";
            if(blockTopI < -20){
            console.log(currentBlocks);
                currentBlocks.shift();
            console.log(currentBlocks);
            }
        });
    }
}, 1);