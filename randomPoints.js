/* Random points */

var randomPoints = function(n){

	var n = n;
	var res = new Array(n);

	for (var i = 0; i<n; i++) {

		res[i] = randomPoint();
	}

	return res;
}