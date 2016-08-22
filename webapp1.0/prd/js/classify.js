define(function(require,exports,module){
	require('./jquery-1.10.1.min.js');
	require('./jquery-1.10.1.min.js');
	require('./zepto.min.js');
	var p={
		tap:function(){
			$('#tList').on('touchstart','li',function(){
				$(this).addClass('active').siblings().removeClass('active');
				var name=$(this).data('name');
				if(name){
					$.ajax({
						url:"../js/classify.json",
						dataType:"json",
						type:"get",
						success:function(data){
							var arr=data[name].fn;
							var title=data[name].des;
							$('#tDfish').html('');
							$('#tname').html(title);
							$.each(arr,function(i){
								var cA=$('<a data-cname='+arr[i]+'>'+arr[i]+'</a>');
								$('#tDfish').append(cA);
							})
						}
					})
				}
			})
		},

		toDetails:function(){
			$('#tDfish').on('touchstart','a',function(){
				var name=$(this).data('cname');
				console.log(name);
				$('#tcl-search').val(name);
				window.location.href="tdetails.html?name="+encodeURI(name);
			})
		}


	}

	module.exports={
		touch:p.tap,
		toDetails:p.toDetails   

	}
})


