function login(){
    var $uname=uname.value;
    var $upwd=upwd.value;
	var i=uname.value.search(/(^[我卧]|w(o)?)\s*([艹草槽]|c(ao)?$)/i);
	var k=uname.value.search(/(^ +| +$,'')/g)
	if(!$uname){
		upwd_msg.innerHTML="用户名不能为空";
    }else if($uname.length>=1 && $uname.length<=10){
        if(i!=-1){
            upwd_msg.innerHTML="用户名包含敏感词"
        }else if(k!=-1){
            upwd_msg.innerHTML="用户名不能为空格符"
        }
    }else{
        upwd_msg.innerHTML="×"
    }
    if(!$upwd){
        upwd_msg.innerHTML="用户密码不能为空";
    }else if($upwd.length>=6 && $upwd.length<=12){
        // 创建xhr异步对象
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4 && xhr.status==200){
                var r=xhr.responseText;
        		console.log(r)
                if(r==1){
                    alert("登陆成功");
                    location.href="index.html"
                }else{
                    upwd_msg.innerHTML="用户名或者密码错误";
                }
            }
        }
        xhr.open("get",`/user/v1/login/${$uname}&${$upwd}`,true);
        xhr.send();
    }
}