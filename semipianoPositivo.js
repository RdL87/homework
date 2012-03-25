var math= Math;

function Point (x, y){
	this.x = x || 0;
	this.y = y || 0;
}

Point.prototype.getDistance = function  (point) {

  var xs = 0;
  var ys = 0;
 
  xs = this.x - point.x;
  xs = xs * xs;
 
  ys = this.y - point.y;
  ys = ys * ys;
 
  return math.sqrt( xs + ys );
}

Point.prototype.translate = function(dx, dy) {
	this.x += dx;
	this.y += dy;
};

var semipianoPositivo = function(array) {
	return array.filter(function(item){
		return (item.y > item.x);
	});
}