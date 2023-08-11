function average(arr){
    let sum=0
    arr.forEach(element => {
        sum += element
    });
    return sum/arr.length;
    
}
console.log('This is mod')

module.exports={
    avg: average,
    name: 'Shashi',
    class: 12
}