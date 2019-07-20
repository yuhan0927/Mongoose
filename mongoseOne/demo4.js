/**
 * Document 和 集合中的文档是一一对应的，Document是Model的实例
 *  通过Model查询到结果都是Document
 */
var mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1/mongoose_test",{useMongoClient:true})
mongoose.connection.once("open",function() {
  console.log("数据库连接成功")
})

// 将mongoose.Schema 赋值给一个变量
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

var StuModel = mongoose.model('student',stuSchema) 


// 创建一个Doucument
var stu = new StuModel({
  name:"哈哈哈",
  age:37,
  gender:"male",
  address:"中国"
})

/**
 * document的方法
 *  Model#save({options},{fn})
 */

//  stu.save(function(err){
//    if(!err){
//      console.log('保存成功')
//    }
//  })

 StuModel.findOne({},function(err,doc){
   if(!err){
     /*
      update(update,{option},{callback})
        -修改对象
      remove({callback}) 
     */
    //  console.log(doc)
    // doc.update({$set:{age:28}},function(err){
    //   if(!err){
    //     console.log("修改成功")
    //   }
    // })
    // 法二
    // doc.age = 21
    // doc.save()

    // doc.remove(function (err) {
    //   if(!err) {
    //     console.log("哈哈哈再见")
    //   }
    // })

    /*
      get(name)
        - 获取文档中的指定属性值
      set(name,value) 
        - 设置文档的指定文档值 
      toObject()
        -将document对象转化为普通的js对象
          转化为普通的js对象后，注意所有的document对象的方法和属性都不能使用了
    */
   doc.set("name","猪小小")
   doc.name = "hahah"

   var o =doc.toObject()
   
   }
 })