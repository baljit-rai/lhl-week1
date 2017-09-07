function map (obj, fn) {
  var out = [];
  obj.forEach(function(element){
    out.push(fn(element));
  })
  return console.log(out);
}




var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});