/* funzione che applica la funzione situtata nel primo elemento dell'array al secondo elemento dell'array */

var apply = function(argumentArray) {
	return argumentArray[0](argumentArray[1]);
};

apply([Math.cos, Math.PI/3]); //esempio

/* funzione che applica la funzione data ad ogni elemento dell'array */

var aa = function(fun){
	return function(array){
		return array.map(fun);
	};
} ;

aa(function (x) {return x*2;}){[1,3,5,7,9,]}; //esempio

/* funzione che ritorna la composizione di 2 funzioni */

var comp2= function (functions){
	var f = function[0];
	var g = function [1];
	return function (x){
		return f(g(x));
	};
};

/* funzione che ritorna la composizione di n funzioni */

var comp = function (functions){
	return functions.reduce(function(f,g){
		return function(x){
			return f(g(x));
		};
	});
};

/* funzione che applica ogni funzione ad un valore e restituisce l'array delle funzioni applicate all'elemento */

var cons = function (functions){
	return function(x){
		retun functions.map(function (f){
			return f(x);
		});
	};
};

