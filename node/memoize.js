add = function(n1, n2){
  return n1 + n2;
}

add5 = partial(add, 5)

partial = function(fn, arg){
  return function(otherArg){
    return fn(arg, otherArg);
  }
}

memoize = function(fn){
  var result, ran;
  return function(){
    if (!ran){
      result = fn();
      ran = true;
    }
    return result;
  }
}

cachedFunction = memoize(someExpensiveFunction)

cachedFunction() // Actually
cachedFunction() // Return result
cachedFunction() // Return result

