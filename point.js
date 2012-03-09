function point (x,y) {
	
	this.x=x;
	this.y=y;
}

point.prototype.getDistance = function  (point) {
	
  var xs = 0;
  var ys = 0;
 
  xs = this.x - point.x;
  xs = xs * xs;
 
  ys = this.y - point.y;
  ys = ys * ys;
 
  return Math.sqrt( xs + ys );
}