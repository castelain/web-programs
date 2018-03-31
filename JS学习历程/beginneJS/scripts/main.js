var myImg = document.querySelector('img');
myImg.onclick = function(){
    var imgSrc = myImg.getAttribute('src');
    if(imgSrc === 'images/firefox-icon.png'){
        myImg.setAttribute('src','images/firefox-icon1.png');
    }else{
        myImg.setAttribute('src','images/firefox-icon.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName(){
    var name = prompt('Please input your name!');
    localStorage.setItem('name',name);
    myHeading.innerHTML = "Welcome , " + name;
    if(! localStorage.getItem('name')){
        setUserName();
    }else{
        var storageName = localStorage.getItem('name');
        myHeading.innerHTML = "Hello , " + storageName;
    }
}

myButton.onclick = function(){
    setUserName();
}
