const Express = require('express');
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const userRoute = require('./Routes/userRoute');

const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
if (process.env === 'Development') {
  app.use(logger('combined'));
}

app.use(passport.initialize());
app.use(cors());

//connect to database
mongoose
  .connect('mongodb://localhost:27017/tutor', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('database was connected successfully'));

//Endpoints
app.use('/api/v1/users', userRoute);

//server
const Port = process.env.Port || 3000;
app.listen(Port, () => {
  console.log(`App is running on port ${Port}...`);
});

module.exports = app;
