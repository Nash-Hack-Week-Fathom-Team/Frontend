const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())

const subModules = [
  {id: 1, title: "Individual"},
  {id: 2, title: "Relational"},
  {id: 3, title: "Community"},
  {id: 4, title: "Career"}
];

const modules = [
    {id: 1, title: "Who am I?", subModules: subModules}, 
    {id: 2, title: "What am I?",subModules: subModules},
    {id: 3, title: "What's My Purpose?", subModules: subModules},
    {id: 4, title: "What's My Plan?", subModules: subModules}
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
  res.json(modules);
});

//app.get('/api/customers/:id', (req, res) => {
//  res.json(modules);
//});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);