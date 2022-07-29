function refresh(){
    var p11 = Math.floor(Math.random()*6)+1;
    var p22 = Math.floor(Math.random()*6)+1;
   
    document.querySelector(".img1").setAttribute("src", "images/dice" + p11 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + p22 + ".png");
    
    if (p11>p22){
        document.querySelector("h1").innerHTML = "Player1 Wins🚩";
    }
    else if (p11<p22){
        document.querySelector("h1").innerHTML = "Player2 Wins🚩";
    }
    else if (p11==p22){
        document.querySelector("h1").innerHTML = "It's a Draw 🎌";
    }
}