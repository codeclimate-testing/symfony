var v = function(x, y, z, a, b, c) {
  return true;
}

function f(x, y, z, a, b, c) {
  return true;
}

var g = function h(x, y, z, a, b, c) {
  return true;
}

function callback(x, y, z, a, b, c) {
  return function(a, b, c, d, e, f) { return 42; };
}

MyProto = {}
MyProto.prototype.x = function(a, b, c, d, e, f) {
  return "nope";
}
MyProto.prototype.y = function(a, b, c, d, e, f) {
  return function(a, b, c, d, e, f) { return 42; };
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
var Yikes = {
  x(a, b, c, d, e, f) {},
  y(a, b, c, d, e, f) {}
}
