var leftIn = document.getElementById("left-in");
var rightIn = document.getElementById("right-in");
var leftOut = document.getElementById("left-out");
var rightOut = document.getElementById("right-out");

var input = document.getElementById("input");

var ul = document.getElementsByTagName("ul")[0];

leftIn.onclick = function () {
	if (input.value.length <= 0) {
        alert("输入值为空");
        return false;
	}
	var newNode = document.createElement("li");
	newNode.innerHTML = input.value;
	ul.insertBefore(newNode,ul.firstChild);
}

rightIn.onclick = function () {
	if (input.value.length <= 0) {
		alert("输入值为空");
		return false;
	}
	var newNode = document.createElement("li");
    newNode.innerHTML = input.value;
    ul.appendChild(newNode);
}

leftOut.onclick = function () {
	if (ul.hasChildNodes()) {
		alert(ul.firstChild.innerHTML);
		ul.removeChild(ul.firstChild);
	}else {
		alert("队列为空");
		return false;
	}
}

rightOut.onclick = function() {
	if (ul.hasChildNodes()) {
		alert(ul.firstChild.innerHTML);
		ul.removeChild(ul.lastChild);
	}else {
		alert("队列为空");
		return false;
	}
}

ul.onmouseover=function (){
        var deleteUl = ul.getElementsByTagName("li");
        for(var i in deleteUl){
            deleteUl[i].index=i;
            deleteUl[i].onclick=function(){
                ul.removeChild(ul.childNodes[this.index]);
            }
        }
    }