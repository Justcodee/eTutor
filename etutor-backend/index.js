const Express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = Express();

app.use(morgan('combined'));
app.use(Express.json());
app.use(cors());

app.get('/home', (req, res) => {
  res.send({
    message: 'hello world',
  });
});

//server
const Port = process.env.Port || 3000;
app.listen(Port, () => {
  console.log(`App is running on port ${Port}...`);
});

module.exports = app;
