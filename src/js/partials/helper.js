//function random(max) {
//  console.log("max =", max);
//  let test =
//  console.log("test =", test);
//  return test;
//}
function random(max) {
  return Math.floor(Math.random() * max);
}


function randomElem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let arr = [3, 10, 50, 4];
setInterval(() => randomElem(arr), 500);
