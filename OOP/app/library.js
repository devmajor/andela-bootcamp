


'use strict'

var file = {};

file.Printer = function(name,model) {
  this.name = name;
  this.model = model;

    if(this.name == ''){
      return this.name = "General";
    }else{
      return this.name = name;
    }

    if(this.model == ''){
      return this.model = 'GM';
    }else{
      return this.model = model;
    }
}


file.numOfColorCatridge = function(a){
      if(name == 'sony' || name == 'Trendo'){
         a = 2;
      }else{
         a = 4;
      }
      return a;
}

file.print = function(a){
  this.a = a;
  return a;
}
file.printSpeed = function(a){
  if(name == 'sony'){
      a = '9ppm';

  }
  return a;
}

file.copy = function(copy){
  this.copy = copy;

  return copy;
}
file.copySpeed = function(name){
  if(this.name == 'electrocop'){
      copyspeed = '25ppm';
  }else{
    copyspeed = '30ppm';
  }
  return copyspeed;
}
module.exports = file;