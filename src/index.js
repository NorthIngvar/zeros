module.exports = function getZerosCount(number) {

  var a = 5, quantity = 0;

  while (number >= a) {
    quantity = quantity + Math.floor(number / a);
    a = a * 5;
  }
  return quantity;
}

