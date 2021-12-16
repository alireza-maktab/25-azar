const myObj = {
  firstName: "Ali",
  lastName: "Mohammadi",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

function greet(prefix, postfix) {
  return "Hello " + prefix + " " + this.lastName + " " + postfix;
}

const resultCall = greet.call(myObj, "Mr.", "<>");
const resultBind = greet.bind(myObj);
console.log(resultCall);
console.log(resultBind);
console.log(resultBind("a", "b"));
