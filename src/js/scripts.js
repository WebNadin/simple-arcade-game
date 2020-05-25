//= partials/helper.js
//= partials/pixi.min.js

let sizeStep = 8;
const app = new PIXI.Application({
    width: sizeStep*61, height: sizeStep*39, backgroundColor: 0xffffff, resolution: window.devicePixelRatio || 1
});
document.getElementById('generationArea').appendChild(app.view);

app.view.style.position = "absolute";
app.view.style.width = document.getElementById('generationArea').innerWidth;
app.view.style.height = document.getElementById('generationArea').innerHeight;
app.view.style.display = "block";
app.view.style.boxSizing = "border-box";


const container = new PIXI.Container();

app.stage.addChild(container);



document.addEventListener("DOMContentLoaded", function (event) {
  console.log('Hello');
});






