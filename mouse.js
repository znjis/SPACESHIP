


function Down(e){
    if (e.pageX < carre.position.x + carre.width + canvas.offsetLeft && e.pageX > carre.position.x + canvas.offsetLeft && e.pageY < carre.position.y + carre.height + canvas.offsetTop && e.pageY > carre.position.y + canvas.offsetTop){
        carre.position.x = e.pageX - canvas.offsetLeft;
        carre.position.y = e.pageY - canvas.offsetTop;
        drag = true;
        canvas.onmousemove = Move;
    }
}





function Move(e){
    if (e.pageX < canvas.width - canvas.offsetLeft && e.pageX > canvas.offsetLeft && e.pageY < canvas.height + canvas.offsetTop && e.pageY > canvas.offsetTop ) {
        rocket.position.x = e.pageX - canvas.offsetLeft;
        rocket.position.y = e.pageY - canvas.offsetTop;
    }
}


function Move(e){

}