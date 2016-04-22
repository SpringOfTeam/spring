window.onload = function(){
		var inp = document.getElementById("inp");
		addEventHandler(inp,"keypress",tagInput);
}


//定义inputArray存储数据
inputArray = [];
textArray = [];
textUpArray = [];

//获取符合要求的信息
function getData(){
	var inp = document.getElementById("inp").value.trim();
	if(inputArray.length == 0){
		inputArray.push(inp);
	}else{
		if(inputArray.length < 10){
			for(var i = 0; i < inputArray.length; i++){
				if(inputArray.indexOf(inp)==-1){
					inputArray.push(inp);
				}
			}
		}else{
			for(var i = 0; i < inputArray.length; i++){
				if(inputArray.indexOf(inp)==-1){
					inputArray.push(inp);
				}
			}
			inputArray.shift();
		}		
	}
}

function getText(){
	var text = document.getElementById("text").value.trim();
	var textToAr = text.split(" ");
	var temp = [];
	if(textArray.length == 0){
		for(var h = 0; h < textToAr.length; h++){
			textArray.push(textToAr[h]);
			textUpArray = textArray;
		}
		copy = textUpArray;
		if(textUpArray.length > 10){
			for(var j = 0; j < Math.abs(copy.length-10); j++){
				textUpArray.shift();
			}
		}
	}else{
		for(var i = 0; i < textToAr.length; i++){
			if(textArray.indexOf(textToAr[i]) == -1){			
				temp.push(textToAr[i]);
			}
		}
		textUpArray = textArray.concat(temp);
		copy = textUpArray;
		if(textUpArray.length > 10){
			for(var j = 0; j < Math.abs(copy.length-10); j++){
				textUpArray.shift();
			}
		}
	}
}
//渲染需求表现
function render(){
	var getTag = document.getElementById("tag");
	while(getTag.hasChildNodes()){
		getTag.removeChild(getTag.lastChild);
	}
	for(var i = 0; i < inputArray.length; i++){
		var createLi = document.createElement("li");
		createLi.innerHTML = inputArray[i];
		getTag.appendChild(createLi);
		addEventHandler(createLi,"mouseover", delTex);
		addEventHandler(createLi,"click", del);
		addEventHandler(createLi,"mouseout", returnTex);

	}
}

function renderHabbit(){
	var getText = document.getElementById("habbit");
	while(getText.hasChildNodes()){
		getText.removeChild(getText.lastChild);
	}
	for(var i = 0; i < textUpArray.length; i++){
		var createLi = document.createElement("li");
		createLi.innerHTML = textUpArray[i];
		getText.appendChild(createLi);
	}
}
//按需求状况函数调用数据渲染
function tagInput(evt){
	if(evt.keyCode == 13 || evt.keyCode == 32 || evt.keyCode == 188){
		getData();
		render();
	}
}

function habbit(){
	getText();
	renderHabbit();
}
//当鼠标悬停在tag上时，tag前增加删除二字，点击tag可删除
function  delTex(evt){
	var old = evt.target.innerHTML
	evt.target.style.backgroundColor = "red";
	evt.target.innerHTML = "删除" + old;
}
function del(evt){
	evt.target.parentNode.removeChild(evt.target);
}

function returnTex(evt){
	var old = evt.target.innerHTML
	evt.target.style.backgroundColor = "#3385FF";
	evt.target.innerHTML = old.replace("删除","");	
}

//初始化事件并对函数进行调用
//浏览器兼容
function addEventHandler(ele, event, handler){
	if(ele.addEventListener){
		ele.addEventListener(event,handler,false);
	}else if(ele.attachEvent){
		ele.attachEvent("on"+event, handler);
	}
}

function initHabbitBtn(){
	var habitBtn = document.getElementById("btn");
	addEventHandler(habitBtn, "click", habbit);
}
/*动态事件不能写死
function initTag(evt){
	addEventHandler(evt.target,"keypress",tagInput);
}
*/

//init()函数
function init(){
	initHabbitBtn();
}
init();
