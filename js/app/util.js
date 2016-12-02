/**
 * Created by xsy on 2016/12/1 0001.
 */
define(['require','jquery'],function () {
    function getApplicationId() {
        return 'b179fa09df7120fc901fb54e63d5d3e6'
    }

    function getRestApiKey() {
        return '6e10878e800095d650a4c6bcaf42628b';
    }
    function setBaseUrl(url) {
        this.baseUrl=url
    }

    function getBaseUrl() {
        return this.baseUrl
    }

    return{
        getApplicationId:getApplicationId,
        getRestApiKey:getRestApiKey,
        setBaseUrl:setBaseUrl,
        getBaseUrl:getBaseUrl
    }

})

