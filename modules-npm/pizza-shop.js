const EventEmitter=require('events')

class PizzaShop extends EventEmitter {   // claas name start with Capital
    constructor(){
        super();
        this.orderNumber=0;
    }
    order(size, topping){
        this.orderNumber++;
        this.emit('order', size, topping)
    }
    displayOrderNumber(){
        console.log(`curernt order number: ${this.orderNumber}`)
    }
}

module.exports=PizzaShop;