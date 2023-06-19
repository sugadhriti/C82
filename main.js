
var mouseevent = "empty";
var current_position_of_mouse_X ,current_position_of_mouse_Y
canvas = 
document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "blue";
width_of_line = 4;
radius = 4;


canvas.addEventListener("mousedown", my_mousedown);

 function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);

 function my_mouseup(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

 function my_mouseleave(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove );

function my_mousemove(e)
{
    current_position_of_mouse_X = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
        console.lof("Current position of X and Y coordinates - ");
        console.log(" x = " + current_position_of_mouse_X + "Y = " + current_position_of_mouse_Y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_X,current_position_of_mouse_Y,0,2 * Math.PI);
        ctx.stroke();

    }
}