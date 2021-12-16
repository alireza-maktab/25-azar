// Factory Function
function createCircle1(radius = 1) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

// Factory Function (like constructor function)
function createCircle2(radius = 1) {
  const obj = {};
  obj.radius = radius;
  obj.draw = function () {
    console.log("draw");
  };
  return obj;
}

// Constructor Function
function Circle(radius = 1) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle1 = createCircle1();
const circle2 = createCircle2();
const circle3 = new Circle();
const circle4 = Circle();

console.log(circle1);
console.log(circle2);
console.log(circle3);
console.log(circle4);
