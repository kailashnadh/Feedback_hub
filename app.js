const express=require('express');

const cookie=require('cookie-session');
const passport=require('passport');
const mongoose=require('mongoose');
const keys=require('./config/keys');
var bodyParser = require('body-parser')


const app=express();

app.use(bodyParser.json())
app.use(
    cookie({
        maxAge:30*24*60*60*1000,
        keys:[keys.cookieKey]
    })
)

app.use(passport.initialize());
app.use(passport.session());

require('./models/Users');
require('./models/Survey');
require('./services/passport');
require('https').globalAgent.options.ca = require('ssl-root-cas').create();
require('./routes/authRoutes')(app);
require('./routes/paymentRoutes')(app);
require('./routes/surveyRoutes')(app);

mongoose.connect(keys.mongoURI);
if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file, or main.css file!
    app.use(express.static('client/build'));
  
    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
const PORT=process.env.PORT || 5000;

app.listen(PORT);