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

var StuModel = mongoose.model('student',stuSchema) 
/**
 * -有了Model就可以来对数据进行增删该查操作了
 * 
 * Model.create(doc(s),callback)
 *  -用来创建一个或多个文档添加到数据库中
 *  - 参数：
 *     doc(s) 可以是一个文档对象，也可以是一个文档对象的数组
 *     callback 当操作完成以后调用的回调函数
 * 
 */

 // 插入
// StuModel.create([
//   {
//     name:"喻哈哈",
//     age:20,
//     gender:"male",
//     address:"你猜"
//   },{
//     name:"刘哈哈",
//     age:20,
//     gender:"male",
//     address:"郑州"
//   },{
//     name:"喻嘻嘻",
//     age:51,
//     gender:"male",
//     address:"樟树"
//   }
// ], function(err){
//   if(!err){
//     console.log("添加成功")
//   }
// })



/**
 * 查询的:
    -Model.find(conditions,{projection},{options},{callback})
        查询所有符合条件的文档,总会返回一个数组
    -Model.findById(conditions,{projection},{options},{callback})
        根据文档的id属性查询文档
    -Model.findOne(conditions,{projection},{options},{callback})
        查询符合条件的第一个文档,返回的是一个对象

      condition 查询条件
      projection 投影 需要获取的字段
        两种方式
          {name:1,_id:0}
          "name -_id"
      options 查询选项(skip limit)
      callback 回调函数，查询结果会通过回调函数返回
              回调函数必传，如果不传回调函数，压根不会查询
 */
//查询
StuModel.find({name:"刘哈哈"},function(err, docs) {
  if (!err) {
    console.log(docs)
  }
})

StuModel.find({},{name:1,_id:0},function(err, docs) {
  if (!err) {
    console.log(docs)
  }
})


StuModel.find({},"name age -_id",function(err, docs) {
  if (!err) {
    console.log(docs)
  }
})

StuModel.find({},"name age -_id",{skip:3,limit:1},function(err, docs) {
  if (!err) {
    console.log(docs)
  }
})

StuModel.findById("5d31a17f361481101c8e5bdd",function(err, doc) {
  if (!err) {
    // console.log(doc)
    // 通过find()查询的结果返回的对象就是Document，文档对象
    // ，Document对象就是Model的实例
    console.log(doc instanceof StuModel)
  }
})

/**
 * 修改
 * Model.update(conditions, doc, {options},{callback})
 * Model.updateMany(conditions, doc, {options},{callback})
 * Model.updateOne(conditions, doc, {options},{callback})
 * 
 *    conditions 查询你条件
 *    doc 修改后的对象
 *    options 配置参数
 *    callback 回调函数
 * Model.replaceOne(conditions, doc, {options},{callback})
 */
// 修改刘狗比的年龄为20
StuModel.updateOne({name:"刘狗比"},{$set:{age:20}},function(err){
  if(!err){
    console.log("修改成功")
  }
})

/**
 * Model.remove(conditions,{callback})
 * Model.deleteOne(conditions,{callback})
 * Model.deleteMany(conditions,{callback})
 */
//删除

StuModel.remove({name:"yuhan"},function(err){
  if(!err){
    console.log("删除成功")
  }
})

/*
Model.count(condition，{callback})
统计文档的数量
*/
StuModel.count({},function(err,count){
  if(!err){
    console.log(count)
  }
})