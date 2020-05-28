class Shape {

  constructor(color = '0xFFFF0B', type = 'circle', generationAreaWidth = 488, app) {
    this.color = color;
    this.type = type;
    this.radius = 40;
    this.app = app;
    this.circleY = -this.radius;
    this.circleX = this.radius + random(generationAreaWidth - this.radius * 2);
    this.ellipseX = this.radius * 2 + random(generationAreaWidth - this.radius * 4);
    this.ellipseY = -this.radius;
    this.triangleX = random(generationAreaWidth - this.radius * 2);
    this.triangleY = this.radius * 2;
    this.rectangleX = random(generationAreaWidth - this.radius * 2);
    this.rectangleY = -this.radius * 2;
    this.pentagonX = random(generationAreaWidth - this.radius * 2);
    this.pentagonY = -this.radius * 2;
    this.hexagonX = this.radius + random(generationAreaWidth - this.radius * 2);
    this.hexagonY = -this.radius * 3;
    this.randomX = 20 + random(generationAreaWidth - 110 - 40);
    this.randomY = -this.radius * 2;
    this.borderColor = 0x000000;
    this.surfaceField = document.querySelector('.js-surfaceField');
  }

  updateCurrentFigureSurfaceArea(surfaceArea = 0) {
    this.surfaceField.textContent = surfaceArea + ' px^2';
  }


  addClickRemovement() {
    figures.forEach((item) => {
      item.on('pointerdown', this.clearFigure);
    });
  }

  clearFigure() {
    this.clear();
  }

  createCircle() {
    this.circle = new PIXI.Graphics();
    this.circle.beginFill(this.color, 1);
    this.circle.drawCircle(this.circleX, this.circleY, this.radius);
    this.circle.endFill();
    this.circle.interactive = true;
    this.circle.buttonMode = true;
    this.circle.live = true;
    this.circle.surfaceArea = Math.round(Math.PI * this.radius * this.radius);

    this.updateCurrentFigureSurfaceArea(this.circle.surfaceArea);
    figures.push(this.circle);
    figuresSurfaceArea += this.circle;
    this.app.stage.addChild(this.circle);
  }

  createEllipse() {
    this.ellipse = new PIXI.Graphics();
    this.ellipse.lineStyle(2, this.borderColor, 1);
    this.ellipse.beginFill(this.color, 1);
    this.ellipse.drawEllipse(this.ellipseX, this.ellipseY, this.radius * 1.5, this.radius);
    this.ellipse.endFill();
    this.ellipse.interactive = true;
    this.ellipse.buttonMode = true;
    this.ellipse.live = true;
    this.ellipse.surfaceArea = Math.round(Math.PI * this.radius / 2 * this.radius * 1.5 / 2);
    this.updateCurrentFigureSurfaceArea(this.ellipse.surfaceArea);
    figures.push(this.ellipse);


    this.app.stage.addChild(this.ellipse);
  }

  createTriangle() {
    this.triangle = new PIXI.Graphics();
    this.triangle.beginFill(this.color);
    this.triangle.moveTo(this.triangleX, 0);
    this.triangle.lineTo(this.triangleX + this.radius, -this.triangleY);
    this.triangle.lineTo(this.triangleX + this.radius * 2, 0);
    this.triangle.lineTo(this.triangleX, 0);
    this.triangle.closePath();
    this.triangle.endFill();
    this.triangle.interactive = true;
    this.triangle.buttonMode = true;
    this.triangle.live = true;
    this.triangle.surfaceArea = Math.round(Math.sqrt(3) / 4 * this.radius * this.radius);
    this.updateCurrentFigureSurfaceArea(this.triangle.surfaceArea);

    figures.push(this.triangle);
    this.app.stage.addChild(this.triangle);
  }

  createRectangle() {
    this.rectangle = new PIXI.Graphics();
    this.rectangle.lineStyle(2, this.borderColor, 1);
    this.rectangle.beginFill(this.color);
    this.rectangle.drawRect(this.rectangleX, this.rectangleY, this.radius * 2, this.radius * 1.5);
    this.rectangle.endFill();
    this.rectangle.interactive = true;
    this.rectangle.buttonMode = true;
    this.rectangle.live = true;
    this.updateCurrentFigureSurfaceArea(0);
    figures.push(this.rectangle);
    this.app.stage.addChild(this.rectangle);
  }

  createPentagon() {
    this.pentagon = new PIXI.Graphics();
    this.pentagon.lineStyle(2, this.borderColor, 1);
    this.pentagon.beginFill(this.color);
    this.pentagon.drawPolygon([
      this.pentagonX, this.pentagonY + 32,
      this.pentagonX + 40, this.pentagonY,
      this.pentagonX + 80, this.pentagonY + 32,
      this.pentagonX + 60, this.pentagonY + 70,
      this.pentagonX + 20, this.pentagonY + 70,
      this.pentagonX, this.pentagonY + 32
    ]);

    this.pentagon.endFill();
    this.pentagon.interactive = true;
    this.pentagon.buttonMode = true;
    this.pentagon.live = true;
    this.updateCurrentFigureSurfaceArea(0);
    figures.push(this.pentagon);
    this.app.stage.addChild(this.pentagon);
  }

  createHexagon() {
    this.hexagon = new PIXI.Graphics();
    this.hexagon.lineStyle(2, this.borderColor, 1);
    this.hexagon.beginFill(this.color);
    this.hexagon.drawPolygon([
      this.hexagonX - this.radius, this.hexagonY,
      this.hexagonX - this.radius / 2, this.hexagonY + this.radius * 0.87,
      this.hexagonX + this.radius / 2, this.hexagonY + this.radius * 0.87,
      this.hexagonX + this.radius, this.hexagonY,
      this.hexagonX + this.radius / 2, this.hexagonY - this.radius * 0.87,
      this.hexagonX - this.radius / 2, this.hexagonY - this.radius * 0.87
    ]);

    this.hexagon.endFill();
    this.hexagon.interactive = true;
    this.hexagon.buttonMode = true;
    this.hexagon.live = true;
    this.updateCurrentFigureSurfaceArea(0);
    figures.push(this.hexagon);
    this.app.stage.addChild(this.hexagon);
  }

  createRandom() {
    this.random = new PIXI.Graphics();
    this.random.beginFill(this.color);

    this.random.drawEllipse(this.randomX + 20, this.randomY + 35, 40, 20);
    this.random.drawEllipse(this.randomX + 20 + 70, this.randomY + 35, 40, 20);

    this.random.drawEllipse(this.randomX + 55, this.randomY + 10, 40, 20);
    this.random.drawEllipse(this.randomX + 55, this.randomY + 10 + 50, 40, 20);

    this.random.drawEllipse(this.randomX + 15, this.randomY + 20, 20, 15);
    this.random.drawEllipse(this.randomX + 15 + 80, this.randomY + 20, 20, 15);
    this.random.drawEllipse(this.randomX + 15 + 80, this.randomY + 20 + 30, 20, 15);
    this.random.drawEllipse(this.randomX + 15, this.randomY + 20 + 30, 20, 15);
    this.random.interactive = true;
    this.random.buttonMode = true;
    this.random.live = true;
    this.random.endFill();
    this.updateCurrentFigureSurfaceArea(0);
    figures.push(this.random);
    this.app.stage.addChild(this.random);
  }

  startFallingAnimation() {
    let ticker = PIXI.Ticker.shared;
    ticker.autoStart = false;
    ticker.speed = .5;

    function animate(time) {
      figures.forEach((item) => {
        item.position.y += gravity * ticker.deltaTime;
      });
      ticker.update(time);
      requestAnimationFrame(animate);
    }

    animate(performance.now());
  }

  render() {
    switch (this.type) {
      case 'circle':
        this.createCircle();
        break;
      case 'ellipse':
        this.createEllipse();
        break;
      case 'triangle':
        this.createTriangle();
        break;
      case 'rectangle':
        this.createRectangle();
        break;
      case 'pentagon':
        this.createPentagon();
        break;
      case 'hexagon':
        this.createHexagon();
        break;
      case 'random':
        this.createRandom();
        break;
    }
    this.startFallingAnimation();
    this.addClickRemovement();
  }
}
