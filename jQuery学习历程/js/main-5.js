var card_trigger = $("#card_trigger");
var card = $("#card");
card.css("display","none");

card_trigger.on("click",function(){
    if(card.is(":visible")){
        card.slideUp();
    }else{
        card.slideDown();
    }
});

card.on("mouseenter",function(){
    card.addClass("active");
});
card.on("mouseleave",function(){
    card.removeClass("active");
});