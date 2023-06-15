var mySqrt = function (x) {
  if (x === 1 || x === 0) {
    return x;
  }

  if (x === 2 || x === 3){
    return 1
  }

  for (let i=1;i<=Math.ceil(x/2);i++){
    if (i*i > x){
        return i-1
    }else if (i*i === x){
        return i
    }
  }

};

x = 4;
console.log(mySqrt(x));
