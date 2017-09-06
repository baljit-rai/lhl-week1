function letterCount(string) {
 var count = {};
 for (var i=0; i<string.length;i++) {
  var character = string.charAt(i);
  if (count[character]) {
   count[character]++;
  } else {
   count[character] = 1;
  }
 }

 return count;
};

var myArgs = (process.argv.slice(2));
// console.log(myArgs);
var myInput = myArgs.join('').replace(/\s/g,'');
// console.log(myInput);
console.log(letterCount(myInput));