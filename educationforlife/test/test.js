var _sum = require('../sum.js');
var linkedlist = require('../linkedlist.js');
var assert = require("chai").assert;
var mocha = require('mocha');
var describe = mocha.describe;

describe ('Test method toArray', function(){
    it('Test toArray method', function(){
            let t = new linkedlist();
            t.append('First Test Case');
            t.append('Second Test Case');
            t.append('Third Test Case');
            var res = t.toArray();
            assert.strictEqual(res, ['First Test Case','Second Test Case','Third Test Case']);
        });
        it('Test toArray method', function(){
            let t = new linkedlist('case in list');
            t.append('new Test Case');
            t.append('new1 Test Case');
            t.append('new2 Test Case');
            var res = t.toArray();
            assert.strictEqual(res, ['case in list','new Test Case','new1 Test Case','new2 Test Case']);
        });
        it('Test toArray method', function(){
            let t = new linkedlist('case in list');
            t.append('new Test Case');
            t.append('new1 Test Case');
            t.append('new2 Test Case');
            var res = t.getTail();
            assert.strictEqual(res, ['new2 Test Case']);
        });
    
    });


    describe ('Test method toArray', function(){
        it('Test toArray method', function(){
                let t = new linkedlist();
                t.append('First Test Case');
                t.deleteHead();
                var res = t.toArray();
                assert.strictEqual(res, [null]);
            });
        });

        describe ('Test method toArray', function(){
            it('Test toArray method', function(){
                    let t = new linkedlist();
                    t.append('First Test Case');
                    t.append('Second Test Case');
                    t.deleteHead();
                    var res = t.toArray();
                    assert.strictEqual(res, ['Second Test Case']);
                });
                it('Test toArray method', function(){
                    let t = new linkedlist();
                    t.append('First Test Case');
                    t.append('Second Test Case');
                    t.deleteHead();
                    var res = t.getHead();
                    assert.strictEqual(res, ['Second Test Case']);
                });
            });

        describe ('Test method toArray', function(){
            it('Test toArray method', function(){
                    let t = new linkedlist();
                    t.deleteHead();
                    var res = t.toArray();
                    assert.strictEqual(res, [null]);
                });
            });

         describe ('Test method toArray', function(){
            it('Test toArray method', function(){
                    let t = new linkedlist();
                     t.append('First Test Case');
                     t.getHead();
                     var res = t.toArray();
                     assert.strictEqual(res, ['First Test Case']);
                });
            });

        describe ('Test method toArray', function(){
            it('Test toArray method', function(){
                    let t = new linkedlist();                       
                     t.getHead();
                    var res = t.toArray();
                    assert.strictEqual(res, [null]);
                    });
                });

        describe ('Test method toArray', function(){
            it('Test toArray method', function(){
                     let t = new linkedlist();
                    t.append('First Test Case');
                    t.getTail();
                    var res = t.toArray();
                    assert.strictEqual(res, ['First Test Case']);
                     });
                });
        
        describe ('Test method toArray', function(){
                it('Test toArray method', function(){
                     let t = new linkedlist();                       
                     t.getTail();
                    var res = t.toArray();
                    assert.strictEqual(res, [null]);
                    });
                });

        describe ('Test method toArray', function(){
                it('Test toArray method', function(){
                    let t = new linkedlist();
                    t.append('First Test Case');
                    t.find(t.getHead());
                    var res = t.toArray();
                    assert.strictEqual(res, ['First Test Case']);
                    });
                });

            describe ('Test method toArray', function(){
                 it('Test toArray method', function(){
                    let t = new linkedlist();
                    t.find(t.getHead());
                    var res = t.toArray();
                    assert.strictEqual(res, [null]);
                    });
                });

         describe ('Test method toArray', function(){
                it('Test toArray method', function(){
                    let t = new linkedlist();
                     t.append('First Test Case');
                    t.find();
                    var res = t.getHead();
                    assert.strictEqual(res, ['First Test Case']);
                    });
                it('Test toArray method', function(){
                    let t = new linkedlist();
                    t.append('First Test Case');
                    t.append('Second Test Case');
                    t.append('Third Test Case');
                    t.find();
                     var res = t.getTail();
                    assert.strictEqual(res, ['First Test Case','Second Test Case','Third Test Case']);
                    });
                    it('Test toArray method', function(){
                        let t = new linkedlist();
                        t.append('First Test Case');
                        t.append('Second Test Case');
                        t.append('Third Test Case');
                        t.find('Second Test Case');
                         var res = t.getTail();
                        assert.strictEqual(res, ['Third Test Case']);
                        });
                });