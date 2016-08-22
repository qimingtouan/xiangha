define(function(require,exports,module){
	require("./jquery-1.10.1.min.js");
	function loadfooter(oIndex){
		$('.footer-container').load('footer.html',function(){
			console.log('公共底部加载成功');
			
			})
	}
	

	module.exports = {
		loadHtml:loadfooter
	}
})