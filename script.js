const FPS = 30;
const SHIP_Size = 35;
var canv = document.getElementById("gameCanvas");
var ctx =  canv.getContext("2d");

var ship = {
    x : canv.width / 2,
    y : canv.height / 2,
    r : SHIP_Size / 2,
    a :90/180 * Math.PI
}
//setup event handlers
// document.addEventListener("keydown",keyDown);
// document.addEventListener("keyup",keyUp);

//set up time game loop
setInterval(update, 1000 / FPS);

function update(){
    //draw space
    ctx.fillstyle  = 'black';
    ctx.fillRect(0,0,canv.width, canv.height)
    //draw ship
    ctx.strokeStyle = "white";
    ctx.lineWidth = SHIP_Size/20;
    ctx.beginPath();
    ctx.moveTo( //nose of the ship
        ship.x + 4 / 3 * ship.r * Math.cos(ship.a), 
        ship.y - 4 / 3 * ship.r * Math.sin(ship.a) 
    )
    ctx.lineTo(//sayap kiri
        ship.x - ship.r * ( 2 / 3 *  Math.cos(ship.a) + Math.sin(ship.a)) , 
        ship.y + ship.r * (2 / 3 * Math.sin(ship.a) - Math.cos(ship.a))
    )
    ctx.lineTo(//sayap kanan
        ship.x - ship.r * (2 / 3 * Math.cos(ship.a) - Math.sin(ship.a)) , 
        ship.y + ship.r * (2 / 3 * Math.sin(ship.a) + Math.cos(ship.a))
    )
    ctx.closePath();
    ctx.stroke();
    //rotate ship

    //move ship
        
    //center dot
    ctx.fillstyle = "red";
    ctx.fillRect(ship.x-1, ship.y-1, 2, 2)
} 