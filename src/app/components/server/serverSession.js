if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
 
app.use(bodyParser.json());
app.use(cors());

/* Manage CORS Access for ALL requests/responses */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.use(function(req, res, next)
// {
//    /* Allow access from any requesting client */
//    res.setHeader('Access-Control-Allow-Origin', '*');

//    /* Allow access for any of the following Http request types */
//    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');

//    /* Set the Http request header */
//    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
//     next();
// });

const initializePassport = require('./passport-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

const TWO_HOURS = 100 * 60 * 60 * 2

const {
    // môi trường mặc định là development
    NODE_ENV = 'development',

    SESS_NAME = 'sid',
    SESS_SECRET = 'ssh!quiet,it\'asecret!',
    SESS_LIFETIME = TWO_HOURS // thời gian sống của phiên làm việc
} = process.env

const IN_PROD = NODE_ENV === 'production'

const users = [
    { id: 1, name: "NgocYen", email: 'ngocyen@gmail.com', password: 'secret'},
    { id: 2, name: "NgocHan", email: 'ngochan@gmail.com', password: 'secret'},
    { id: 3, name: "NgocHa", email: 'ngocha@gmail.com', password: 'secret'},
    { id: 4, name: "VanA", email: 'vana@gmail.com', password: 'secret'},
    { id: 5, name: "VanB", email: 'vanb@gmail.com', password: 'secret'},
    { id: 6, name: "VanC", email: 'vanc@gmail.com', password: 'secret'},

]


app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  name: SESS_NAME,  // tên biến môi trường mặc định cho sesionID
  resave: false, // không lưu trữ lại các phiên trở lại
  saveUninitialized: false, // không lưu các phiên chưa đc khởi tạo hoặc mới không có db bên trong chúng để xác thực
  secret: SESS_SECRET, // giống như 1 chữ kí của cookie
  cookie: {
      maxAge: SESS_LIFETIME,
      sameSite: true,
      secure: IN_PROD
  }
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))


app.get('/', checkAuthenticated, (req, res) => {
  console.log(req.sessionID)
  res.render('index.ejs', { name: req.user.name })
})

app.get('/login', checkNotAuthenticated, (req, res) => {
  // res.render('login.ejs')
 res.status(200).send({"message": "Error Login, Login again"});
})


app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: 'Invalid username or password.'
}))

app.get('/register', checkNotAuthenticated, (req, res) => {
  // res.render('register.page')
  res.status(200).send({"message": "Data send"});
})

const login=[{name: 'hello'}]
app.get('/api/register',  checkNotAuthenticated,(req, res) => {
    console.log(req.body);
    res.status(200).send({"message": "Data send"});
})

app.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    console.log(req.body)
    users.push({
      id: users.length + 1,
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      confirm: hashedPassword
    })
     console.log(users)
     res.status(200).send({"message": "Success"});
    // res.redirect('/login')
  } catch {
    // res.redirect('/register')
    res.status(200).send({"message": "Error"});
  }
  // console.log(req.body);
  // res.status(200).send({"message": "recieve"});
})

app.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
})

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}

// app.get('/', (req, res)=>{
//     res.send('Hello from server');
// })

// app.post('/enroll', (req, res)=>{
//     console.log(req.body);
//     res.status(200).send({"message": "Data received"});
// })

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Listening on ${port}...`));