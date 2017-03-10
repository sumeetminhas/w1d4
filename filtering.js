// var numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];
// var evens = numbers.filter(function(num) {
//   return (num % 2 == 0);
// });
// console.log("Subset of even numbers:", evens);

var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function(obj){
var x = obj.x;
var y = obj.y;
var x2 = x * x;
var y2 = y * y;
var z2 = x2 + y2;
 return Math.sqrt(z2);
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

// function hello() {
//   console.log("hello");
// }
// hello();
// // console.log(hello);
// // var hello = function(){};

// function caller (functionCallback) {
//   functionCallback();
// }
// caller(hello);