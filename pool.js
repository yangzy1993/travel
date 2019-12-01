//引入第三方模块mysql
const mysql=require("mysql");
//创建连接池
let pool=mysql.createPool({
	host:"127.0.0.1",
	port:"3306",
	user:"root",
	password:"",
	database:"tour",
	connectionLimit:15
});
//导出连接池
module.exports=pool;