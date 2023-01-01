var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var router = require('./Router/index')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
// Strategy라는 속성을 가져와서 LocalStrategy에 저장
var session = require('express-session')
var flash = require('connect-flash')

app.listen(3000, function() {
  console.log("start! express server on port 3000 ");
});

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')

app.use(session({
  secret: 'keyboard cat', // 세션을 암호화 하기 위한 문자열로된 키 값, 다른 문자열을 넣어도 상관 없다.
  resave: false,          // 이 항목과 아래 항목은 필수 요소
  saveUninitialized: true // 세션이 이미 존재 할 때 다시 요청이 오면 새로 저장할지, 유지할지 
  // 디테일한 설정은 나중에
}))

// app.use(LocalStrategy)
// app.use(passport.initialize())
// app.use(passport.session)
// app.use(flash())

app.use(router)


app.get('/ejs_test', function(req, res){
  console.log('enter ejs test page')
  res.render('ejsTest.ejs', {word1: 'node js', word2: 'ejs', number: 37})
})
