require("./tools/con.mongo")
var Student = require("./models/student")

Student.find({},function(err,docs){
  if(!err){
    console.log(docs)
  }
})