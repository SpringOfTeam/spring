//定义输入的数据存储在数组中
var inputArray = [];

//输入数据为1-100的数值函数
function numberTest(value){
	var pattenr = /^(([1-9][0-9])|100)$/;
	if (pattenr.test(value)) {
		return value;
	}else{
		alert("your input is wrong");
	}
}

//事件监听浏览器兼容处理
function addHandler(element, event, handler){
	if(element.addEventListener){
		element.addEventListener(event,handler,false);
	}else if(element.attachEvent){
		element.attachEvent("on"+event,handler);
	}

}

//从存储的数组中获取数据进行事件处理
//左侧入函数
function lefIn(){
	var inpData = document.getElementById("ipt").value;
	var ulIncre = document.getElementById("utar");
	var liElement = document.createElement("li");
	var len = inputArray.length;
	if(len < 60){
		if(numberTest(inpData)!=undefined){
			inputArray.unshift(numberTest(inpData));
			liElement.style.height = inputArray[0] + "px";
			ulIncre.insertBefore(liElement,ulIncre.childNodes[0]);	
		}
		document.getElementById("ipt").value = "";
		addHandler(liElement, "click",liAt);		
	}else{
		alert("you can't input anymore!");		
	}

}

//初始化左侧入函数，给按钮添加事件监听
function initLeftIn(){
	var lefInBtn = document.getElementById("lefIn");
	addHandler(lefInBtn,"click",lefIn);
}


//右侧入函数
function rigIn(){
	var inpData = document.getElementById("ipt").value;
	var ulIncre = document.getElementById("utar");
	var liElement = document.createElement("li");
	var len = inputArray.length;
	if(len < 60){
		if(numberTest(inpData)!=undefined){
			inputArray.push(numberTest(inpData));
			liElement.style.height =  inputArray[len] + "px";
			ulIncre.appendChild(liElement);	
		}
		document.getElementById("ipt").value = "";
		addHandler(liElement, "click",liAt);		
	}else{
		alert("you can't input anymore!");		
	}
}

//初始化右侧入函数，给按钮添加事件监听
function initrigIn(){
	var rigInBtn = document.getElementById("rigIn");
	addHandler(rigInBtn,"click",rigIn);
}

//左侧出函数
function lefOut(){
	var ulIncre = document.getElementById("utar");
	var inpData = document.getElementById("ipt").value;
	var aValue = ulIncre.firstChild.innerText;
	inputArray.shift(inpData);
	ulIncre.removeChild(ulIncre.firstChild);
	alert(aValue);
}

//初始化左侧出函数，给按钮添加事件监听
function initlefOut(){
	var lefOutBtn = document.getElementById("lefOut");
	addHandler(lefOutBtn,"click",lefOut);
}


//右侧出函数
function rigOut(){
	var ulIncre = document.getElementById("utar");
	var inpData = document.getElementById("ipt").value;
	var aValue = ulIncre.lastChild.innerText;
	inputArray.pop(inpData);
	ulIncre.removeChild(ulIncre.lastChild);
	alert(aValue);	
}

//初始化右侧出函数，给按钮添加事件监听
function initRigOut(){
	var rigOutBtn = document.getElementById("rigOut");
	addHandler(rigOutBtn,"click",rigOut);	
}

//li里面加<a>点击onclick事件点击删除函数，并且弹窗显示数值
function liAt(event){
	var aValue = event.target.innerText;
	event.target.parentNode.removeChild(event.target);
	alert(event.target.innerText);	
}

//初始化li里面加<a>点击onclick事件点击删除函数，给按钮添加事件监听
//动态添加无法使用初始化事件，必须在添加的时候加上所有的后续处理
/*
function initliAt(){
	var uLi = document.getElementsByTagName("li");
	var len = uLi.length;
	for(var i = 0; i < len; i++){
		addHandler(uLi[i],"click",liAt(event));
	}
}
*/
//排序函数冒泡可视化问题
function Rank(){
	var ulIncre = document.getElementById("utar");
	var liElement = document.getElementsByTagName("li");
}

//初始化排序函数，给按钮添加事件监听
function initRank(){
	var rankBtn = document.getElementById("rank");
	addHandler(rankBtn,"click",Rank);	
}


//init()函数添加需要处理的事件函数，并调用
function init(){
	initLeftIn();
	initrigIn();
	initlefOut();
	initRigOut();
	initRank();
}

init();