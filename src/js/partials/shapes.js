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
    this.rectangleY = -this.radius*2;
    this.pentagonX = random(generationAreaWidth - this.radius * 2);
    this.pentagonY = -this.radius * 2;
    this.randomX = random(generationAreaWidth - this.radius * 2);
    this.borderColor = 0x000000;
  }

  createCircle() {
    this.circle = new PIXI.Graphics();
    this.circle.lineStyle(2, this.borderColor, 1);
    this.circle.beginFill(this.color, 1);
    this.circle.drawCircle(this.circleX, this.circleY, this.radius);
    this.circle.endFill();
    this.circle.interactive = true;
    this.circle.buttonMode = true;
    this.circle.live = true;
    figures.push(this.circle);
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

    figures.push(this.ellipse);
    this.app.stage.addChild(this.ellipse);
  }

  createTriangle() {
    this.triangle = new PIXI.Graphics();
    this.triangle.lineStyle(2, this.borderColor, 1);
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

    figures.push(this.pentagon);
    this.app.stage.addChild(this.pentagon);
  }

  createRandom() {
    console.log('test');
    let step = this.radius / 2;
    this.random = new PIXI.Graphics();
    this.random.lineStyle(2, this.borderColor, 1);
    this.random.beginFill(this.color);
    this.random.moveTo(this.randomX + step, -step * 4);
    this.random.quadraticCurveTo(this.randomX, -step * 4 - step, this.randomX + step, -step * 4 - step * 1.5);
    //this.random.moveTo(this.randomX + step, -step * 4 - step * 1.5);
    this.random.quadraticCurveTo(this.randomX + step * 2, -step * 4 - step * 3, step * 3, -step * 4 - step * 2.5);
    //this.random.lineTo(this.randomX, -step);
    this.random.closePath();
    this.random.endFill();

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
      case 'random':
        this.createRandom();
        break;
    }
    this.startFallingAnimation();
  }
}
