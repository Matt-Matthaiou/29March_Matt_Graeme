const Decorator = function(){
    this.paintStock = []
    
}

Decorator.prototype.countStock = function(){
    return this.paintStock.length;
}

Decorator.prototype.addPaint = function(paint){
    this.paintStock.push(paint);
}

Decorator.prototype.countLitres = function(){
    let total = 0;
    for (let paint of this.paintStock){
        total += paint.quantity;
    }
    return total;
}

Decorator.prototype.doIHaveEnough = function(room){
    const litres = this.countLitres();
    if (litres >= room.size){
        return true;
    }
    else{
        return false;
    }
}

Decorator.prototype.paintIfEnough = function(room){
    const canI = this.doIHaveEnough(room);
    if (canI == true){
        room.paintRoom();
    }

}

Decorator.prototype.managePaint = function(room){
    let totalToPaint = room.size;
    for (let paint of this.paintStock){
        if (totalToPaint >= paint.quantity){
            totalToPaint -= paint.quantity
            paint.quantity = 0;
            paint.itsEmpty();
            
            
            
        }
        else{
            paint.quantity -= totalToPaint;
            totalToPaint = 0;
            break;
        }
    }

}

module.exports = Decorator