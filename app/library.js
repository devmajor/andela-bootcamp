


'use strict'

var file = {};
file.findMinMax = function(a) {
   var lowest = 0;
 for (var i = 1; i < a.length; i++) {
  if (a[i] < a[lowest]) lowest = i;
 }
 return lowest;

}

file.aritGeo = function(a) {
  
   
    min = a[0];
    for (var i = 0; i < a.length; i++) {
        if (a[i] > min) {
            min = a[i];
          return min
        }
    }

}




module.exports = file;