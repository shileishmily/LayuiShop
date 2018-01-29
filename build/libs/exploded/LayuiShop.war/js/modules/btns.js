/**
 * 用来管理页面中的按钮（包括列表中的）
 */

layui.define(function(exports) {

    var baseBtnClass = 'layui-btn ';
    var btnConfig = {
    	'batchAudit': {
            className: baseBtnClass + 'layui-btn-normal layui-btn-danger batchAudit',
            icon: '&#xe605;',
            name: '批量审核'
        },
        'edit': {
            className: baseBtnClass + 'layui-btn-warm edit',
            icon: '&#xe642;',
            name: '编辑'
        },
        'delete': {
            className: baseBtnClass + 'layui-btn-danger delete',
            icon: '&#xe640;',
            name: '删除'
        },
        'add': {
            className: baseBtnClass + 'add',
            icon: '&#xe654;',
            name: '添加'
        },
        'refresh': {
            className: baseBtnClass + 'layui-btn-normal refresh',
            icon: '&#x1002;',
            name: '刷新'
        },
        'export': {
            className: baseBtnClass + 'layui-btn-normal export',
            icon: '&#xe61e;',
            name: '导出'
        },
        'copy': {
            className: baseBtnClass + 'layui-btn-normal copy',
            icon: '&#xe630;',
            name: '复制'
        },
        'audit': {
            className: baseBtnClass + 'layui-btn audit',
            icon: '&#xe605;',
            name: '提审'
        },
        'switchorder': {
            className: 'switchorder',
            prop: 'enable', //对应提交时候的name值
            name: '接单|停止', //对应显示的字
            checked: true
        },
        'coercion-account': {
            className: baseBtnClass + 'layui-btn-normal coercion-account',
            icon: '&#xe620;',
            name: '批量平仓',
            event: 'coercion-account'
        },
        'close-account': {
            className: baseBtnClass + 'layui-btn-normal close-account',
            icon: '&#xe620;',
            name: '批量关闭',
            event: 'close-account'
        },
        'lock-account': {
            className: baseBtnClass + 'layui-btn-normal lock-account',
            icon: '&#xe620;',
            name: '批量锁定',
            event: 'lock-account'
        },
        'unlock-account': {
            className: baseBtnClass + 'layui-btn-normal unlock-account',
            icon: '&#xe620;',
            name: '批量解锁',
            event: 'unlock-account'
        },
        'cny-occupy': {
            className: baseBtnClass + 'layui-btn-normal cny-occupy',
            icon: '&#xe620;',
            name: '人民币占用',
            event: 'cny-occupy'
        },
        'cny-release': {
            className: baseBtnClass + 'layui-btn-normal cny-release',
            icon: '&#xe620;',
            name: '人民币释放',
            event: 'cny-release'
        },
        'in-fundpool': {
            className: baseBtnClass + 'layui-btn-normal in-fundpool',
            icon: '&#xe620;',
            name: '资金入池',
            event: 'in-fundpool'
        },
        'out-fundpool': {
            className: baseBtnClass + 'layui-btn-normal out-fundpool',
            icon: '&#xe620;',
            name: '资金出池',
            event: 'out-fundpool'
        },
        'view-record': {
            className: baseBtnClass + 'layui-btn-normal view-record',
            icon: '&#xe615;',
            name: '查看记录',
            event: 'view-record'
        },
        'key-coercion': {
            className: baseBtnClass + 'layui-btn-normal key-coercion',
            icon: '&#xe620;',
            name: '一键平仓',
            event: 'key-coercion'
        },
        'key-forbid': {
            className: baseBtnClass + 'layui-btn-normal key-forbid',
            icon: '&#xe620;',
            name: '一键禁买',
            event: 'key-forbid'
        },
        'row-edit': {
            className: baseBtnClass + 'layui-btn-small layui-btn-warm row-edit',
            icon: '&#xe642;',
            name: '编辑'
        },
        'row-view': {
            className: baseBtnClass + 'layui-btn-small layui-btn-normal row-view',
            icon: '&#xe615;',
            name: '查看'
        },
        'row-config': {
            className: baseBtnClass + 'layui-btn-small layui-btn-primary row-config',
            icon: '&#xe620;',
            name: '配置'
        },
        'row-submitAudit': {
            className: baseBtnClass + 'layui-btn-small row-submitAudit',
            icon: '&#xe605;',
            name: '提审'
        },
        'row-reset-pwd': {
            className: baseBtnClass + 'layui-btn-small layui-btn-primary row-reset-pwd',
            icon: '&#x1002;',
            name: '重置密码'
        },
        'row-switch': {
            className: 'row-switch',
            prop: 'enable', //对应提交时候的name值
            name: '启用|禁用' //对应显示的字
        },
        'row-switch-sale': {
            className: 'row-switch-sale',
            prop: 'sale', //对应提交时候的name值
            name: '上架|下架' //对应显示的字
        },
        'row-switch-report': {
            className: 'row-switch-report',
            prop: 'enalbleReport',
            name: '锁交易|解锁'
        },
        'row-audit': {
            className: baseBtnClass + 'layui-btn-small layui-btn-danger row-audit',
            icon: '&#xe605;',
            name: '审核'
        },
        'row-audit1': {
            className: baseBtnClass + 'layui-btn-small layui-btn-danger row-audit1',
            icon: '&#xe605;',
            name: '一审'
        },
        'row-audit2': {
            className: baseBtnClass + 'layui-btn-small layui-btn-danger row-audit2',
            icon: '&#xe605;',
            name: '二审'
        },
        'row-saledate': {
            className: baseBtnClass + 'layui-btn-small layui-btn-warm row-saledate',
            icon: '&#xe637;',
            name: '销售期'
        },
        'row-desc': {
            className: baseBtnClass + 'layui-btn-small layui-btn-normal row-desc',
            icon: '&#xe60b;',
            name: '描述'
        },
        'row-add-contract': {
            className: baseBtnClass + 'layui-btn-small layui-btn-normal row-add-contract',
            icon: '&#xe61f;',
            name: '添加合同'
        },
        'row-delete': {
            className: baseBtnClass + 'layui-btn-small layui-btn-danger row-delete',
            icon: '&#x1006;',
            name: '删除'
        },
        'row-stop': {
			className: baseBtnClass + 'layui-btn-small layui-btn-danger row-stop',
            icon: '&#x1007;',
            name: '停用'
		},
        'row-trade-detail': {
			className: baseBtnClass + 'layui-btn-small layui-btn-normal row-trade-detail',
            icon: '&#xe608;',
            name: '成交明细'
		},

        'row-change-report': {
			className: baseBtnClass + 'layui-btn-small layui-btn-danger row-change-report',
            icon: '&#xe60a;',
            name: '改单'
		},

        'row-modify': {
			className: baseBtnClass + 'layui-btn-small layui-btn-warm row-modify',
            icon: '&#xe642;',
            name: '修改'
		},

        'add-report':{
            className: baseBtnClass + 'add-report',
            icon: '&#xe654;',
            name: '新增软件订单'
        },
        'row-receive-order': {
            className: baseBtnClass + 'layui-btn-sm layui-btn-normal row-receive-order',
            name: '接单'
        },
        'row-reject-order': {
            className: baseBtnClass + 'layui-btn-sm layui-btn-danger row-reject-order',
            name: '驳回'
        },
        'row-edit-layui': {
            className: baseBtnClass + 'layui-btn-xs',
            icon: '&#xe642;',
            name: '编辑',
            event: 'row-edit'
        },
        'row-delete-layui': {
            className: baseBtnClass + 'layui-btn-danger layui-btn-xs',
            icon: '&#x1006;',
            name: '删除',
            event: 'row-delete'
        },
        'row-view-layui': {
            className: baseBtnClass + 'layui-btn-primary layui-btn-xs',
            icon: '&#xe615;',
            name: '查看',
            event: 'row-view'
        },
        'row-adddeposit-layui': {
            className: baseBtnClass + 'layui-btn-xs',
            icon: '&#xe615;',
            name: '追保',
            event: 'row-adddeposit'
        },
        'row-delay-layui': {
            className: baseBtnClass + 'layui-btn-xs',
            icon: '&#xe615;',
            name: '延期',
            event: 'row-delay'
        },
        'row-coercion-layui': {
            className: baseBtnClass + 'layui-btn-xs',
            icon: '&#xe615;',
            name: '平仓',
            event: 'row-coercion'
        },
        'row-close-layui': {
            className: baseBtnClass + 'layui-btn-xs',
            icon: '&#xe615;',
            name: '关闭',
            event: 'row-close'
        },
        'row-adjust-layui': {
            className: baseBtnClass + 'layui-btn-xs',
            icon: '&#xe615;',
            name: '红冲蓝补',
            event: 'row-adjust'
        },
        'row-backstock-layui': {
            className: baseBtnClass + 'layui-btn-xs',
            icon: '&#xe615;',
            name: '回收股票',
            event: 'row-backstock'
        },
        'row-inmoney-layui':{
        	className: baseBtnClass + 'layui-btn-xs',
            icon: '&#xe615;',
            name: '入金',
            event: 'row-inmoney'
        },
        'row-outmoney-layui':{
        	className: baseBtnClass + 'layui-btn-xs',
            icon: '&#xe615;',
            name: '出金',
            event: 'row-outmoney'
        },
        'row-lock-layui': {
            className: baseBtnClass + 'layui-btn-xs',
            icon: '&#xe615;',
            name: '禁买',
            event: 'row-lock'
        },
        'row-unlock-layui': {
            className: baseBtnClass + 'layui-btn-xs',
            icon: '&#xe615;',
            name: '恢复',
            event: 'row-unlock'
        },
        'row-accountflow-layui':{
        	className: baseBtnClass + 'layui-btn-xs',
            icon: '&#xe615;',
            name: '资金流水',
            event: 'row-accountflow'
        },
        'row-freeze-layui':{
            className: baseBtnClass + 'layui-btn-xs',
            icon: '&#xe615;',
            name: '冻结',
            event: 'row-freeze'
        },
        'row-unfreeze-layui':{
            className: baseBtnClass + 'layui-btn-xs',
            icon: '&#xe615;',
            name: '恢复',
            event: 'row-unfreeze'
        },
        'row-traderecord-layui':{
            className: baseBtnClass + 'layui-btn-xs',
            icon: '&#xe615;',
            name: '查看交易',
            event: 'row-traderecord'
        },
        'row-viewprofit-layui':{
            className: baseBtnClass + 'layui-btn-xs',
            icon: '&#xe615;',
            name: '查看利润',
            event: 'row-viewprofit'
        },
        'row-realunitflow-layui':{
            className: baseBtnClass + 'layui-btn-xs',
            icon: '&#xe615;',
            name: '实盘流水',
            event: 'row-realunitflow'
        },
        'closedayend': {
            className: baseBtnClass + 'layui-btn-normal closedayend',
            icon: '&#xe630;',
            name: '关闭完成'
        },
        'dayend': {
            className: baseBtnClass + 'layui-btn-normal dayend',
            icon: '&#xe630;',
            name: '日结'
        },
        'viewlogs':{
            className: baseBtnClass + 'layui-btn-normal viewlogs',
            icon: '&#xe615;',
            name: '查看日志'
        },
        'row-viewrecoveryflow-layui': {
            className: baseBtnClass + 'layui-btn-xs',
            icon: '&#xe615;',
            name: '回收流水',
            event: 'row-viewrecoveryflow'
        }

    };

    var btns = {
        bindEvent: function() {
            /*	$('body').on('click', '.add,edit', function() {
            		console.log('点击了按钮');
            		var href = 'views/user/test/test.html'
            		console.log($(window.top.document).find('.layui-nav-tree a[href-url="' + href + '"]')[0]);

            		$(window.top.document).find('.layui-nav-tree a[href-url="' + href + '"]').parents('dl').prev('a').trigger('click');
            		$(window.top.document).find('.layui-nav-tree a[href-url="' + href + '"]').trigger('click');
            		//				$('a[href-url="'+href+'"]').trigger('click');
            	});*/
        },

        /**
         * 根据接口返回 的字符串数组，丰富按钮对象并返回
         * @param {Object} btnNameArr 类似于['edit','row-edit']
         */
        getBtns: function(btnNameArr) {
            var result = [];
            if(btnNameArr){
            	$.each(btnNameArr, function(index, item) {
                    var btn = btnConfig[item.btnKey];

                    if (btn) {
                        result.push($.extend(true, item, btn));
                    }
                });
            }
            return result;
        },

        /**
         * 传入总的btns对象，筛选页面按钮,不包含列表按钮
         * @param {Object} btns
         */
        getPageBtns: function(btnObjs) {
            return $.grep(btnObjs, function(item, index) {
                return !btns.isRowBtn(item.btnKey) && !btns.isSwitchPageBtn(item.btnKey);
            });
        },
        getSwitchPageBtns: function(btnObjs) {
            return $.grep(btnObjs, function(item, index) {
                return btns.isSwitchPageBtn(item.btnKey);
            });
        },
        /**
         * 筛选表格中显示的按钮
         * @param {Object} btns
         */
        getRowBtns: function(btnObjs) {
            return $.grep(btnObjs, function(item, index) {
                return btns.isRowBtn(item.btnKey);
            });
        },

        /**
         * 筛选表格普通按钮
         * @param {Object} btns
         */
        getIconBtns: function(btnObjs) {
            return $.grep(btnObjs, function(item, index) {
                return !btns.isSwitchBtn(item.btnKey); //现在的逻辑是只有两种按钮，一个是开关一个是普通按钮，所以筛选普通按钮是非开关按钮
            });
        },

        /**
         * 筛选开关按钮
         * @param {Object} btnObjs
         */
        getSwitchBtns: function(btnObjs) {
            return $.grep(btnObjs, function(item, index) {
                return btns.isSwitchBtn(item.btnKey);
            });
        },

        isRowBtn: function(btnKey) {
            return /^row-/.test(btnKey);
        },

        isSwitchPageBtn: function(btnKey) {
            return /^switch/.test(btnKey);
        },

        isSwitchBtn: function(btnKey) {
            return btnKey.indexOf('-switch') > 0;
        },

        /**
         * 只渲染普通按钮
         * @param {Object} btns
         */
        renderBtns: function(btnObjs) {
            var results = '';
            $.each(btnObjs, function(index, item) {
                var btn = btns.renderBtn(item.className, item.name, item.icon);
                if (btn) {
                    results += btn;
                }
            });
            if(results.length==0){
                $("#page-btns").attr("style","display:none;");//隐藏div
            }
            return results;
        },

        renderLayuiTableBtns: function(btnObjs, $btnToolBar) {
            var results = '';
            $.each(btnObjs, function(index, item) {
                var btn = btns.renderLayuiBtn(item.className, item.name, item.icon, item.event);
                if (btn) {
                    results += btn;
                }
            });

            $btnToolBar.html(results);
        },

        renderSwitchBtns: function(btnObjs) {
            var results = '';
            $.each(btnObjs, function(index, item) {
                var btn = btns.renderSwitch(item.className, item.name, item.checked);
                if (btn) {
                    results += btn;
                }
            });
            return results;
        },

        /**
         *
         * @param {Object} name 指定的name值
         * @param {Object} text 开关显示名字  启用|停用
         * @param {Boolean} isChecked 默认开还是关
         * @param {Boolean} isDisable 是否禁用
         */
        renderSwitch: function(name, text, isChecked, isDisable) {
            var checkStr = '';
            if (isChecked) {
                checkStr = 'checked';
            }
            var disabled = '';
            if (isDisable) {
                disabled = 'disabled'
            }
            return '<div class="layui-form" style="display:inline-block;margin-right:10px;">' +
                '<input type="checkbox" ' + checkStr + ' ' + disabled + ' lay-filter="' + name + '" name="' + name + '" lay-skin="switch" lay-text="' + text + '">' +
                '</div>';
        },

        renderBtn: function(className, btnName, btnIcon, isDisable, otherOpt) {
            if (otherOpt) {
                btnName = otherOpt.btnName || btnName; //自定义名字
                className = otherOpt.className || className; //自定义样式
            }

            if (isDisable) {
                className += ' layui-btn-disabled';
                return '<button class="' + className + '" disabled="disabled"><i class="layui-icon">' + btnIcon + '</i> ' + btnName + '</button>';
            } else {
                return '<button class="' + className + '" ><i class="layui-icon">' + btnIcon + '</i> ' + btnName + '</button>';
            }

        },

        renderLayuiBtn: function(className, btnName, btnIcon, event, isDisable, otherOpt) {
            if (otherOpt) {
                btnName = otherOpt.btnName || btnName; //自定义名字
                className = otherOpt.className || className; //自定义样式
            }

            if(event=='row-lock'){
                var lockBtns = "";
                lockBtns+='{{#  if(d.opStatus == 0){ }}';
                lockBtns+='<a class="' + className + '" lay-event="'+event+'">' + btnName + '</a>';
                lockBtns+='{{#  } }}';
                return lockBtns;
            } else if(event=='row-unlock') {
                var lockBtns = "";
                lockBtns+='{{#  if(d.opStatus == 1){ }}';
                lockBtns+='<a class="' + className + '" lay-event="'+event+'">' + btnName + '</a>';
                lockBtns+='{{#  } }}';
                return lockBtns;
            }
            if(event=='row-freeze'){
                var freezeBtns = "";
                freezeBtns+='{{#  if(d.status == 0){ }}';
                freezeBtns+='<a class="' + className + '" lay-event="'+event+'">' + btnName + '</a>';
                freezeBtns+='{{#  } }}';
                return freezeBtns;
            }else if(event == 'row-unfreeze'){
                var freezeBtns = "";
                freezeBtns+='{{#  if(d.status == 1){ }}';
                freezeBtns+='<a class="' + className + '" lay-event="'+event+'">' + btnName + '</a>';
                freezeBtns+='{{#  } }}';
                return freezeBtns;
            }

            if (isDisable) {
                className += ' layui-btn-disabled';
                return '<a class="' + className + '" lay-event="'+event+'">' + btnName + '</a>';
            } else {
                return '<a class="' + className + '" lay-event="'+event+'">' + btnName + '</a>';
            }

        }

    }

    exports('btns', btns);

});
