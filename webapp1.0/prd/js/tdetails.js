define(function(require,exports,module){
	require('./jquery-1.10.1.min.js');
	require('./zepto.min.js');
	var tdetails={
		getDetails:function(){
					var sname=decodeURI(window.location.href.split('?')[1].split('=')[1]);
					$('#tsearch').val(sname);
					//这是从分类点击鱼类进来请求的数据
					$.ajax({
								url:"http://www.tngou.net/api/cook/name",
								data:{
									name:sname
								},
								dataType:"JSONP",
								type:"get",
								success:function(data){
								var data=data.tngou;
								$.each(data,function(i){
									var imgUrl='http://tnfs.tngou.net/image'+data[i].img;
									var dl=$('<dl data-id='+data[i].id+'><dt><img src='+imgUrl+' alt='+data[i].description+'></dt><dd><h3>'+data[i].name+'</h3><p>'+data[i].description+'</p><div><p><span>'+data[i].count+'</span>人浏览</p><p><span>'+data[i].fcount+'</span>人收藏</p></div></dd><dl>');
									$('#tdlBox').append(dl);
								})
									
								}
					});
					//这是搜索框重新输入再进行请求的数据
					$('#tsearchBtn').on('touchstart',function(){
						var	searchName=$('#tsearch').val();
						console.log(searchName)
						$('#tdlBox').html('');
						if(searchName){
							$.ajax({
								url:"http://www.tngou.net/api/cook/name",
								data:{
									name:searchName
								},
								dataType:"JSONP",
								type:"get",
								success:function(data){
								var data=data.tngou;
								$.each(data,function(i){
									var imgUrl='http://tnfs.tngou.net/image'+data[i].img;
									var dl=$('<dl data-id='+data[i].id+'><dt><img src='+imgUrl+' alt='+data[i].description+'></dt><dd><h3>'+data[i].name+'</h3><p>'+data[i].description+'</p><div><p><span>'+data[i].count+'</span>人浏览</p><p><span>'+data[i].fcount+'</span>人收藏</p></div></dd><dl>');
									$('#tdlBox').append(dl);
								})
									
								}
							})
						}else{
							alert('搜索不能为空');
							return false;
						}

					})
				},
				getId:function(){
					$('#tdlBox').on('touchstart','dl',function(){
						//或者用jQuery内置方法获取自定义属性data-*;
						//var id=$(this).data('id');
						var id=$(this).attr('data-id');
						window.location.href="makeprograss.html?id="+id;
					})
				}

	}

	module.exports={
		getData:tdetails.getDetails,
		getId: tdetails.getId 

	}
})


