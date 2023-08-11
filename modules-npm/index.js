
// const fs=require('fs')
// const zlib=require('zlib')

// const gzip=zlib.createGzip()

// const readableStream=fs.createReadStream('./file.txt', {
//     encoding: 'utf-8',
// });

// readableStream.pipe(gzip).pipe(fs.WriteStream('./file2.txt.gz'))

// const writeableStream=fs.createWriteStream('./file2.txt')

// readableStream.on('data', (chunk)=>{
//     console.log(chunk);
//     writeableStream.write(chunk);
// })

// readableStream.pipe(writeableStream)

// const fs=require('fs/promises')
// fs.readFile('./file.txt', 'utf-8')
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error))

// const fs=require('fs/promises');

// async function readFile() {     // relatively easiser to read
//     try {
//         const data=await fs.readFile('./file.txt', 'utf-8');
//         console.log(data)
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// readFile()

// const PizzaShop = require('./pizza-shop')
// const DrinkMachine=require('./drink-machine')

// const pizzaShop=new PizzaShop();   // event is a fucntion
// const drinkMachine=new DrinkMachine()

// pizzaShop.on('order', (size, topping)=>{
// console.log(`order recieved! Baking a ${size} pizza with ${topping}`);
// drinkMachine.serveDrink(size);
// })

// pizzaShop.order('large', 'mushrooms');
// pizzaShop.displayOrderNumber();


// const fs=require('fs')

// const fileContent=fs.readFileSync('./file.txt', 'utf-8')
// console.log(fileContent)


// fs.readFile('./file.txt', (error, data)=>{
// if(error){
// console.log(error)
// }else {
//     console.log(data)
// }
// });

// fs.readFile('./file.txt', 'utf-8', (error, data)=>{
// if(error){
// console.log(error)
// }else {
//     console.log(data)
// }
// })

 
// fs.writeFileSync('./greet.txt', 'Hello world!')

// fs.writeFile('./greet.txt', 'Hello shashi!', (err)=>{
//     if(err){
//         console.log(err)
//     } else {
//         console.log('file written')
//     }
// })
// fs.writeFile('./greet.txt', ' Hello shashi!', {flag: 'a'}, (err)=>{
//     if(err){
//         console.log(err)
//     } else {
//         console.log('file written')
//     }
// })


const http =require("node:http")
const fs=require('fs')

// in the locahost type localhost/home, localhost/about, enter 
// it remains same. check with this 
// const server= http.createServer((req, res)=>{
//   res.end(req.url)
// }); 


// const server= http.createServer((req, res)=>{
   
//   if(req.url==='/') {
//     res.writeHead(200, {"Content-Type":"text/plain"})
//     res.end('Home Page')
//   }else if (req.url==='/about') {
//     res.writeHead(200, {"Content-Type":"text/plain"})
//     res.end('About Page')
//   } else if (req.url==='/api') {
//     res.writeHead(200, {"Content-Type":"application/json"})
//     res.end(JSON.stringify({
//         fistName: 'Shashikant',
//         lastName: 'Lamani',
//     }))
//   } else {
//         res.writeHead(404);
//         res.end('Page not found')
//   }
// }); 
// //  req.method GET, POST, PUT, DELETE
// server.listen(3000, ()=>{
//     console.log('server running on port 3000')
// })


