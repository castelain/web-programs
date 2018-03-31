var board = $("#board");

function toggle(){
    if(board.hasClass("active")){
        board.removeClass("active");
    }else{
        board.addClass("active");
    }
}

setInterval(toggle,200);