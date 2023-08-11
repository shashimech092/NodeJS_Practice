const http=require('http')

const hostname='127.0.0.1'
const port=3000;

const server=http.createServer((req, res)=>{
    res.statusCode=200
   // res.setHeader('Content-type', 'text/plain')
   res.setHeader('Content-type', 'text/html')
  //  res.end('Hello world')
    res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Registration Form</title>
    </head>
    <body>
      <h1>Registration Form</h1>
      <form action="/register" method="POST">
    
        <label for="id">Id:</label>
        <input type="text" id="id" name="id" required><br><br>
    
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br><br>
    
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>
    
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>
    
        <input type="submit" value="Register">
      </form>
    </body>
    </html>
    `)
})
server.listen(port, hostname, ()=>{
    console.log(`server running at http://${hostname}:${port}/`)
})