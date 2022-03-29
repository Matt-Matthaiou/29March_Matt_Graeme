const assert = require('assert');
const Decorator = require('../decorator');
const Paint = require('../paint');
const Room = require('../Room');

describe('Decorator', function(){
    let decorator;
    let paint;
    let room1;
    let room2;
    this.beforeEach(function(){
        decorator = new Decorator();
        paint = new Paint(25);
        room1 = new Room(45);
        room2 = new Room(55);
    });
    it('Should have no paint', function(){
        const actual = decorator.countStock();
        assert.strictEqual(actual, 0);
    });
    it('It should get more paint', function(){
        decorator.addPaint(paint);
        const actual = decorator.countStock();
        assert.strictEqual(actual, 1);
    })
    it('should be able to count letres of paint', function(){
        decorator.addPaint(paint)
        decorator.addPaint(paint)
        const actual = decorator.countLitres()
        assert.strictEqual(actual, 50);
    })
    it("should be able to know if the paint is anough for a room", function(){
        decorator.addPaint(paint)
        decorator.addPaint(paint)
        const actual = decorator.doIHaveEnough(room1);
        assert.strictEqual(actual, true)
        const actual2 = decorator.doIHaveEnough(room2);
        assert.strictEqual(actual2, false)
    })
    it("should be able to paint room if enough paint is in stock", function(){
        decorator.addPaint(paint)
        decorator.addPaint(paint)
        decorator.paintIfEnough(room1);
        assert.strictEqual(room1.painted, true)
    })
})