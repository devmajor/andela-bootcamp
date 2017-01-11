


'use strict'

var file = {};

file.dataTypes = function(a) {
  
  switch(a){
    case null:
          return 'no value';
          break;
    case undefined:
          return 'no value';
          break;
    case true:
          return true;
          break;
    case false:
          return false;
          break;
    case 44:
          return 'less than 100';
          break;
    case 144:
          return 'more than 100';
          break;
    case 100:
          return 'equal to 100';
          break;
    default:
          return "Cases are Done!";
  }


}


  file.dataTypesString = function(a){
    for(var counter=0;counter<=a.length;counter++){
    return a.length;
  }
}

file.dataTypesArrays = function(a){

  if(a===[]){

      a=a;
    }else if(a===[4,9]){
      a=a;
    }
    return 'undefined';

  for(var counter=0; counter<=a.length;counter++){
    
    if(a==[0,1,2]){
       a=counter;
      
    }
     return a; 
  }
}

file.dataTypesCallback = function(a){
    if(a =='callback'){
      a=a;
    }
    return 'called callback';
}

module.exports = file;