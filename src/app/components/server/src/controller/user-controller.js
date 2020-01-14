var User = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../config/config');
const bcrypt = require('bcrypt');
 
function createToken(user) {
    return jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, {
        expiresIn: 200 // 86400 expires in 24 hours
      });
}

const users = [
    { id: 1, name: "NgocYen", email: 'ngocyen@gmail.com', password: 'secret'},
    { id: 2, name: "NgocHan", email: 'ngochan@gmail.com', password: 'secret'},
    { id: 3, name: "NgocHa", email: 'ngocha@gmail.com', password: 'secret'},
    { id: 4, name: "VanA", email: 'vana@gmail.com', password: 'secret'},
    { id: 5, name: "VanB", email: 'vanb@gmail.com', password: 'secret'},
    { id: 6, name: "VanC", email: 'vanc@gmail.com', password: 'secret'},

]

exports.registerUser = async(req, res) => {
    if(!req.body.email || !req.body.password){
      res.status(200).send({"message": "You need to send email and password"});
    }

    users.findOne({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mail exists"
        }); 
      }else{
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            users.push({
              id: users.length + 1,
              name: req.body.name,
              email: req.body.email,
              password: hashedPassword
              
            });
          }
        });
      }
    });
     console.log(users)
     res.status(200).send({"message": "Success"});
    // res.redirect('/login')
  
};

exports.loginUser = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send({ 'msg': 'You need to send email and password' });
    }
 
    users.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            return res.status(400).send({ 'msg': err });
        }
 
        if (!user) {
            return res.status(400).json({ 'msg': 'The user does not exist' });
        }
 
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (isMatch && !err) {
                return res.status(200).json({
                    token: createToken(user)
                });
            } else {
                return res.status(400).json({ msg: 'The email and password don\'t match.' });
            }
        });
    });
};

exports.deleteUser = ("/:userId", (req, res, next) => {
  users.remove({ _id: req.params.userId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "User deleted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});


