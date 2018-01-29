var webName = getWebName();

layui.config({
    base: webName + '/js/modules/',
    version: 2018011001
});

var requireModules = [
    'layer',
    'element',
    'carousel',
    'flow',
    'util',
    'laytpl',
    'request',
    'key-bind',
    'toast',
    'redirect'
]
window.top.registeModule(window, requireModules,'');

layui.use(requireModules, function(layer,element,carousel,flow,util,laytpl,ajax,keyBind,toast,redirect) {

    var $ = layui.jquery;
    var element = layui.element;
    var carousel = layui.carousel;
    var flow = layui.flow;

    //购物车点击事件
    $('#shopCart').on('click', function() {
        // redirect("cart.html");
        window.open("cart.html");
    });


    //点击首页搜索按钮
    $('#searchBtn').on('click', function() {
        window.open("search.html");
    });
});
