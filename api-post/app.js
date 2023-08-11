const express = require('express');
const app = express();
const port = 5000; // You can change this to your desired port number

 app.use(express.json()); // Parse JSON request bodies

const tasks = [];

// Get all tasks


app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// Create a new task
app.post('/api/tasks', (req, res) => {
  const { name, email, age } = req.body;
  const newTask = { id: tasks.length + 1, name, email, age};
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Update a task
app.put('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const { name, email, age} = req.body;

  const task = tasks.find(data => data.id === taskId);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  task.name=name;
  task.email=email;
  task.age=age;
 
  res.json(task);
});

// Delete a task
app.delete('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);

  const taskIndex = tasks.findIndex(data => data.id === taskId);
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  const deletedTask = tasks.splice(taskIndex, 1);
  res.json(deletedTask);
});


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });