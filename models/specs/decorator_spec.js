const assert = require('assert');
const Decorator = require('../decorator');
const Paint = require('../paint');
const Room = require('../Room');

describe('Decorator', function(){
    let decorator;
    let paint1;
    let paint2;
    let room1;
    let room2;
    this.beforeEach(function(){
        decorator = new Decorator();
        paint1 = new Paint(25);
        paint2 = new Paint(25);
        room1 = new Room(45);
        room2 = new Room(55);
    });
    it('Should have no paint', function(){
        const actual = decorator.countStock();
        assert.strictEqual(actual, 0);
    });
    it('It should get more paint', function(){
        decorator.addPaint(paint1);
        const actual = decorator.countStock();
        assert.strictEqual(actual, 1);
    })
    it('should be able to count letres of paint', function(){
        decorator.addPaint(paint1)
        decorator.addPaint(paint1)
        const actual = decorator.countLitres()
        assert.strictEqual(actual, 50);
    })
    it("should be able to know if the paint is anough for a room", function(){
        decorator.addPaint(paint1)
        decorator.addPaint(paint1)
        const actual = decorator.doIHaveEnough(room1);
        assert.strictEqual(actual, true)
        const actual2 = decorator.doIHaveEnough(room2);
        assert.strictEqual(actual2, false)
    })
    it("should be able to paint room if enough paint is in stock", function(){
        decorator.addPaint(paint1)
        decorator.addPaint(paint1)
        decorator.paintIfEnough(room1);
        assert.strictEqual(room1.painted, true)
    })
    it('should be abelto decrese amount of paint and enpty a can', function(){
        decorator.addPaint(paint1)
        decorator.addPaint(paint2)
        decorator.managePaint(room1);
        assert.strictEqual(paint1.quantity, 0);
        assert.strictEqual(paint1.empty, true);
        assert.strictEqual(paint2.quantity, 5);
        assert.strictEqual(paint2.empty, false);
    })
})