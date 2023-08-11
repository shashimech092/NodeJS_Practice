
const EventEmitter=require('events')

const emitter=new EventEmitter() //event is a function so, take new

emitter.on('order-pizza', ()=>{
console.log(`Order recieved! Baking a pizaa`)
})

emitter.on('order-pizza', (size, topping)=>{      // event name, arguments
    console.log(`Order recieved! Baking a ${size} pizaa with ${topping}`)
    }); 
    

emitter.on('order-pizza', (size)=>{
    if(size==='large'){
        console.log('Serving complimentary drink')
    }
}); 

console.log('Do work before event occurs in the system')
emitter.emit('order-pizza', 'large', 'mushrooms')