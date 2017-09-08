;(function(){
	var gun = {
		ele:document.createElement("div"),
		init:function(){
			this.ele.style.position = "absolute";
			this.ele.style.zIndex = 3;
			this.ele.style.top = "10px";
			this.ele.style.left = "10px";
			this.ele.style.width = "96px"
			this.ele.style.height = "96px";
			this.ele.style.background = "url('./img/gun(2).png') no-repeat";
			document.body.appendChild(this.ele);
		},
		moveTo:function(x,y){
			//console.info("手枪要移动到"+ x +": "+ y);
			//把gun移动到x,y处。
			//相当于是要改top ,left 
			this.ele.style.top  = y-48 +"px";
			this.ele.style.left = x-48 +"px";
		}
	}
	window.gun = gun;
})();