var express     = require('express');
var bodyParser  = require('body-parser');
var passport	= require('passport');
var cors        = require('cors');
 
var app = express();
app.use(cors());
 
// get our request parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const passportOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET
};
 
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// Use the passport package in our application
app.use(passport.initialize());
var passportMiddleware = require('./src/middleware/passport');
passport.use(passportMiddleware);

// Demo Route (GET http://localhost:5000)
app.get('/', function(req, res) {
  return res.send('Hello! The API is at http://localhost:' + port + '/api');
});

var routes = require('./routes');
app.use('/api', routes);
 

// Start the server
const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Listening on ${port}...`));
