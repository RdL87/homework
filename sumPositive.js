/* Sum positive numbers */

var sumPositive = function(array) {

	return array
	   .filter(function(item){

	   	return item >=0;
	   })
	   .reduce(function(prev,cur){
	   	return prev + cur;
	   });

};