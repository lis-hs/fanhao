function show_uname(){
	uname_msg.innerHTML="用户名1-10位";
}
function check_uname(){
	var $uname=uname.value;
	var i=uname.value.search(/(^[我卧]|w(o)?)\s*([艹草槽]|c(ao)?$)/i);
	var k=uname.value.search(/(^ +| +$,'')/g)
	if(!$uname){
		uname_msg.innerHTML="用户名不能为空";
		uname_msg.style='border-radius:5px; color:#fff;font-size:12px;background:red; padding:1px 10px;'
	}else if($uname.length>=1 && $uname.length<=10){
		var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4 && xhr.status==200){
				var r=xhr.responseText;
				if(r==1){
					uname_msg.innerHTML="用户已被占用";
					uname_msg.style='border-radius:5px; color:#fff;font-size:12px;background:red; padding:1px 10px;'
				}else if(i!=-1){
					uname_msg.innerHTML="包含敏感词"
					uname_msg.style='border-radius:5px; color:#fff;font-size:12px;background:red; padding:1px 10px;'
				}else if(k!=-1){
					uname_msg.innerHTML="不能为空格符"
					uname_msg.style='border-radius:5px; color:#fff;font-size:12px;background:red; padding:1px 10px;'
				}else{
					uname_msg.innerHTML="√";
					uname_msg.style='border-radius:5px; color:#fff;font-size:12px;background:green; padding:1px 10px;'
				}
			}
		}
	xhr.open("get",`/user/v1/chaxun/${$uname}`,true);
	xhr.send();
	}else{
		uname_msg.innerHTML="×"
		uname_msg.style='border-radius:5px; color:#fff;font-size:12px;background:red; padding:1px 10px;'
	}
}
function show_upwd(){
	upwd_msg.innerHTML="密码为6~12位"
}
function check_upwd(){
	var $upwd=upwd.value;
	if(!$upwd){
		upwd_msg.innerHTML="×";
		upwd_msg.style='border-radius:5px; color:#fff;font-size:12px;background:red; padding:1px 10px;'
	}else if($upwd.length>=6 && $upwd.length<=12){
		upwd_msg.innerHTML="√";
		upwd_msg.style='border-radius:5px; color:#fff;font-size:12px;background:green; padding:1px 10px;'
	}else{
		upwd_msg.innerHTML="×";
		upwd_msg.style='border-radius:5px; color:#fff;font-size:12px;background:red; padding:1px 10px;'
	}
}
function show_opwd(){
	opwd_msg.innerHTML="请再次填写相同密码"
}
function check_opwd(){
	var $upwd=upwd.value;
	var $opwd=opwd.value;
	if(!$opwd){
		opwd_msg.innerHTML="×";
		opwd_msg.style='border-radius:5px; color:#fff;font-size:12px;background:red; padding:1px 10px;'
	}else if($opwd == $upwd){
		opwd_msg.innerHTML="√";
		opwd_msg.style='border-radius:5px; color:#fff;font-size:12px;background:green; padding:1px 10px;'
	}else{
		opwd_msg.innerHTML="×";
		opwd_msg.style='border-radius:5px; color:#fff;font-size:12px;background:red; padding:1px 10px;'
	}
}
function show_uemail(){
	uemail.innerHTML="请输入邮箱"
}
function check_uemail(){
	var $uemail=uemail.value;
	var reg=uemail.value.search("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$")
	if(!$uemail){
		uemail_msg.innerHTML="×";
		uemail_msg.style='border-radius:5px; color:#fff;font-size:12px;background:red; padding:1px 10px;'
	}else if(reg!=-1){
		uemail_msg.innerHTML="√";
		uemail_msg.style='border-radius:5px; color:#fff;font-size:12px;background:green; padding:1px 10px;'
	}else{
		uemail_msg.innerHTML="×";
		uemail_msg.style='border-radius:5px; color:#fff;font-size:12px;background:red; padding:1px 10px;'
	}
}
function show_utel(){
	utel_msg.innerHTML="请输入手机号";
}
function check_utel(){
	var $utel=utel.value;
	var i=utel.value.search(/^1[3-8]\d{9}$/);
	if(!$utel){
		utel_msg.innerHTML="×";
		utel_msg.style='border-radius:5px; color:#fff;font-size:12px;background:red; padding:1px 10px;'
	}else if(i!=-1){
		utel_msg.innerHTML="√";
		utel_msg.style='border-radius:5px; color:#fff;font-size:12px;background:green; padding:1px 10px;'
	}else{
		utel_msg.innerHTML="×";
		utel_msg.style='border-radius:5px; color:#fff;font-size:12px;background:red; padding:1px 10px;'
	}
}
function login(){
	//获取注册信息
	if(uname_msg.innerHTML!="√" || 
		upwd_msg.innerHTML!="√" || 
		opwd_msg.innerHTML!="√" || 
		uemail_msg.innerHTML!="√" || 
		utel_msg.innerHTML!="√"){
		alert("用户名或密码输入有误");
		return;
	}
	var $uname=uname.value
	var $upwd=upwd.value
	var $opwd=opwd.value
	var $uemail=uemail.value
	var $utel=utel.value
	var $gender=0
	if(male.checked==true){$gender=1}
	if(female.checked==true){$gender=2}
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			var r=xhr.responseText;
			if(r==1){
				alert("注册成功");
				// 跳转页面
				location.href="../xm_disembark.html";
			}else{
				alert("注册条件有误，请重新填写");
			}
		}
	}
	//2.创建请求，打开连接
	xhr.open("post","/user/v1/register",true);
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	var formdata=`user_name=${$uname}&upwd=${$upwd}&email=${$uemail}&phone=${$utel}&gender=${$gender}`;
	//3.发送请求
	xhr.send(formdata);//完成list接口
}
