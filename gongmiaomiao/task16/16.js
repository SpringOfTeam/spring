/**
*aqiData, 存储用户输入的空气指数数据
*aqiData = {
*	"北京"：90，
*	"上海"：40
*};
*/

var aqiData = {};
//var city = document.getElementById("aqi-city-input");
//var num = document.getElementById("aqi-value-input");

/**
*从用户输入中获取数据，向aqiData中增加一条数据
*然后渲染aqi-list列表，增加新增的数据
*/
function addAqiData(){
	var city = document.getElementById("aqi-city-input");
	var num = document.getElementById("aqi-value-input");
	var cityVal = city.value.trim();
	var numVal = num.value.trim();
	if (/[\D]/.test(cityVal)&&/[\d]/.test(numVal)) {
		//aqiData.city = cityVal;
		//aqiData.num = numVal;
		aqiData[cityVal] = numVal;
	}else{
		alert("input imformation is wrong.");
	}
}

/**
*渲染aqi-table表格
*/
function renderAqiList(){
		var city = document.getElementById("aqi-city-input");
	var num = document.getElementById("aqi-value-input");
	var cityVal = city.value.trim();
	var tableBody = document.getElementById("aqi-table");
	var td1 = document.createElement("td");
	var td2 = document.createElement("td");
	var td3 = document.createElement("td");
	td3.className = "del";
	//td3.onclick=delBtnHandle(this);
	//td3.addEventListener("click",delBtnHandle(this));
	var row = document.createElement("tr");
	td1.innerHTML = cityVal;
	td2.innerHTML = aqiData[cityVal];
	td3.innerHTML = "<a onclick='delBtnHandle(this)'>删除</a>";


	row.appendChild(td1);
	row.appendChild(td2);
	row.appendChild(td3);

	tableBody.appendChild(row);
}
/*
*点击add-btn时的处理逻辑
*获取用户输入，更新数据，并进行页面呈现的更新
*/
function addBtnHandle(){
	addAqiData();
	renderAqiList();
}

/**
*点击各个删除按钮的时候的处理逻辑
*获取哪个城市数据被删，删除数据，更新表格显示
*/
function delBtnHandle(dot){
	//do
	//alert(dot);
	//dot.parentNode.parentNode.style.display = "none";
	//renderAqiList();
	dot.parentNode.parentNode.parentNode.removeChild(dot.parentNode.parentNode);
}

//function init(){
	// 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandlehansh
	//document.getElementById("add-btn").addEventListener("click",addBtnHandle);
	// 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
//}

//init();