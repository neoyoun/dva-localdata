function square(i) {
  return i * i
}
function dubble(i) {
  return i * 2
}
function map(handler, list) {
  return list.map(handler)
}

var result = map(square,[1,2,3,4,5,6,7,8])
var mapSQ = currying(map,square)



//console.log(mapSQ.toString())
//console.log(mapSQ([1,23,4,5,6,2]))

function currying(fn) {
  console.log(fn)
    var slice = Array.prototype.slice,
    __args = slice.call(arguments, 1);
    return function () {
        var __inargs = slice.call(arguments);
        console.log(fn)
        console.log('type of fn >> ', typeof fn)
        return fn.apply(null, __args.concat(__inargs));
    };
}
//mapSQ([12,3,4])
//var result2 = mapSQ([1,2,3,4,5,6,7,8])
//console.log(result2)
