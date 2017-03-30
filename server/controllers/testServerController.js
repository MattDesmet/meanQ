var mongoose = require('mongoose')
var ThisIsSchema = mongoose.model("This_Is_Schema")
module.exports = (function(){
  return{
      checkinguser_ON_ServerController: function(req, res){
        // console.log('output from server side controller "checkinguser" function'); //this shows up in TERMINAL console.
        res.send('reply from SERVER CONTROLLER: zzzzzzzzzz')
      },
      add_this_to_DB: function(req, res) {
        console.log('INSIDE -> SERVER CONTROLLER::: VAL of req.body.name:', req.body.name);
        var newTestUser = new ThisIsSchema(req.body)
        newTestUser.save(function(err,output){
          if(err){
            console.log(err);
          }
          else{
            res.json(output)
          }
        })
      }
    }
  })()

console.log('SERVER controller is working');
