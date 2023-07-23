user = {
  name: "Yash",
  email: "yash@gmail.com",
};

let MyName = "GoGo     ";
let MyDoggo = "Motya                 ";

// console.log(MyName.trim().length)

Object.prototype.trueLength = function () {
  console.log(`The true length of this string is ${this.trim().length}`);
};

console.log(MyName.trueLength());
console.log(MyDoggo.trueLength());
console.log(`The length of the string otherwise is ${MyDoggo.length} `);
