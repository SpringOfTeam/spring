/*数据格式演示
var aqiSourceData = {
	"北京"：{
	"2016-01-01":10,
	"2016-01-02":10,
	"2016-01-03":10,
	"2016-01-04":10
	}
}

*/

//两个函数用于随机模拟生产测试数据
function getDateStr(dat){
	var y = dat.getFullYear();
	var m = dat.getMonth() + 1;
	m = m < 10 ? '0' + m :m;
	var d = dat.getDate();
	d = d < 10 ? '0' + d:d;
	return y + '-' + m + '-' + d;
}
function randomBuildData(seed){
	var returnData = {};
	var dat = new Date("2016-01-01");
	var datStr = '';
	for(var i= 1; i < 92; i++){
		datStr = getDateStr(dat);
		returnData[datStr] = Math.ceil(Math.random()*seed);
		dat.setDate(dat.getDate() + 1);
	}
	return returnData;
}

//数据生产
var aqiSourceData = {
	"北京": randomBuildData(500),
	"上海": randomBuildData(300),
	"广州": randomBuildData(200),
	"深圳": randomBuildData(100),
	"成都": randomBuildData(300),
	"西安": randomBuildData(500),
	"福州": randomBuildData(400),
	"厦门": randomBuildData(100),
	"沈阳": randomBuildData(500)
};


//定义存储图表数据
chartData = {};

//获取事件信息存储
 pageChoice = {
	nowGetTime: "day",
	nowSelectCiyt: 0
};


//准备chartData的数据输出
function aqiChartData(){
	//var nowData = aqiSourceData.pageChoice.nowSelectCiyt;
	//var nowData = aqiSourceData.pageChoice["nowSelectCiyt"];
	var nowData = aqiSourceData[pageChoice.nowSelectCiyt];
	if(pageChoice.nowGetTime == "day"){
		chartData = nowData;
	}else if(pageChoice.nowGetTime == "week"){
		chartData = {};
		sumData = 0;
		sumCount = 0;
		week = 0;
		for(item in nowData){
			sumData += nowData[item];
			sumCount ++;
			if(new Date(item).getDay() == 6){
				week++;
				chartData["第" + week + "周"] = Math.floor(sumData/sumCount);
				sumData = 0;
				sumCount = 0;
			}

		}
	}else if(pageChoice.nowGetTime == "month"){
		chartData = {};
		sumData = 0;
		sumCount = 0;
		month = 0;
		for(item in nowData){
			sumData += nowData[item];
			sumCount ++;
			if(new Date(item).getDate() == 31){
				month++;
				chartData["第" + month + "月"] = Math.floor(sumData/sumCount);
				sumData = 0;
				sumCount = 0;
			}		
		}
		
	}

}

//渲染输出图表
function render(){
	var renderChart = document.getElementById("aqi-chart-wrap");
	//对象的Key获取用for,数组用length
	for(var item in chartData){
		var showChart = document.createElement("div");
		showChart.style.height = chartData[item] + "px";
		renderChart.appendChild(showChart);
	}

}

//判断时间输入是否变化,执行操作
function timeChange(){
	if(pageChoice.nowGetTime == this.value){
		return;
	}else{
		pageChoice.nowGetTime = this.value;
	}
	aqiChartData();
	render();
}

//判断城市输入是否变化,执行操作
function cityChange(){
	if(pageChoice.nowSelectCiyt == this.value){
		return;
	}else{
		pageChoice.nowSelectCiyt = this.value;
	}
	aqiChartData();
	render();
}

//事件监听的浏览器兼容
function addHandler(ele, event, handler){
	if(ele.addEventListener){
		ele.addEventListener(event,handler,false);
	}else if(ele.attachEvent){
		ele.attachEvent("on"+event,handler)
	}
}

//初始化添加时间的事件监听
function initTimeChange(){
	var timeFeil = document.getElementById("form-gra-time");
	var timeElemt = timeFeil.getElementsByTagName("input");
	for(var i = 0; i < timeElemt.length; i++){
		addHandler(timeElemt[i], "click", timeChange);
	}
}


//初始化添添加城市的事件监听
function initcityChange(){
	var citySelect = document.getElementById("city-select");
	for (item in aqiSourceData){
		var optinCity = document.createElement("option");
		optinCity.innerHTML = item;
		citySelect.appendChild(optinCity);
	}
	addHandler(citySelect, "change", cityChange);
}

//初始化函数输出
function init(){
	initTimeChange();
	initcityChange();
	aqiChartData();
	render();
}
//调用函数
init();








