$(function(){
    "use strict";

    window.Input = function(selector){
        var rule = {
            required: true,
        };
        var $ele;
        var val;
        var validator;
        var me = this;

        this.check = function(){
            init();
        }

        this.load_validator = function(){
            val = get_value();
            validator = new Validator(val,rule);
        }

        function init(){
            find_input(selector);
            get_rule();
            get_value();
            me.load_validator();
            listen();
        }

        function listen(){
            $ele.on("blur",function(){
                var r = me.validator.is_valid(me.get_val());
                console.log("valid:",r);
            });
        }

        function find_input(selector){
            if(selector instanceof jQuery){
                $ele = selector;
            }else{
                $ele = $(selector);
            }
        }

        function get_rule(){
                var rule_str = $ele.data("rule");
                if(!rule_str){
                    return;
                }
                var rules_arr = rule_str.split("|");
                for(var i = 0; i < rules_arr.length; i++){
                    var temp = rules_arr[i];
                    var rule_arr = temp.split(":");
                    rule[rule_arr[0]] = JSON.parse(rule_arr[1]);
                }
            
        }
        
        function get_value(){
            val = $ele.val();
        }

        init();
    }
});