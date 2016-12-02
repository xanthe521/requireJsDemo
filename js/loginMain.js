require(['main'],function (main) {
    var thisRequireJs=['app/login'];

    var requireJsArray=main.jsToLoad.concat(thisRequireJs);

    require(requireJsArray,function () {
        var domReady = require("domReady");
        var login = require("app/login")
        var util= require('util');
        var url=util.getBaseUrl()+"pages/app/login.html"
        domReady(function () {
            $("#indexMain").load(url,{},function(){
                new login($("#loginBox"));
            })
        })
    })

});