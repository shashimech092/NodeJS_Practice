fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST', 
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 101
    }),
    headers: {'Content-type': 'application/json; charset=UTF-8'}
})
.then((res)=>res.json())
.then((data)=>{
    console.log(data)
})