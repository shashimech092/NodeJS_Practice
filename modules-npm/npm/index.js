const upperCase=require('upper-case').upperCase

function greet(name){
   console.log(upperCase(`Hello ${name}, welcome to volution`))
}

greet('Shashi')

// if we want to export this local moduel

module.exports=greet;