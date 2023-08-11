const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 80;

app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static('./views'));
app.use(express.static(__dirname+'/views'));

mongoose.connect('mongodb://127.0.0.1/shashikart', {
  useNewUrlParser: true,
 // useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
  res.sendFile('./index.html');
});

app.post('/submit', (req, res) => {
  const formData = new User(req.body);
  formData.save().then(()=>{
    res.send('this form has been submitted to the db')      
  }).catch(()=>{
    res.status(400).send('item was not saved to the db')
  })
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
