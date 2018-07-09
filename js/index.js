// JavaScript Document
$(document).ready(function(){
	//定义初始值
	$(".banner li").eq(0).show().siblings().hide();
	$(".point li").eq(0).addClass("current").siblings().removeClass("current");
	
	
	//获取banner里面li的个数
	var len = $(".banner li").length;
	var a = 0;

	
	//封装自动轮播函数
	function show(){
		a++;
		if(a>len-1){
			a=0;
		}
	
	$(".banner li").eq(a).show().siblings().hide();
	$(".point li").eq(a).addClass("current").siblings().removeClass("current");
		}
	
	
	//点击右按钮切换banner图片
    $(".slider .next").click(function(){
		a++;
		if(a>len-1){
			a=0;
		}
	
	$(".banner li").eq(a).show().siblings().hide();
	$(".point li").eq(a).addClass("current").siblings().removeClass("current");})
	
	
	//点击左按钮切换banner图片
	$(".slider .prev").click(function(){
		a--;
		if (a<0){
			a = len-1;
		}
	$(".banner li").eq(a).show().siblings().hide();
	$(".point li").eq(a).addClass("current").siblings().removeClass("current");})

	
	//鼠标经过轮播点切换图片
	$(".point li").mouseover(function(){
		var index = $(this).index();
	$(this).addClass("current").siblings().removeClass("current");
	$(".banner li").eq(index).show().siblings().hide();
		return a = index;})
	
	
	//自动轮播
	var lun = setInterval(function(){
		show();
		
		},2000)
		
	
	//鼠标悬停暂停自动轮播
	$(".slider").hover(function(){
		clearInterval(lun)
		},function(){
			lun = setInterval(function(){
		show();
		
		},2000)
			})

})












