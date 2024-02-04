start = () => {

    var player1 = Math.floor(Math.random() * 6) + 1;
    var dice = "images/dice" + player1 + ".png";

    document.getElementById("player-1").setAttribute("src", dice)



    var player2 = Math.floor(Math.random() * 6) + 1;
    var dice = "images/dice" + player2 + ".png";

    document.getElementById("player-2").setAttribute("src", dice)


    if(player1 > player2){
        document.querySelector("h1").innerHTML = "Player-1 Won!"
    }
    else if(player2 > player1){
        document.querySelector("h1").innerHTML = "Player-2 Won!"
    }
    else{
        document.querySelector("h1").innerHTML = "Draw!"
    }

}