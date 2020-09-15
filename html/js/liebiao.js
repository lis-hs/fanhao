var $input=document.getElementById('input');
var $fennel=document.getElementById('fennel');
console.log($input)
// 获取上一个页面跳转时带来的url查询字符串
// location.href	获取完整的url地址
// search获取到？后i面的所有内容
var tz=location.search;
// 把获取的值用等号隔开
tz=tz.split('=');
// 分割后返回的值是数组
// tz[1]就是url地址的查询内容
// 因为通过地址来传递的数据中文会乱码
// 通过转码来进行获取中文内容
var title=decodeURI(tz[1]);
console.log(title)
// 如果搜索到内容，将内容放到显示列表中
$fennel.innerHTML=title;
if(title!=''&&title!=undefined){
	input_value(title)
};
// 判断a标签在点击触发事件的时候，判断一下input的值是否为空，如果是直接跳出循环，如果不是进行下一步
function input_value_btn(){
	if($input.value==''){
		return
	}else{
		input_value()
	}
}
function input_value(){
	// 创建异步函数
	var xhr=new XMLHttpRequest();
	// 创建请求地址和请求方法
	if(arguments.length>0){
		console.log('123')
		xhr.open('GET',`/user/v1/leibiao/${arguments[0]}`,true);
	}else{
		console.log('456')
		xhr.open('GET',`/user/v1/leibiao/${$input.value}`,true)
		$fennel.innerHTML=$input.value;
	};
	// 发送请求
	xhr.send();
	xhr.onreadystatechange=()=>{
		if(xhr.readyState==4&&xhr.status==200){
			var r=xhr.responseText;
			r=JSON.parse(r);
			console.log(r)
			var ul=document.getElementById('ul-div')
			var ul_li='';
			if(r.length>0){
				// consoe.log(r)
				for(var i=0;i<r.length;i++){
					ul_li+=`
					<div class="mingxing fl mb20" style="border:2px solid #fff;width:230px;cursor:pointer;" onmouseout="this.style.border='2px solid #fff'" onmousemove="this.style.border='2px solid red'">
						<div class="sub_mingxing"><a href="./xiangqing.html" target="_blank"><img src="./image/${r[i].title}.jpg" alt=""></a></div>
						<div class="pinpai"><a href="./xiangqing.html" target="_blank">${r[i].title}</a></div>
						<div class="youhui">${r[i].subtitle}</div>
						<div class="jiage">${r[i].price}元</div>
					</div>
					`
				};
			}else{
				ul_li+=`
					<div class="ws f1" >
						<p>
							未搜索到任何相关内容
						</p>
					</div>
				`
			};
			ul.innerHTML=ul_li;
		}
	}
}
// 键盘事件					e是键盘事件对象
document.onkeydown=function(e){
	// 用e.keyCode 获取键盘的值
	var key=e.keyCode
	// 此时key得到的就是用户按下的键位
	if(key==13&&$input.value!=''){
		input_value()
	}
}