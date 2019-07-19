var mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1/mongoose_test",{useMongoClient:true})
mongoose.connection.once("open",function() {
  console.log("数据库连接成功")
})


// 将mongoose.Schema 赋值给一个变量
var Schema = mongoose.Schema

// 创建Schema(模式)对象
var stuSchema = new Schema({
  name:String,
  age:Number,
  gender:{
    type:String,
    default:"female"
  },
  address:String
})

// 通过Schema来创建Model
// Model代表的是数据库中的集合，通过Model才能对数据进行操作
// var Blog = mongoose.model(modelName, Schema);
// modelName 就是要映射集合的名字  mongoose会自动将集合名变成复数
var StuModel = mongoose.model('student',stuSchema) //创建一个模型对象，这个模型对象和数据库中的student集合进行映射，用stuSchema对模型进行约束

// 像数据库中插入一个文档
// StuModel.create(doc,function(err) {});
StuModel.create({
  name:"刘狗比",
  age:38,
  gender:"male",
  address:"周口"
},function(err) {
  if(!err){
    console.log(arguments)
  }
})