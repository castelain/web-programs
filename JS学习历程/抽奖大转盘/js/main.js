var rawDegree;

$(function(){
    var i = 0;
    $('.toggle').click(function(){
        i ++;

        var left = 3 - i;
        if(left >= 0){
            $('#times').html(left);
        }

        if(i > 3){
            alert('您的次数已用完，不可以再抽了哦！');
            return;
        }else{
            rawDegree = Math.random() * 360;
            $(this).rotate({
                duration: 3000,//旋转的时间
                angle: 0,//开始旋转的角度
                animateTo: rawDegree + 360 * 3,//最终结束时的角度
                callback: function(){
                    //回调的函数
                    showMsg();
                }
            });
        } 
    });
});

function showMsg(){
    if(0 <= rawDegree && rawDegree < 30){
        alert('恭喜你获得了“理财金2000元”！')
        return;
    }else if(30 <= rawDegree && rawDegree < 90){
        alert('运气不佳，谢谢参与！');
        return;
    }else if(90 <= rawDegree && rawDegree < 150){
        alert('恭喜你获得了“理财金5200元”！');
        return;
    }else if(150 <= rawDegree && rawDegree < 210){
        alert('恭喜你获得了“京东eka”！');
        return;
    }else if(210 <= rawDegree && rawDegree < 270){
        alert('运气不佳，谢谢参与！');
        return;
    }else if(270 <= rawDegree && rawDegree < 330){
        alert('恭喜你获得了“理财金1000元”！');
        return;
    }else{
        alert('恭喜你获得了“理财金2000元”！')
        return;
    }
}

var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();
var time = hours + ':' + minutes + ':' + seconds + ' ';
console.log(time);
$('#date').html(time);