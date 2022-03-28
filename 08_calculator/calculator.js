const add = function(x,y) {
  return x+y
};

const subtract = function(x,y) {
	return x-y
};

const sum = function(arr) {
  let sumArr = 0;
	for (let x of arr){
    sumArr += x;
  }
  return sumArr
};

const multiply = function(arr) {
  let mulArr = 1;
  for(let x of arr){
    mulArr *= x;
  }
  return mulArr;
};

const power = function(x,y) {
	return x**y;
};

const factorial = function(x) {
  let factX =1;
	if (x==0 || x==1){
    factX = factX;
  } else {
      for (let i=1;i<=x;i++){
        factX *=i;
      }
  }
  return factX;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
