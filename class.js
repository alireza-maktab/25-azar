class Position {
  constructor(x, y) {
    if (x < 0 || y < 0) {
      throw "wrong position";
    }
    this.x = x;
    this.y = y;
  }

  logPosition() {
    console.log(`(x: ${this.x} , y: ${this.y} )`);
  }

  goLeft(distance) {
    this.x -= distance / 2;
  }
}

class Circle extends Position {
  stork = 10;

  constructor(centerPointX = 0, centerPointY = 0, radius = 1) {
    super(centerPointX, centerPointY);
    this.radius = radius;
  }

  draw() {
    console.log("draw " + this.radius);
  }

  goLeft(distance) {
    super.goLeft(distance);
    this.x -= 1;
  }

  static calcCircleArea(radius) {
    return 3.14 * radius ** 2;
  }
}

const circleObj = new Circle(100, 200, 5);
