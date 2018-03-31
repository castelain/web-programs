var trigger = $("#trigger");
var card = $("#card");
var loaded = false;

trigger.on("click",function(){
    card.load("card.html");
    card.toggle();
});