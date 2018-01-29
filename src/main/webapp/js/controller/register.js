var webName = getWebName();

layui.config({
    base: webName + '/js/modules/',
    version: 2018011001
});

var requireModules = [
    'layer',
    'element',
    'util',
    'request',
    'key-bind',
    'toast',
    'redirect'
]
window.top.registeModule(window, requireModules, '');

layui.use(requireModules, function (layer, element, util, ajax, keyBind, toast, redirect) {

    // var $ = layui.jquery;
    // var element = layui.element;

    var registerController = {
        init: function () {

        }


    }


    registerController.init();
});

