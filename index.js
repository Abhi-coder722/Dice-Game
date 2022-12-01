var r1=Math.ceil(Math.random()*6);
var r2=Math.ceil(Math.random()*6);
document.querySelector(".img1").setAttribute("src","images/dice"+r1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+r2+".png");

if (r1>r2){
    document.querySelector("h1").innerHTML="🚩 Abhishek Won!";
}
else if (r1<r2){
    document.querySelector("h1").innerHTML="You Won! 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
