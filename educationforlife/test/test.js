//var atime = require('../simpletime.js');
var linkedlist = require('../linkedlist.js');
var assert = require("chai").assert;
var mocha = require('mocha');
var describe = mocha.describe;


describe('Test method getHead', function() {
    it('Test method getHead', function() {
        let t = new linkedlist();
        var res = t.getHead();
        assert.strictEqual(res, null);
    });
  });
  
  
  describe('Test method getTail', function() {
    it('Test method getTail', function() {
        let t = new linkedlist();
        var res = t.getTail();
        assert.strictEqual(res, null);
    });
  });

  
    describe ('Test method toArray', function(){
      it('Test toArray method', function(){
              let t = new linkedlist();
              var res = t.append();
              assert.strictEqual(res, [null]);
          });
      });

      describe ('Test method toArray', function(){
        it('Test toArray method', function(){
                let t = new linkedlist();
                t.append('First Test Case');
                t.append('Second Test Case');
                t.append('Third Test Case');
                var res = t.toArray();
                assert.strictEqual(res, ['First Test Case','Second Test Case','Third Test Case']);
            });
          });
  
      describe ('Test method toArray', function(){
        it('Test toArray method', function(){
                let t = new linkedlist();
                var res = t.prepend();
                assert.strictEqual(res, [null]);
            });
        });

        describe ('Test method toArray', function(){
            it('Test toArray method', function(){
                    let t = new linkedlist();
                    t.prepend('First Test Case');
                    t.prepend('Second Test Case');
                    t.prepend('Third Test Case');
                    var res = t.toArray();
                    assert.strictEqual(res, ['Third Test Case','Second Test Case','First Test Case']);
                });
              });
  
        describe('Test method  find', function() {
          it('Test method  find', function() {
              let t = new linkedlist();
              t.append('First test case');
              var res = t.find();
              assert.strictEqual(res, null);
          });
      });
  
      describe('Test method  find', function() {
        it('Test method  find', function() {
            let t = new linkedlist();
            t.append('First test case');
            var res = t.deleteHead();
            assert.strictEqual(res, null);
        });
    });
  
    
  
    
        describe('Test deleteHead()', function () {
            it('deleteHead() head=null', function () {
                var result = new linkedlist();
                var a = result.deleteHead();
                assert.strictEqual(a,null);
        
            });
        });

        describe('Test reverse()', function () {
            it('reverse()', function () {
                var result = new linkedlist();
                result.prepend("a");
                result.append("1");
                result.reverse();
                var a = result.getHead();
                assert.strictEqual(a.value,"1");
            });
        });