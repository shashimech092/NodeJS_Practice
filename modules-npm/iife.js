// Function scope
// (function (){
// const superman='Superman'
// console.log(superman)
// })();

// (function (){
// const superman='Batman'
// console.log(superman)
// })();

//iife moduel wraper
(function (message){
const superman='Superman'
console.log(message, superman)
})('hi');

(function (message){
const superman='Batman'
console.log(message, superman)
})('hello');
