function  triangle(p1, p2, p3){

  this.side1=p1.getDistance(p2);
  this.side2=p2.getDistance(p3);
  this.side3=p3.getDistance(p1);
}

triangle.prototype.getPerimeter=function(){

  var perimeter=this.side1+this.side2+this.side3;

  return perimeter;
}

triangle.prototype.getArea=function(){

  var semiPerimeter=this.getPerimeter() / 2;

  var area= Math.sqrt(semiPerimeter*(semiPerimeter-this.side1)*(semiPerimeter-this.side2)*(semiPerimeter-this.side3));

  return area;

}