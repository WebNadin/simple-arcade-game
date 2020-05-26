//= partials/pixi.min.js
//= partials/helper.js
//= partials/shapes.js
//= partials/TweenLite.min.js

let figures = [];
let animationStep = 1;
let gravity = 4;


class generationArea {

  constructor() {
    this.item = document.getElementById('generationArea');
    this.width = this.item.clientWidth;
    this.height = this.item.clientHeight;
    this.gravity = 4;
    this.shapesAmount = -1;
    this.activeShapesAmount = 0;
    //this.shapes = ['circle', 'ellipse', 'triangle', 'rectangle', 'pentagon', 'hexagon'];
    this.shapes = ['circle', 'circle', 'circle'];
    this.colors = [0xFFFF0B, 0xFF700B, 0x4286f4, 0x4286f4, 0xf441e8, 0x8dff6d, 0x41ccc9, 0xe03375, 0x95e032, 0x77c687, 0x43ba5b, 0x0ea3ba];
    this.app = new PIXI.Application({
      width: this.width, height: this.height, backgroundColor: 0xffffff, resolution: window.devicePixelRatio || 1
    });
  }

  init() {
    this.createStage();
    setInterval(() => {
      this.createRandomShape();
    }, 1000);
  }

  createStage() {
    this.item.appendChild(this.app.view);
  }

  createRandomShape() {
    this.randomColor = randomElem(this.colors);
    this.randomShape = randomElem(this.shapes);
    this.shape = new Shape(this.randomColor, this.randomShape, this.width, this.app);
    this.shape.render();
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  let stage = new generationArea();
  stage.init();
});










