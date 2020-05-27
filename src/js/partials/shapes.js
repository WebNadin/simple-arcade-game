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
    this.triangleY = this.radius*2;
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
    this.ellipse.drawEllipse(this.ellipseX, this.ellipseY, this.radius * 2, this.radius);
    this.ellipse.endFill();
    this.ellipse.interactive = true;
    this.ellipse.buttonMode = true;
    this.ellipse.live = true;

    figures.push(this.ellipse);
    this.app.stage.addChild(this.ellipse);
  }

  createTriangle() {
    this.triangle = new PIXI.Graphics();
    this.triangle.lineStyle(2, 0xffd900, 1);
    this.triangle.beginFill(0xFF3300);
    this.triangle.moveTo(this.triangleX, 0);
    this.triangle.lineTo(this.triangleX + this.radius, -this.triangleY);
    this.triangle.lineTo(this.triangleX + this.radius*2, 0);
    this.triangle.lineTo(this.triangleX, 0);
    this.triangle.closePath();
    this.triangle.endFill();

    figures.push(this.triangle);
    this.app.stage.addChild(this.triangle);
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
    }
    this.startFallingAnimation();
  }
}
