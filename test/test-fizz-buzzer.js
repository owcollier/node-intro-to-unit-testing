'use strict';

const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer.js');

describe('fizzBuzzer', function() {
  it('should return fizz-buzz if divisible by 15', function(){
    const normalCases = [ 15, 30, 60 ];

    normalCases.forEach(function(input){
      const answer = fizzBuzzer(input);
      answer.should.equal('fizz-buzz');
    });
  });

  it('should return buzz if divisible by 5', function(){
    const normalCases = [ 20, 25, 50 ];

    normalCases.forEach(function(input){
      const answer = fizzBuzzer(input);
      answer.should.equal('buzz');
    });
  });

  it('should return fizz if divisible by 3', function(){
    const normalCases = [ 9, 21, 33 ];

    normalCases.forEach(function(input){
      const answer = fizzBuzzer(input);
      answer.should.equal('fizz');
    });
  });

  it('should throw error in NAN', function(){
    const errCases = [ 'a' , '', [], null ];

    errCases.forEach(function(input){
      (function() {
        fizzBuzzer(input);  
      }).should.throw(Error);
    });
  });

});
