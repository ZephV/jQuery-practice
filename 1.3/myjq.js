var board = $('#board');

function toggle(){
    if(board.hasClass('active')){
        board.removeClass('active');
        console.log("b");
    }else {
        board.addClass('active');
        console.log("c");
    }
}

setInterval(toggle,200);

