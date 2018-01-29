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
    'redirect',
    'laypage'
]
window.top.registeModule(window, requireModules,'');

layui.use(requireModules, function(layer,element,carousel,flow,util,laytpl,ajax,keyBind,toast,redirect,laypage) {

    var $ = layui.jquery;
    var element = layui.element;
    var carousel = layui.carousel;
    var flow = layui.flow;

    var showproduct = {
        "boxid":"showbox",
        "sumid":"showsum",
        "boxw":420,//宽度,该版本中请把宽高填写成一样
        "boxh":420,//高度,该版本中请把宽高填写成一样
        "sumw":60,//列表每个宽度,该版本中请把宽高填写成一样
        "sumh":60,//列表每个高度,该版本中请把宽高填写成一样
        "sumi":7,//列表间隔
        "sums":5,//列表显示个数
        "sumsel":"sel",
        "sumborder":1,//列表边框，没有边框填写0，边框在css中修改
        "lastid":"showlast",
        "nextid":"shownext"
    };//参数定义

    $.Glasses.pcGlasses(showproduct);//方法调用，务必在加载完后执行

    var sys_item = {
        "mktprice": "13.00",
        "price": "6.80",
        "sys_attrprice": {
            "3_13": {"price": "6.80", "mktprice": "13.00"},
            "3_14": {"price": "7.80", "mktprice": "14.00"},
            "3_16": {"price": "8.80", "mktprice": "15.00"},
            "3_17": {"price": "9.80", "mktprice": "16.00"},
            "4_13": {"price": "6.80", "mktprice": "13.00"},
            "4_14": {"price": "7.80", "mktprice": "14.00"},
            "4_16": {"price": "8.80", "mktprice": "15.00"},
            "4_17": {"price": "9.80", "mktprice": "16.00"},
            "8_13": {"price": "6.80", "mktprice": "13.00"},
            "8_14": {"price": "7.80", "mktprice": "1400"},
            "8_16": {"price": "8.80", "mktprice": "15.00"},
            "8_17": {"price": "9.80", "mktprice": "16.00"},
            "9_13": {"price": "6.80", "mktprice": "13.00"},
            "9_14": {"price": "7.80", "mktprice": "14.00"},
            "9_16": {"price": "8.80", "mktprice": "15.00"},
            "9_17": {"price": "9.80", "mktprice": "16.00"},
            "10_13": {"price": "6.80", "mktprice": "13.00"},
            "10_14": {"price": "7.80", "mktprice": "14.00"},
            "10_16": {"price": "8.80", "mktprice": "15.00"},
            "10_17": {"price": "9.80", "mktprice": "16.00"},
            "12_13": {"price": "6.80", "mktprice": "13.00"},
            "12_14": {"price": "7.80", "mktprice": "14.00"},
            "12_16": {"price": "8.80", "mktprice": "15.00"},
            "12_17": {"price": "9.80", "mktprice": "16.00"}
        }
    };

    $(".sys_item_spec .sys_item_specpara").each(function(){
        var i=$(this);
        var p=i.find("ul>li");
        p.click(function(){
            if(!!$(this).hasClass("selected")){
                $(this).removeClass("selected");
                i.removeAttr("data-attrval");
            }else{
                $(this).addClass("selected").siblings("li").removeClass("selected");
                i.attr("data-attrval",$(this).attr("data-aid"))
            }
            getattrprice() //输出价格
        })
    })

    //获取对应属性的价格
    function getattrprice(){
        var defaultstats=true;
        var _val='';
        var _resp={
            mktprice:".sys_item_mktprice",
            price:".sys_item_price"
        }  //输出对应的class
        $(".sys_item_spec .sys_item_specpara").each(function(){
            var i=$(this);
            var v=i.attr("data-attrval");
            if(!v){
                defaultstats=false;
            }else{
                _val+=_val!=""?"_":"";
                _val+=v;
            }
        })
        if(!!defaultstats){
            _mktprice=sys_item['sys_attrprice'][_val]['mktprice'];
            _price=sys_item['sys_attrprice'][_val]['price'];
        }else{
            _mktprice=sys_item['mktprice'];
            _price=sys_item['price'];
        }
        //输出价格
        $(_resp.mktprice).text(_mktprice);  ///其中的math.round为截取小数点位数
        $(_resp.price).text(_price);
    }

    laypage.render({
        elem: 'pageBar',
        count: 70,//数据总数
        jump: function(obj){
            console.log(obj)
        }
    });

    $("#min_bar_page").load("miniBar.html");
});
