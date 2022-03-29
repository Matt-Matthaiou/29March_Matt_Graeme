const assert = require('assert');
const Room = require('../room');


describe('Room', function(){
    let room;
    this.beforeEach(function(){
        room = new Room(25);
    })
    it('Should have a size', function(){
        const actual = room.size;
        assert.strictEqual(actual, 25);

    })
    it('should not be painted', function(){
        const actual = room.painted;
        assert.strictEqual(actual, false);
    })
    it('Should change to painted ', function(){
        room.paintRoom();
        const actual = room.painted;
        assert.strictEqual(actual, true)
    });
});