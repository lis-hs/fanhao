const express=require('express');
//引入连接池模块
const pool=require('../pool');
//创建路由器对象
const router=express.Router();
//添加路由
router.post("log",(req,res)=>{
	console.log("接收到请求");
	res.send("hollo");
});
module.exports=router;