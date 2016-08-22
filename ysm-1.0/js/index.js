define(function(require,exports,module){
	//依赖需要的模块
	require("./jquery-1.10.1.min.js");
	require('./swiper-3.3.1.min');

	var Obj={
		_init:function(){
			Obj.swiperInit();
		},
		swiperInit:function(){
			var myswiper=new Swiper("#main-swiper",{
				speed:2000,
				pagination:".swiper-pagination",
			})
		},
		drag:function(){
			var swiper=document.getElementById("main-swiper")
			swiper.addEventListener("touchstart",function(e){
				var startY=e.touches[0].clientY;
				var headerH=$("header").height();
				swiper.addEventListener("touchmove",function(e){
					moveY=e.touches[0].clientY;
					if(moveY-startY>0){
						console.log(moveY-startY)
						var val=(moveY-startY)/headerH
						$("header").height(headerH+moveY-startY)
						$(".slide1")[0].style.backgroundPosition=-val*$("header").width()/2+"px"+" "+(0)+"px"
						$(".slide1")[0].style.backgroundSize=val*$("header").width()+$("header").width()+"px"+" "+(headerH+moveY-startY)+"px";
							
					}
				},false);
				swiper.addEventListener("touchend",function(e){
					swiper.removeEventListener("touchmove",false)
					$("header").height(headerH);
							
				},false)
			},false)
		},
		search:function(){
			$("#txt").on("click",function(){
				location.href="search.html"
			})
		}
		
	}
	//对外提供接口
	module.exports={
		init:Obj._init,
		drag:Obj.drag,
		search:Obj.search
	}
})
