var myHeading = document.querySelector("h2");
myHeading.textContent = "hello World";

//图像转换器
var myImage = document.querySelector("img");
myImage.onclick = function() {
	var mySrc = myImage.getAttribute("src");
	if(mySrc === "images/woman.png"){
		myImage.setAttribute("src","images/man.png");
	}else{
		myImage.setAttribute("src","images/woman.png");
	}
}

//添加个性化的欢迎消息
var myButton = document.querySelector("button");
function setUserName(){
	var myName = prompt("请输入你的名字！");
	localStorage.setItem("name",myName);
	myHeading.textContent = "Have fun,"+myName;
}
myButton.onclick = function(){
	setUserName();
	if(!localStorage.getItem("name")){
		setUserName();
	}else{
		var storedName = localStorage.getItem("name");
		myHeading.textContent = "Have fun,"+storedName;
	}
}


