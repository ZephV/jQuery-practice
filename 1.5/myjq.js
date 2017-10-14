var card = $('#card');
var btn = $('#card-taggle');

btn.on('click',
    function () {
        if (card.is(':visible')) {
            card.slideUp(); //hide();
        } else {
            card.slideDown();  //show();
        }
    });

card.on('mouseenter',function(){card.addClass('active');});

card.on('mouseleave',function(){card.removeClass('active')});