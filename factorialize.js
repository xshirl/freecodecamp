function factorialize(num) {
  var product = 1;
  for (var i = num; i>1; i--) {
    product *= i;
  }
  return product;
}

console.log(factorialize(3));
