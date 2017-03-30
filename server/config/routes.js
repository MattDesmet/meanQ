var session = require('./../controllers/session.js')
var question = require('./../controllers/question.js')
var answer = require('./../controllers/answer.js')
var testServ = require('./../controllers/testServerController.js')

module.exports = function(app){
  app.post('/login', function(request,response){
    session.login(request,response)
  })
  app.get('/checkuser',function(request,response){
    session.checkUser(request,response)
  })
  app.get('/logout',function(request,response){
    session.logout(request,response)
  })
  /***************************************************
              "the_QUESTION" ROUTES
  ****************************************************/
  app.post('/question/add',function(request,response){
    question.add(request,response)
  })
  app.get('/question/getall',function(request,response){
    question.getAll(request,response)
  })
  /***************************************************
              "ANSWER" ROUTES
  ****************************************************/
  app.post('/answer/add',function(request,response){
    answer.add(request,response)
  })
  app.post('/answer/like',function(request,response){
    answer.like(request,response)
  })
  /***************************************************
              TESTING front to back routes
  ****************************************************/
  app.get('/ROUTE_checkinguser',function(req,res){
    console.log('this is response back from ROUTES.js callback'); // this shows up in the TERMINAL console!!
    testServ.checkinguser_ON_ServerController(req,res)
    // testServerController.checkinguser(req,res)
  })
  app.post('/ROUTE_TEST_ADD_USER', function(req, res){
    console.log('this is current VAL of req.body.name which is = to route_test_data.name:',req.body.name);
    console.log('this is current VAL of req.body.name which is = to route_test_data:',req.body);
    testServ.add_this_to_DB(req, res)
  })
}
