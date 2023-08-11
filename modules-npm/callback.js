function greet(name){
    console.log(`Hello ${name}`)
};

function hello(newgreet){
    const name='shashi'
    newgreet(name)
}

hello(greet)
