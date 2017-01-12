var chai = require('chai');
var expect = chai.expect;

var Printer = require('../app/library.js');




(function(){
  'use strict';
  describe("Printer Class: Create a printer, make it print", function() {

    it("The printer should be a type of `object`, and an instance of the `Printer` class", function() {
      var hp = new Printer.Printer('hp');
      expect(typeof hp).to.equal(typeof {});
      expect(hp instanceof Printer.Printer).to.equal(true);
    });

    it("The Printer should be called 'General' if no name is passed as a parameter", function() {
      var gm = new Printer.Printer();
      expect(gm.name).to.equal('General');
      expect(gm.model).to.equal('GM');
    });

    it("The printer name and model should be a property of the printer", function() {
      var kyiocera  = new Printer.Printer('kyiocera', 'f2000');
      expect(kyiocera.name).to.equal('kyiocera');
      expect(kyiocera.model).to.equal('f2000');
    });

    it("The printer shoud have four (4) catridge except its a sony or Trendo", function() {
      var triumph  = new Printer.Printer('triumph', 'adler');
      expect(triumph.numOfColorCatridge).to.equal(4);

      var sony = new Printer.Printer('sony', 'c50 turbo');
      expect(sony.numOfColorCatridge).to.equal(2);
      sony.print(5);
      expect(sony.printSpeed).to.equal('9ppm');
      expect((function(){return new Printer.Printer('Trendo', 'copy star');}()).numOfColorCatridge).to.equal(2);
    });

    it("The printer shoud have four (1) paper feeds except its a type of photocopier", function() {
      var photocopier  = new Printer.Printer('Elecrtocop', 'Copier', 'Photocopier');
      expect(photocopier.numOfToner).to.equal(4);
      expect(photocopier.isPrinter).to.equal(false);

      var trendo = new Printer.Printer('Trendo', 'copy star');
      expect(trendo.numOfToner).to.equal(1);
    });

    it("The Photocopier should have copy speed of 25ppm until you put `load the paper tray before its out`", function() {
      var photocopier  = new Printer.Printer('Elecrtocop', 'Copier', 'photocopier');
      expect(photocopier.copySpeed).to.equal('25ppm');
      photocopier.copy(7);
      expect(photocopier.copySpeed).to.equal('30ppm');
    });

   

  });
})();