//change direction 
function direction(){
	var doT = document.getElementById("dot");
	var inOder = document.getElementById("inp").value;
	if (inOder == "TRUN LEF" ) {
		doT.style.transform = "rotate(270deg)";
	}else if(inOder == "TRUN RIG"){
		doT.style.transform = "rotate(90deg)";
	}else if(inOder == "TRUN BAC"){
		if (doT.style.transform =="rotate(180deg)") {
			doT.style.transform ="rotate(360deg)"
		}else{
			doT.style.transform = "rotate(180deg)";
		}
	}
}
//获取一次命令，执行一次位置前移
function go(){
	direction();
	var doT = document.getElementById("dot");
	var inOder = document.getElementById("inp").value;
	alert(doT.style.top);
	if(inOder == "GO"){
		if(doT.style.transform == "rotate(270deg)"){
			if (parseInt(doT.style.left) >= 30) {
				dot.style.left = -40+parseInt(doT.style.left)+"px";
			}else{
				alert("you can't go forward!")
			}
		}else if(doT.style.transform == "rotate(90deg)"){
			if(parseInt(doT.style.left) < 430){
				dot.style.left = 40+parseInt(doT.style.left)+"px";
			}else{
				alert("you can't go forward!")
			}
		}else if(doT.style.transform == "rotate(180deg)"){
			if (parseInt(doT.style.top) < 380) {
				dot.style.top = 40+parseInt(doT.style.top)+"px";
			}else{
				alert("you can't go forward!")				
			}
		}else if(doT.style.transform == "rotate(360deg)"){
			if (parseInt(doT.style.top) > 20) {
				dot.style.top = -40+parseInt(doT.style.top)+"px";
			}else{
				alert("you can't go forward!")				
			}			
		}		
	}
}

//浏览器事件监听兼容
function addEventHandler(ele, event, handler){
	if(ele.addEventListener){
		ele.addEventListener(event, handler,false);
	}else if(ele.attachEvent){
		ele.attachEvent("on" + event, handler);
	}
}
//初始化按钮执行命令
function initBtn(){
	var btn = document.getElementById("btn");
	addEventHandler(btn, "click", go);
}

function init(){
	initBtn();
}

init();