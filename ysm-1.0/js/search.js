define(function(require,exports,module){
	//依赖需要的模块
	require("./jquery-1.10.1.min.js");

	var Obj={
		name:"",
		id:"",
		search:function(){
			//?id=3&name=""
			var name=Obj.name;
			var id=Obj.id;
			console.log(name)
			if (!name) {
				return
			};
			if(id==1){
				console.log(2)
				$.ajax({
					url:"http://www.tngou.net/api/food/name",
					type:"get",
					data:{
							name:name
						},
					dataType:"jsonp",
					success:function(data){
							console.log(data)
							var img="http://tnfs.tngou.net/image"+data.img;
							var html="<img src="+img+" /><br>"+data.message
							console.log(html)
							Obj.Rheader(data.name)
							$("section").html("").html(html)
						}
				})
			}
			
			
		},
		getPam:function(string){
			if(location.href.indexOf("?")==-1){
				return ""
			}
			var str=location.href.split("?")[1];
			var arr=str.split("&");
			for(var i=0;i<arr.length;i++){
				if(arr[i].indexOf(string)!==-1){
					return arr[i].split("=")[1]
				}
			}
		},
		Rheader:function(str){
			$("header h1").html(str)
		},
		getName:function(){
			$("#txt").val(decodeURI(Obj.getPam("name")))
			Obj.id=Obj.getPam("id")||1;
			var name=$("#txt").val()||decodeURI(Obj.getPam("name"));
			Obj.name=name;
		},

		getList:function(){
			//?id=3&name=""
			var name=Obj.name;
			var id=Obj.id;
			console.log(name)
			if (!name) {
				return
			};
			if(id==1){
				$.ajax({
					url:"http://www.tngou.net/api/food/name",
					type:"get",
					data:{
							name:name
						},
					dataType:"jsonp",
					success:function(data){
							console.log(data)
							var img="http://tnfs.tngou.net/image"+data.img;
							// var html="<img src="+img+" /><br><p>"+data.summary+"</p><p><span>"+data.count+"</p>"
							var html='<dl><dt><img src='+img+'></dt><dd><h3>'+data.name+'</h3><p>'+data.description+'</p><p><span>'+data.count+'</span></p></dd></dl>'
							console.log(html)
							
							$("section").html("").html(html);

						}
					})
				}
			},
			toDetail:function(){
				$("section").on("touchstart","dl",function(){
					location.href="shicaiDetail.html?name="+Obj.name
				})
			},
			clickToSearch:function(){
				$(".hot").on("touchstart","ul li",function(){
					$("#txt").val($(this).html())
					console.log($("#txt").val())
					Obj.getName()
					setTimeout(function(){
						Obj.toDetail()
					},600)
				})
			},
			
		}
	//对外提供接口
	module.exports={
		search:Obj.search,
		// Rheader:Obj.Rheader,
		getName:Obj.getName,
		getList:Obj.getList,
		toDetail:Obj.toDetail,
		name:Obj.name,
		click:Obj.clickToSearch,
	}
})