define(function(require,exports,module){
	//依赖需要的模块
	require("./jquery-1.10.1.min.js");

	var Obj={
		ajax:function(){

			},
		tab:function(){
			$("#list").on("touchstart","li",function(){

				$(this).addClass("active").siblings().removeClass("active")
			})
		},
		showDiv:function(id){

		},
		toAjax:function(id){

		},
		search:function(){
			$("#txt").on("touchstart",function(){
				var val=$("#txt").val();
				location.href="search.html?name="+val;
			})
			

		}
		
	}
	//对外提供接口
	module.exports={
		tab:Obj.tab,
		search:Obj.search,
	}
})