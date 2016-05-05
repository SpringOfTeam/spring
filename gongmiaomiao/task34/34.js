//定义对象属性（变量）
function Dot(changeDirec,moveDirec,step){
	this.changeDirec = changeDirec;
	if(moveDirec=="no"){
		this.moveDirec=this.direction;
	}else{
		this.moveDirec = moveDirec;
	}
	this.step = step;
}

//定义对象方法（函数）
Dot.prototype.changeDirection = function(){
	var dot = document.getElementById("dot");
	if (this.changeDirec == "changeleft" ) {
		dot.style.transform = "rotate(270deg)";
	}else if(this.changeDirec == "changeright"){
		dot.style.transform = "rotate(90deg)";
	}else if(this.changeDirec == "changetop"){
		dot.style.transform ="rotate(360deg)";
	}else if(this.changeDirec == "changebot"){
		dot.style.transform = "rotate(180deg)";
	}else if(this.changeDirec == "no"){
		return;
	}
}

Dot.prototype.direction="movetop";

Dot.prototype.moveDirection = function(){
	var dot = document.getElementById("dot");
	if (this.moveDirec == "moveleft" ) {
		this.direction="moveleft";
		if (parseInt(dot.style.left) >= 30) {
			dot.style.left = -40+parseInt(dot.style.left)+"px";
		}else{
			alert("you can't go forward!")
		}		
	}else if(this.moveDirec == "moveright"){
		this.direction="moveright";
		if(parseInt(dot.style.left) < 430){
			dot.style.left = 40+parseInt(dot.style.left)+"px";
		}else{
			alert("you can't go forward!")
		}
	}else if(this.moveDirec == "movetop"){
		this.direction="movetop";
		if (parseInt(dot.style.top) > 20) {
			dot.style.top = -40+parseInt(dot.style.top)+"px";
		}else{
			alert("you can't go forward!")				
		}
	}else if(this.moveDirec == "movebot"){
		this.direction="movebot";
		if (parseInt(dot.style.top) < 380) {
			dot.style.top = 40+parseInt(dot.style.top)+"px";
		}else{
			alert("you can't go forward!")				
		}
	}else if(this.moveDirec == "no"){
		this.direction="no";
		return;
	}
}

Dot.prototype.changeStep = function(){
	var dot = document.getElementById("dot");
		if(dot.style.transform == "rotate(270deg)"){
			if (parseInt(dot.style.left) >= 30) {
				dot.style.left = -40*(this.step-1)+parseInt(dot.style.left)+"px";
			}else{
				alert("you can't go forward!")
			}
		}else if(dot.style.transform == "rotate(90deg)"){
			if(parseInt(dot.style.left) < 430){
				dot.style.left = 40*(this.step-1)+parseInt(dot.style.left)+"px";
			}else{
				alert("you can't go forward!")
			}
		}else if(dot.style.transform == "rotate(180deg)"){
			if (parseInt(dot.style.top) < 380) {
				dot.style.top = 40*(this.step-1)+parseInt(dot.style.top)+"px";
			}else{
				alert("you can't go forward!")				
			}
		}else if(dot.style.transform == "rotate(360deg)"){
			if (parseInt(dot.style.top) > 20) {
				dot.style.top = -40*(this.step-1)+parseInt(dot.style.top)+"px";
			}else{
				alert("you can't go forward!")			
			}			
		}		
}

Dot.prototype.action = function(){
	this.changeDirection();
	this.moveDirection();
	this.changeStep();
}