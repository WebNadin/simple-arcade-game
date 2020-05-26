//= partials/pixi.min.js
//= partials/helper.js
//= partials/shapes.js
//= partials/TweenLite.min.js

let figures = [];
let animationStep = 1;
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
    this.startFallingAnimation();
    //setInterval(() => {
    //  this.startFallingAnimation();
    //}, this.duration);
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

  startFallingAnimation() {

    figures.forEach((item) => {
      if (item.position.y > this.height + 100) {
        item.position.y += animationStep;
      }
    });

    //figures.forEach((item, i) => {
    //  TweenLite.to(item, this.gravity, {y: this.height + 100, ease: Linear.easeNone});
    //});

    //this.app.ticker.add(function () {
    //  figures.forEach((item) => {
    //    console.log('item = ',item);
    //    item.position.y += this.gravity;
    //  });
    //});
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  let stage = new generationArea();
  stage.init();
});


//let width = document.getElementById('generationArea').clientWidth;
//let height = document.getElementById('generationArea').clientHeight;
//let colors = [0xFFFF0B, 0xFF700B, 0x4286f4, 0x4286f4, 0xf441e8, 0x8dff6d, 0x41ccc9, 0xe03375,
//  0x95e032, 0x77c687, 0x43ba5b, 0x0ea3ba];
//let gravity = 4;
//let figuresAmount = -1;
//let figure = [];
//let app;

//let model = {
//  createCanvas() {
//    app = new PIXI.Application({
//      width: width, height: height, backgroundColor: 0xffffff, resolution: window.devicePixelRatio || 1
//    });
//    document.getElementById('generationArea').appendChild(app.view); //выводим его в тело страницы
//  },
//  drawCircle() {
//    let rand = Math.floor(Math.random() * colors.length);
//    let radius = 50;
//    let inAreaX = width - 100;
//    let circleY = -50;
//    let circleX = Math.floor(Math.random() * inAreaX);
//    let circle = new PIXI.Graphics();
//    circle.lineStyle(0);
//    circle.beginFill(colors[rand], 1);
//    circle.drawCircle(circleX, circleY, radius);
//    circle.endFill();
//    circle.interactive = true;
//    circle.buttonMode = true;
//    circle.live = true;
//    figuresAmount++;
//    circle.num = figuresAmount;
//    figure.push(circle);
//    app.stage.addChild(circle);
//    circle.on('pointerdown', controller.clearFigure);
//  }
//
//};
//
//let view = {
//  loadGame: function () {
//    model.createCanvas();
//    setInterval(model.drawCircle, 1000);
//    app.ticker.add(function () {
//      figure.forEach((item) => {
//        item.position.y += gravity;
//        if (item.position.y > height + 100 && item.live == true) {
//          figure.splice(figure.indexOf(item), 1);
//          console.log('item was deleted');
//        }
//      });
//      console.log('figuresAmount = ', figuresAmount);
//    });
//  }
//};
//
//let controller = {
//  clearFigure() {
//    this.clear();
//    figure[this.num].live = false;
//  }
//};
//
//view.loadGame();









