


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
canvas.width = 1366;
canvas.height = 663;
// ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e){
    if(!isDrawing) return;
    // ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    // hue++;
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
})
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);


const sizeSlider = document.getElementById("size_input");
sizeSlider.oninput = (()=>{
    let size = sizeSlider.value;
    ctx.lineWidth = size;
    document.getElementById("size_circle").style.height = `${size}px`;
    document.getElementById("size_circle").style.width = `${size}px`;
})

const colorInput = document.getElementById("color_input");
colorInput.oninput = (()=> {
    let color = colorInput.value;
    ctx.strokeStyle = `${color}`;
})

const clear = document.getElementById("clear");
clear.addEventListener('click', ()=> {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})