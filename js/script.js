$(document).ready(function(){
	var items=$('#items');
	var menu=$('#menu');

	//iphone6下MENU按钮点击显示下拉菜单
	$(window).resize(function(){
		if($(window).width()<768){
		menu.on('click',function(event){
			event.stopPropagation();//阻止冒泡
			event.preventDefault();//阻止默认事件
			items.toggle();//切换隐藏显示
		})
		$(document).on('click',function(){//点击页面隐藏下拉列表
			items.hide();
		});
		}else{
			//ipad下顶部菜单点击添加效果
			items.show();
			items.on('click','a',function(e){
				$(e.target).css('color','#A9A9A9').siblings().css('color','#000000');
			})
		}
	})
})
