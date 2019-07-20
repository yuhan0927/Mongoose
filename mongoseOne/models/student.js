/* 
  用来定义Student模型
*/
var mongoose = require("mongoose")

var Schema = mongoose.Schema

var stuSchema = new Schema({
  name:String,
  age:Number,
  gender:{
    type:String,
    default:"female"
  },
  address:String
})

// 定义模型
var StuModel = mongoose.model('student',stuSchema) 

model.exports = StuModel