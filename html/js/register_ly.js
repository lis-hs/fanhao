const express=require("express");
const pool=require("../../pool.js");
const router=express.Router();
// 登陆
router.get("/v1/login/:uname&:upwd",(req,res)=>{
  //1.获取请求中的数据
  var $uname=req.params.uname;
  var $upwd=req.params.upwd;
  //2.操作数据库
  var sql="select * from xm_user where user_name=? and upwd=?"
  pool.query(sql,[$uname,$upwd],(err,result)=>{
    if(err) throw err;
	console.log(result);
    if(result.length>0){
      res.send("1");
    }else{
      res.send("0");
    }
  })
})
// 注册重复验证
router.get("/v1/chaxun/:uname",(req,res)=>{
    var $uname=req.params.uname;
    var sql="select * from xm_user where user_name=?"
    pool.query(sql,[$uname],(err,result)=>{
        if(err) throw err;
		console.log(result);
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
    })
  })
  // 注册
router.post("/v1/register",(req,res)=>{
    var obj=req.body;
    console.log(obj);
    var sql="INSERT INTO xm_user SET ?"
    pool.query(sql,[obj],(err,result)=>{
      if(err) throw err;
      console.log(result)
      if(result.affectedRows==0){
        res.send("0");
      }else{
        res.send("1");
      }
    })
  })
  // 个人信息修改
router.get("/v1/register",(req,res)=>{
	var obj=req.body;
	var sql="UPDATE xm_user SET ? WHERE uid=?";
	pool.query(sql,[obj,obj.uid],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send("1");
		}else{
			res.send("0");
		}
	})
})
// 搜索查询
router.get('/v1/leibiao/:myname',(req,res)=>{
	var $req=req.params.myname;
	console.log($req);
	var sql=`SELECT * FROM xm_laptop WHERE pname LIKE ?`;
	let param =["%"+$req+"%"];
	pool.query(sql,param,(err,result)=>{
		if(err) throw err;
		res.send(result)
	});
});
module.exports=router;