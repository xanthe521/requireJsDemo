/**
 * Created by xsy on 2016/12/1 0001.
 */

define(['require','jquery','util','Bmob'],function (require, $, util, Bmob) {

    function Login($container){
        this.$container=$container;
        this.init();
        this.eventBinding();
    }

    Login.prototype={
        init:function () {
            Bmob.initialize(util.getApplicationId(),util.getRestApiKey());
        },
        eventBinding:function () {

            this.$container.on("click","#btnLogin",{self:this},function (evt) {
                var self = evt.data.self;
                var username = self.$container.find("#username").val();
                var password = self.$container.find("#password").val();
                var user = Bmob.Object.extend("ayang");
                var userQuery = new Bmob.Query(user);
                userQuery.equalTo("username",username);
                userQuery.equalTo("password",password);
                userQuery.first({
                    success:function (result) {
                        if (result == null) {
                            alert("登陆失败")
                        }else{
                            alert("登陆成功")
                        }
                    },
                    error:function (error) {
                        console.log(error);
                    }
                })
            })
        },
        actions:{

        }
    }


    return Login;
})
