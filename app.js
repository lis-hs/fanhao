const express=require('express');
//引入用户路由器
const register=require('./html/js/register_ly.js')
//引入body-porser中间件
const bodyParser=require('body-parser');
//创建web服务器
const app=express();
//设置端口
app.listen(8080);
//托管静态资源
app.use( express.static('html') );
//应用body-porser,将post请求数据解析为对象
app.use( bodyParser.urlencoded({
  extended:false  //使用querystring解析查询字符串为对象
}) );
app.use( '/user',register);