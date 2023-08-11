const express=require('express');
const router=express.Router();


// middleware specific to this router
router.use((req, res, next)=>{
    console.log('Blog route middleware');
    next();
})

//define routes
router.get('/', (req, res)=>{
    res.send('List of blog posts')
});


router.get('/:id', (req, res)=>{
    const postId=req.params.id;
    res.send(`viewing blog post ${postId}`)
});

module.exports=router;