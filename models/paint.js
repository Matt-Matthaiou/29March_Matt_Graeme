const Paint = function(quantity){
    this.quantity = quantity;
    this.empty = false;
}

Paint.prototype.itsEmpty = function(){
    this.empty = true;
}

module.exports = Paint