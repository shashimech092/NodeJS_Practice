
// synchronus or blocking program
// const fs=require('fs')
// let text=fs.readFileSync('dele.txt', 'utf-8')

// text=text.replace('engine', 'Shashikant')
// console.log(text)
// fs.writeFileSync('shashi.txt', text)

// Asynchronus or non-blocking program, (callbacks)
const fs=require('fs')
let text=fs.readFile('dele.txt', 'utf-8', (err, data)=>{
    console.log(err, data)
})
console.log('this is a message')