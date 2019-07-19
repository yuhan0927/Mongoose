/* 
  1.下载安装Mongoose
    npm i mongoose --save
  2.在项目中引入mongoose
    var mongoose = require("mongoose")
  3.连接MongoDB数据库
    mongoose.connect('mongodb://数据库ip地址：端口号/数据库名', {useNewUrlParser: true});
    如果端口号是默认端口号(27017) 则可以省略不写

  4. 断开数据库连接(一般不需要调用) 
    -MongoDB数据库，一般情况下，只需要连接一次，连接一次以后，除非项目tingzhi服务器关闭，否则一般不会断开连接
    mongoose.disconnect()

    -监听MongoDB数据库的连接状态
      - 在mongoose对象中，有一个属性叫做connection，该对象表示的就是数据库连接
          通过监听该对象的状态可以用来监听数据可的连接与断开

          数据库连接成功的事件
          mongoose.connection.once("open",function(){})
          数据库断开的事件
          mongoose.connection.once("close",function(){})
    */

// 引入
var mongoose = require("mongoose")
// 连接数据库
mongoose.connect("mongodb://127.0.0.1/mongoose_test",{ useMongoClient: true})

mongoose.connection.once("open", function() {
  console.log("数据库连接成功")
})
mongoose.connection.once("close", function() {
  console.log("数据库连接已断开")
})

//断开数据库连接
mongoose.disconnect();