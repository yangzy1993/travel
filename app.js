//引入第三方模块express
const express=require("express");
//引入第三方模块body-parser
const bodyParser=require("body-parser");
//引入用户路由器模块
let userRouter=require('./route/tour.js');
//引入url模块
const url=require("url");
//创建web服务器
let app=express();
//设置端口号
app.listen(8080);
//设置中间件,把静态资源托管到public目录
app.use(express.static('./public'));
//设置中间件来接收post请求的数据
app.use(bodyParser.urlencoded({
	extended:false
}));
//把用户路由器模块挂载到服务器
app.use('/tour',userRouter);









