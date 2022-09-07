
const canvas = document.querySelector('canvas');
const c = canvas.getContext("2d");

const planet = new Image();
const spaceship = new Image();

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

planet.src = "earth-modified.png";  // planet's image
spaceship.src = "spaceship-modified.png";  // rocket's image

document.body.style.backgroundImage = "url(IMAGES/backgroundBLUE.png)"  // if i wanna put a background

c.drawImage(planet, 0, 0, 50, 50);
// What variables am i gonna need?

const score = 0;





// this is going to be the spaceship's template
class Player{
    constructor(){
        this.position = {
            x: 0,
            y: 0
        }
        this.width = 85
        this.height = 75

    }

    draw(){
        c.drawImage(spaceship, this.position.x, this.position.y, this.width, this.height)
    }
    update(){
    }
}

// this is going to be the enemies class template
class Enemy{
    Null
}


// the game will be playable with the mouse
    // therefore i need a mouse event listener

const rocket = new Player();  // we create the spaceship object




// mouse functionality

canvas.onmousemove = Move;

function Move(e){
    if (e.pageX < canvas.width - canvas.offsetLeft && e.pageX > canvas.offsetLeft && e.pageY < canvas.height + canvas.offsetTop && e.pageY > canvas.offsetTop ) {
        //if (Math.pow(rocket.position.x, 2) + Math.pow(rocket.position.y, 2) == Math.pow(641, 2)) {
        rocket.position.x = e.pageX - canvas.offsetLeft - 42.5;  // the substraction is just to center the mouse on the object
        rocket.position.y = e.pageY - canvas.offsetTop - 33;    // ^^^
        //}
    }
}












function animate(){
    c.clearRect(0, 0, canvas.width, canvas.height);
	//player.update();
    rocket.draw();
    c.drawImage(planet, canvas.width/2 - 100, canvas.height/2 - 100, 200, 200);
    requestAnimationFrame(animate);
}

animate();
