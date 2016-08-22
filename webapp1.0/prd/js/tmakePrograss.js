define(function(require,exports,module){
	require('./jquery-1.10.1.min.js');
	require('./zepto.min.js');
	var getHash={
		getHref:function(){
			var href=window.location.href;
			var id=href.split('?')[1].split('=')[1];
			$.ajax({
				url:"http://www.tngou.net/api/cook/show",
				type:"get",
				dataType:"jsonp",
				data:{
					id:id
				},
				success:function(data){
				console.log(data);
					var imgUrl='http://tnfs.tngou.net/image'+data.img;
					$('#timgShow').attr({'src':imgUrl,'alt':data.name});
					var tDiv=$('<div class="titleBox"><div class="t-leftDesr"><h2>'+data.name+'</h2><div><p><span>'+data.count+'</span>浏览/</p><p><span>'+data.fcount+'</span>收藏</p></div></div><div><div class="t-rightUser"><div class="t-userPic"><img src="../img/userImg.png" alt=""></div><span class="t-userName">香 哈小秘书</span></div></div></div>');
					$('#tmain').append(tDiv);
					var div=$('<div class="t-read"><h2>食物信息</h2><p><strong>名称：</strong>'+data.name+'</p><p><strong>描述：</strong>'+data.description+'</p><p><strong>所需材料：</strong>'+data.keywords+'</p><h3>内容介绍：</h3><span>'+data.message+'</span></div>')
					$('#tmain').append(div);	
				}

			})
		}
	}

	module.exports={
		getHrefId:getHash.getHref  

	}
})