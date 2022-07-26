// 1. How to compare two JSON have the same properties without order ?
//   a. var obj1 = {name: "person1",age: 5};
//   b. var obj2 = {age: 5, name: "person1"};
//ans

const _ = require('lodash');
var obj1 = {name: "person1", age:5};
var obj2 = {age: 5, name: "person1"};
console.log(_.isEqual(obj1, obj2));

// output: => true





