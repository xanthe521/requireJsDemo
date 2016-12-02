require.config({
    shim:{
        'Bmob':{
            exports:'Bmob'
        }
    },
    paths: {
        jquery:'lib/jquery',
        'Bmob':'lib/bmob-min',
        domReady:'lib/domReady',
        util:'app/util'
    }
});

define(['util'],function (util) {
    util.setBaseUrl(BATH_URL);
    return {
        jsToLoad:[
            'jquery',
            'Bmob',
            'domReady',
            'util'
        ]
    }
})