var stars = document.getElementById('stars');
var collect = document.getElementById('collect');
var stared = true;
var collected = false;
stars.onclick = function(){
    stared = !stared;
    if(!stared){
        stars.style.backgroundColor = 'rgba(100,100,250,.8)';
        stars.innerHTML = '取消点赞';
        alert('点赞成功！');  
    }else{
        stars.style.backgroundColor = 'aliceblue';
        stars.innerHTML = '点赞';
        alert('取消点赞成功！')
    }
}
collect.onclick = function(){
    collected = !collected;
    if(!collected){
        alert('成功收藏这篇文章啦！')
    }else{
        alert('已经收藏过这篇文章了哦！')
    }
}