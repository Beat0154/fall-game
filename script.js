var game = document.getElementById("game");
var character = document.getElementById("character");
var block = document.getElementById("block");
var hole = document.getElementById("hole");
var currentBlocks = [];
var counter = 0;
var updateBlocks = setInterval(function(){
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
        var random = Math.floor(Math.random() * 360);
        hole.style.left = random + "px";
        game.appendChild(hole); 
        game.appendChild(block);
        currentBlocks.push(counter);
        counter++;
    }
    var characterTop = parseFloat(window.getComputedStyle(character).getPropertyValue("top"));
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(characterTop < -20){
        let num = counter - 10;
        alert("u lose. score: " + num);
        clearInterval(updateBlocks);
        Location.reload();
    }
    var drop = 0;
    for (var i = 0; i < currentBlocks.length; i++) {
        var x = currentBlocks[i];
        let iblock = document.getElementById("block".concat(x));
        let ihole = document.getElementById("hole".concat(x));
        var blockTopI = parseFloat(window.getComputedStyle(iblock).getPropertyValue("top"));
        var holeLeftI = parseInt(window.getComputedStyle(ihole).getPropertyValue("left"));
        var holeTopI = parseInt(window.getComputedStyle(ihole).getPropertyValue("top"));
        var newtop = blockTopI - 0.5;
        iblock.style.top = newtop + "px";
        ihole.style.top = newtop + "px";
        if(blockTopI < -20){
            currentBlocks.shift();
        }
        if(blockTopI - 20 < characterTop && blockTopI  > characterTop){
            drop++;
        }
        if(holeLeftI-5 <= characterLeft && 
           characterLeft <= holeLeftI + 25 && 
           blockTopI - 22 < characterTop &&
           blockTopI  > characterTop){
            drop = 0;
            break;
        }
    }
    if(drop == 0){
        if(characterTop < 476){
            character.style.top = characterTop + 2 + "px";
        }
    } else{
        character.style.top = characterTop - 0.5 + "px";
    }
}, 1);