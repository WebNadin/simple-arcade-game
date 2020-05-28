//= partials/pixi.min.js
//= partials/helper.js
//= partials/shapes.js

let figures = [];
let figuresSurfaceArea = 0;
let animationStep = 1000;
let gravity = 4;
let shapesNumber = 4;
let shapes = ['circle', 'ellipse', 'triangle', 'rectangle', 'pentagon', 'hexagon', 'random'];
let colors = [0xFFFF0B, 0xFF700B, 0x4286f4, 0x4286f4, 0xf441e8, 0x8dff6d, 0x41ccc9, 0xe03375, 0x95e032, 0x77c687, 0x43ba5b, 0x0ea3ba];

class Tools {
  constructor() {
    this.gravityButtons = [...document.querySelectorAll('.js-gravity')];
    this.gravityStep = 2;

    this.increaseButtons = [...document.querySelectorAll('.js-increase')];
  }

  gravityController(el) {
    this.gravityField = el.target.closest('.tools__item').querySelector('.js-gravityValue');
    this.gravityPrev = this.gravityField.textContent;
    if (el.target.classList.contains('js-increase')) {
      this.gravityField.textContent = +this.gravityPrev + this.gravityStep;
      gravity = +this.gravityPrev + this.gravityStep;
    } else if (el.target.classList.contains('js-decrease')){
      this.gravityField.textContent = +this.gravityPrev - this.gravityStep;
      gravity = +this.gravityPrev - this.gravityStep;
    }
    this.gravityPrev = this.gravityField.textContent;
  }

  init() {
    this.gravityButtons.forEach((item) => item.addEventListener('click', (el) => this.gravityController(el)));
  }
}

class GenerationArea {

  constructor() {
    this.item = document.getElementById('generationArea');
    this.width = this.item.clientWidth;
    this.height = this.item.clientHeight;
    this.app = new PIXI.Application({
      width: this.width, height: this.height, backgroundColor: 0xffffff, resolution: window.devicePixelRatio || 1
    });
  }

  init() {
    this.createStage();
    setInterval(() => {
      this.createRandomShape();
    }, animationStep);
  }

  createStage() {
    this.item.appendChild(this.app.view);
  }

  createRandomShape() {
    this.randomColor = randomElem(colors);
    this.randomShape = randomElem(shapes);
    this.shape = new Shape(this.randomColor, this.randomShape, this.width, this.app);
    this.shape.render();
  }
}


document.addEventListener("DOMContentLoaded", function () {
  let stage = new GenerationArea();
  stage.init();
  let tools = new Tools();
  tools.init();
});










