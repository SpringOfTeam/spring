//定义公共数组
queneArray = [];

//获取text-area的数据存入公共数组
function getData(){
	var text = document.getElementById("text-quene").value;
	if(text.length != 0){
		var textSplit = text.split(" ");
		for(var i = 0; i < textSplit.length; i++){
			queneArray.push(textSplit[i].trim());
		}		
	}
	document.getElementById("text-quene").innerHTML = "";
}

//根据数值内容变化渲染展示的li表现
function render(){
	var getUl = document.getElementById("quene");
	while (getUl.hasChildNodes()){
		getUl.removeChild(getUl.lastChild);
	}
	for(var i = 0; i < queneArray.length; i++){
		var getLi = document.createElement("li");
			getLi.innerHTML = queneArray[i];
			getUl.appendChild(getLi);
	}
}

//调用不同按钮影响数组的函数
//apply, call, argurment目前没搞明白
/*
function lefIn(){
	getData();
	render();
}
*/

function rigIn(){
	getData();
	render();	
}
function lefOut(){
	getData();
	queneArray.splice(0,1);
	render();
}
function rigOut(){
	getData();
	queneArray.splice(queneArray.length-1,1);
	render();	
}

//查询函数
function query(){
	var userInp = document.getElementById("inp-query").value.trim();
	for(var i = 0; i < queneArray.length; i++){
		if(userInp == queneArray[i]){
			var getUl = document.getElementById("quene");
			getUl.childNodes[i].style.color = "green";
		}
	}

}
//浏览器兼容事件监听
function addHandler(element, event, handler){
	if(element.addEventListener){
		element.addEventListener(event,handler,false);
	}else if(element.atachEvent){
		element.atachEvent("on" + event, handler);
	}
}
//初始化不同按钮调用函数
function initRigIn(){
	var rigInBtn = document.getElementById("rigIn");
	addHandler(rigInBtn, "click", rigIn);
}
function initLefOut(){
	var lefOutBtn = document.getElementById("lefOut");
	addHandler(lefOutBtn, "click", lefOut);
}

function initRigOut(){
	var rigOutBtn = document.getElementById("rigOut");
	addHandler(rigOutBtn,"click",rigOut);
}

function queryCheck(){
	var queryBtn = document.getElementById("btn-query");
	addHandler(queryBtn,"click",query);

}
//初始化整个程序
function init(){
	initRigIn();
	initLefOut();
	initRigOut();
	queryCheck();
}

init();