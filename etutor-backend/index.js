const Express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const app = Express();

app.use(morgan('combined'));
app.use(Express.json());
app.use(cors());

//connect to database
mongoose
  .connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('database was connected successfully'));

//Endpoints
app.get('/home', async (req, res) => {
  res.send({
    message: 'hello world',
  });
});

app.post('/register', (req, res) => {
  res.send({
    message: `user with email ${req.body.email} was submitted`,
  });
});

//server
const Port = process.env.Port || 3000;
app.listen(Port, () => {
  console.log(`App is running on port ${Port}...`);
});

module.exports = app;
