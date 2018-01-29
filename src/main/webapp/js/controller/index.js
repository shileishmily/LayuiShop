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


    $("#banner .aside-txt .topic").hover(function(){
        $(this).find(".children-list").show()
    },function(){
        $(this).find(".children-list").hide();
    })

    var ins3 = carousel.render({
        elem: '#test3',
        width: '1140px',
        height: '460px',
        interval: 3000
    });

    flow.lazyimg({
        elem: '#good img',
        scrollElem: '#good'
    });


});
