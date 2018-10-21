const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())

const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

// create a user
//app.post('/api/users', (req, res) => {
//  User.create(req.body)
//      .then(user => res.json(user))
//})
// get all users
//app.get('/api/users', (req, res) => {
//  User.findAll().then(users => res.json(users))
//})

app.get('/api/customers', (req, res) => {
  
  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);