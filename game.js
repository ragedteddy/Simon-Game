
var level=0;
var index=0;
var colorId =["blue", "green", "red", "yellow"];
var colors = [];

$( document ).keypress(function() {
    if(level===0){
        startGame();
    }
});

function startGame(){
    index=0;
    colors.push(colorId[random4()]);
    console.log(colors[colors.length-1]);
    setTimeout(function(){
        changeLook(colors[colors.length-1], "pressed-show");
    }, 1000);
    level++ ;
    $( "#level-title" ).text( "Level " + level );
}


//generating random numbers 1-4

function random4(){
    var num= Math.floor(Math.random() * 4);
    return num;
}

// Handling pressing of a button

$( ".btn" ).click(function() {
    if(level===0){
        return;
    }
    if(index != colors.length-1){
        console.log("first is running");
        if(this.id=== colors[index]){
            changeLook(this.id, "pressed");
            index++;
        }else{
            wrongAnswer();
        }
    }else{
        console.log("second is running");
        if(this.id=== colors[index]){
            changeLook(this.id, "pressed");
            index++;
            startGame();
        }else{
            wrongAnswer();
        }
    }
});

function wrongAnswer(){
    index = level =0;
    colors = [];
    $( "body" ).addClass( "game-over" );

    audio = new Audio("sounds/wrong.mp3" );
    audio.play();

    setTimeout(function(){
         $( "body" ).removeClass( "game-over" );
    }, 200);

    $( "#level-title" ).text( "Game Over. Press any Key to Start" );
}

function changeLook(buttonId, className){
    $( "#"+ buttonId ).addClass( className );

    audio = new Audio("sounds/"+ buttonId +".mp3" );
    audio.play();

    setTimeout(function(){
         $( "#"+ buttonId ).removeClass( className );
    }, 200);
}

