


'use strict'

var file = {};
file.findMinMax = function(array) {
	 var lowest = 0;
    var highest = 0, a = array.length, counter;

  for (counter=0;counter<a;counter++)
  {
      if (array[counter] > highest)
      {
          highest = array[counter];
      }else{
        if(array[counter]<lowest)
        {
          lowest = array[counter];
          
        }
      }
  }
 
return [lowest,highest];
}


file.fizzBuzz = function(a) {
   if(a%3==0 && a%5==0){
      return 'FizzBuzz';
   }else if(a%5==0){
       return 'Buzz';
   }else if(a%3==0){
       return 'Fizz';
   }else if(a%3!=0 && a%5!=0){
       return a;
   }
}

file.aritGeo = function(a) {
  
   

}
module.exports = file;