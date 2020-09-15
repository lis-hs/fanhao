//引入mysql模块
const mysql=require('mysql');
//创建连接池对象
const pool=mysql.createPool({
	host:'127.0.0.1',
	pool:'3306',
	user:'root',
	password:'',
	database:'xm',
	connectionLimist:15
});
//导出连接池对象
module.exports=pool;
