define(function(require,exports,module){
	//依赖需要的模块
	require("./jquery-1.10.1.min.js");

	var Obj={
		search:function(){
			//?id=3&name=""
			var name=decodeURI(Obj.getPam("name")) ;
			if(id==1){
				console.log(2)
				$.ajax({
					url:"http://www.tngou.net/api/food/name",
					type:"get",
					data:{
							name:name,
						},
					dataType:"jsonp",
					success:function(data){
							console.log(data)
							var img="http://tnfs.tngou.net/image"+data.img;
							var html="<img src="+img+" /><br>"+data.message
							console.log(html)
							
							$("section").html("").html(html)
						}
				})
			}
			
			
		},
		getPam:function(string){
			var str=location.href.split("?")[1];
			var arr=str.split("&");
			console.log(arr)
			for(var i=0;i<arr.length;i++){
				if(arr[i].indexOf(string)!==-1){
					return arr[i].split("=")[1]
				}
			}
		}
		
	}
	//对外提供接口
	module.exports={
		search:Obj.search,
	}
})