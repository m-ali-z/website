var num1=Math.random()*6;
num1=Math.floor(num1)+1;

var randomImage="dice"+num1+".png";
var randomImageSrc="images/"+randomImage;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src",randomImageSrc);


var num2=Math.random()*6;
num2=Math.floor(num2)+1;

var randomImage="dice"+num2+".png";
var randomImageSrc="images/"+randomImage;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src",randomImageSrc);

if(num2>num1)
{
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else if(num1>num2)
{
    document.querySelector("h1").innerHTML="Player 1 wins";

}
else{
    document.querySelector("h1").innerHTML="Draw!!";
    
}

