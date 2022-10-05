var express = require('express');
var router = express.Router();
var userHelpers=require('../helpers/user-helpers')

var session;

/* GET home page. */
router.get('/', function (req, res, next) {
    if (req.session.user) {
        let user = req.session.user
        res.render('index',{user})

    } else {
        res.redirect('/login')
    }

});
router.get('/login', function (req, res, next) {
    if (req.session.user) {
      res.redirect('/')
    } else {
      session=req.session
      res.render('user/login',{session})
      
  
    }
  
  });

router.post('/index', function (req, res, next){
    res.redirect('/index')
});

router.get('/signup', function (req, res, next) {        
    session=req.session
    console.log(session.userAlreadyExist);

      res.render('user/signup',{session})
    });

router.post('/signup',function (req, res, next) {
    userHelpers.usersignup(req.body).then((state) => {
        if(state.userexist){
            req.session.userAlreadyExist=true;
            console.log(req.body,"in user if condition")
            //  res.redirect('/')
           res.render('user/signup',{userAlreadyExist:req.session.userAlreadyExist})
          }else{
            
            req.session.user=state.user;
            console.log(state.user,"code");
            res.render('user/login')
            
          }
      
          
        })
      
      });


router.post('/login', (req, res) => {
    userHelpers.userlogin(req.body).then((response) => {
        if (response.status) {
            req.session.loggedIn = true
            req.session.user=response.user
            req.session.deletionCheck=true
            res.redirect('/index')
            
        } else if ('usernotfound') {
            console.log('User not found');
            req.session.usernotfound = true;
            req.session.wrongpassword = false;
            res.redirect('/login')
        } else {
            console.log('failed login');
            req.session.wrongpassword = true;
            req.session.usernotfound = false;
            res.redirect('/login')

        }
    })

});


router.get('/logout', (req, res) => {
    req.session.user=null;
    res.redirect('/login')
});





module.exports = router;
