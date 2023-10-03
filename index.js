var r1 = Math.round(Math.random()*5);
console.log(r1+1);
var src1 = "images/dice"+(r1+1)+".png"
document.querySelector(".img1").setAttribute("src",src1);

var r2 = Math.round(Math.random()*5);
console.log(r2+1);
var src2 = "images/dice"+(r2+1)+".png"
document.querySelector(".img2").setAttribute("src",src2);

if (r1>r2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if (r1<r2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}