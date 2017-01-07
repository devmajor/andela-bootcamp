


'use strict'

var file = {};
file.computeAverage = function(a) {
  
   
    min = a[0];
    for (var i = 0; i < a.length; i++) {
        if (a[i] > min) {
            min = a[i];
          return min
        }
    }

}


module.exports = file;