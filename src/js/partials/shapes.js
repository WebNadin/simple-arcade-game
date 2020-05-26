class Shape {

  constructor(color = '0xFFFF0B', type = 'circle', generationAreaWidth = 488, app) {
    this.color = color;
    this.type = type;
    this.radius = 50;
    this.app = app;
    this.inAreaX = generationAreaWidth - 100;
    this.circleY = -50;
    this.circleX = 50 + random(this.inAreaX);
  }

  createCircle() {
    this.circle = new PIXI.Graphics();
    this.circle.lineStyle(0);
    this.circle.beginFill(this.color, 1);
    this.circle.drawCircle(this.circleX, this.circleY, this.radius);
    this.circle.endFill();
    this.circle.interactive = true;
    this.circle.buttonMode = true;
    this.circle.live = true;
    //figuresAmount++;
    //circle.num = figuresAmount;
    figures.push(this.circle);
    this.app.stage.addChild(this.circle);
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
    }
    this.startFallingAnimation();
  }
}
