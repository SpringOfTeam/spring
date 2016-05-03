
//定义对象
function dialog(theme, content){
	this.theme = theme;
	this.content = content;
}
//prototype添加对象方法必须直接对对象定义，不是实列
dialog.prototype.disp = function(){
	var mask = document.getElementById("mask");
	if(mask.style.display == "none"){
		mask.style.display = "block";
	}else{
		mask.style.display = "none";
	}
}

var dialog1 = new dialog("浮出层","这是一个浮出层");

window.onload = function(){
		var sub = document.getElementById("sub");
		sub.addEventListener("click",function(){
			dialog1.disp();//面向对象通过调用对象的方法
		});
		var login = document.getElementById("header");
		login.addEventListener("click",function(){
			dialog1.disp();
		})
}
