var trigger = $('#trigger');
var c = $('#card');
var loaded = false;

trigger.on('click',function(){
    if (c.is(':visible')){
        c.slideUp();
    }else{
        if(!loaded){
            c.load('card.html');
            loaded = true;
        }
        c.slideDown();
    }
});