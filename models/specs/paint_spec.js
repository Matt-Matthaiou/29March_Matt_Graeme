const assert = require('assert');
const Paint = require('../paint');

describe('Paint', function(){
    let paint;
    this.beforeEach(function(){
        paint = new Paint(25);
    });
    it('Should have quantity', function(){
        const actual = paint.quantity;
        assert.strictEqual(actual, 25);
    });
    it('It should not be ampty', function(){
        const actual = paint.empty;
        assert.strictEqual(actual, false);
    })
    it('should be abel to empty itself', function(){
        paint.itsEmpty();
        const actual = paint.empty;
        assert.strictEqual(actual, true);
    })
})