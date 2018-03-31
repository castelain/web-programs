$(function(){
    "use strict";

    window.Validator = function(val,rule){

        this.is_valid = function(){
           var key;
            //如果不是必填项且用户未输入东西，则判断为真
           if(!rule.validate_required && !val){
               return true;
           }
           for(key in rule){
               if(key === "required"){
                   continue;
               }
               var r = this["validate_" + key]();
               if(!r){
                   return false;
               }
           }
           return true;
        }


        this.validate_max = function(){
            pre_max_min();
            return val <= rule.max;
        }

        this.validate_min = function(){
            pre_max_min();
            return val >= rule.min;
        }

        this.validate_maxLength = function(){
            pre_length();
            return val.length <= rule.maxLength;
        }

        this.validate_minLength = function(){
            pre_length();
            return val.length >= rule.minLength;
        }

        this.validate_required = function(){
            var real = $.trim(val);
            if(!real && real !== 0){
                return false;
            }
            return true;
        }

        this.validate_pattern = function(){
            var reg = new RegExp(rule.pattern);
            return reg.test(val);
        }

        // 这个函数用于完成validate_max以及validate_min的前置工作
        function pre_max_min(){
            val = parseFloat(val);
        }

        //这个函数用于完成validate_maxLength以及validate_minLength的前置工作
        function pre_length(){
            val = $.trim(val);
            val = val.toString();
        }

    }
});