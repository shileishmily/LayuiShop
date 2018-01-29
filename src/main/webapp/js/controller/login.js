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

    var loginController = {
        init: function () {
            loginController.initLogin();
        },

        initLogin: function(){
            var la = document.getElementById("la");
            var ra = document.getElementById("ra");
            var showLi = document.getElementById("li-show");
            var oldLi = document.getElementById("old-li");
            loginController.addEvent(la, "click", function () {
                showLi.style.display = "block";
                oldLi.style.display = "none";
                la.className = "a-cw";
                ra.className = "";
            });
            loginController.addEvent(ra, "click", function () {
                showLi.style.display = "none";
                oldLi.style.display = "block";
                la.className = "";
                ra.className = "a-cw"
            });
            var text1 = $("text1");
            var text2 = $("text2");
            loginController.searchChange(text1, "");
            loginController.searchChange(text2, "");

            loginController.labchange(text1, $("lab1"), "cursor-p1");
            loginController.labchange(text2, $("lab2"), "cursor-p2");
        },

        labchange: function(iput, label, className) {
            this.addEvent(iput, "focus", function () {
                loginController.addClass(label, className);
            });
            loginController.addEvent(iput, "blur", function () {
                loginController.removeClass(label, className);
            });
        },

        //搜索框，清空及初始化value的函数
        searchChange: function(input_obj,start_value){
            loginController.addEvent(input_obj,"focus",function(evt){
                if(loginController.getTarget(evt).value==start_value){
                    loginController.getTarget(evt).value="";
                }
                loginController.getTarget(evt).style.color="#333";
            });
            loginController.addEvent(input_obj,"blur",function(evt){
                if(loginController.getTarget(evt).value==""){
                    loginController.getTarget(evt).value=start_value;
                }
                loginController.getTarget(evt).style.color="#ccc";
            })
        },

        addEvent: function(element,type,fn){
            if(element.addEventListener){
                element.addEventListener(type,fn,false);
            }else if(element.attachEvent){
                element.attachEvent("on"+type,fn);
            }
        },

        //判断是否存在这个class
        hasClass: function(element, className) {
            if(className!=""){
                return element.className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'));
            }else {
                return true;
            }
        },

        //添加一个或多个class，如果不存在的话，（多个class以空格隔开）
        addClass: function(element, className) {
            var classArray=className.split(" ");//分割className，并且屏蔽掉className=空格或者多个空格的情况
            for(var i=0;i<classArray.length;i++){
                if (!loginController.hasClass(element, classArray[i])) {
                    if(/\s$/.test(element.className)||element.className==""){
                        element.className +=classArray[i];
                    }else {
                        element.className +=" "+classArray[i];
                    }
                }
            }
        },
        //删除一个或多个class，如果存在的话（多个class以空格隔开）
        removeClass: function(element, className) {
            var classArray=className.split(" ");
            for(var i=0;i<classArray.length;i++){
                if (loginController.hasClass(element, classArray[i])) {
                    element.className = element.className.replace(new RegExp('(\\s|^)'+classArray[i]+'(\\s|$)')," ");
                }
            }
        },

        getTarget: function(evt){
            if(evt&&evt.target){
                return evt.target
            }else{
                return window.event.srcElement;
            }
        }
    }


    loginController.init();
});

