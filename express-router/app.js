const express=require('express');
const app=express();
const port=80;

const blogRoutes=require('./blogRoutes');

app.use('/blog', blogRoutes);

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
});