function letterIndex(string) {
 var count = {};
 for (var i=0; i<string.length;i++) {
  var character = string.split(' ').join();
  if (count[character[i]] === undefined) {
   count[character[i]] = [i];
  } else {
   count[character[i]].push(i);
  }
 }

 return count;

};


var myArgs = (process.argv.slice(2));
// console.log(myArgs);
var myInput = myArgs.join(' ');
// console.log(myInput);
console.log(letterIndex(myInput));

