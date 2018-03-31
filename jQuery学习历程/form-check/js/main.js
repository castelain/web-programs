$(function(){
   var input = new Input("input[data_rule]");
   var result = input.check();
   
   var button = $("button");
   button.on("click",function(e){
       e.preventDefault();
       if(result){
           alert("注册成功啦！");
       }else{
           alert("注册不成功誒！");
       }
   });

    // var test = new Input("#name");
    // var valid = test.validator.is_valid();
    // console.log("valid:",valid);
});

