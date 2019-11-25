var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
function voiture() {
  ctx.fillStyle = "#4da650";
  ctx.fillRect(100, 100, 200, 50); //(x, y, dx, dy)
  ctx.fillRect(50, 150, 300, 50);
}
function rouesGauche(){
  ctx.fillStyle = "#cecece";
  ctx.arc(80,230,30,Math.PI*2, false); //(x, y, Rayon, Angle)
  ctx.fill();
  ctx.stroke();
}
function rouesDroite(){
  ctx.fillStyle = "#cecece";
  ctx.beginPath();
  ctx.arc(320,230,30,Math.PI*2, false);
  ctx.fill();
  ctx.stroke();
}
function main() {
  voiture();
  rouesGauche();
  rouesDroite();
}
main();
