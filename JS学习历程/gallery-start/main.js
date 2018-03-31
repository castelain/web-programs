var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for(var i = 1;i <= 5;i ++){
      var newImage = document.createElement('img');
      newImage.setAttribute('src', ('images/pic' + i + '.jpg'));
      newImage.addEventListener('click',changeImg);
      thumbBar.appendChild(newImage);
}
function changeImg(e){
    var path = e.target.getAttribute('src');
    displayedImage.setAttribute('src',path);
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click',changeOverlap);
function changeOverlap(){
    var sign = btn.textContent;
    if(sign === 'Darken'){
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }else{
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}
