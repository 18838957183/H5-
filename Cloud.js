;(function(){
	function Cloud(){
		this.dx     = 5 - Math.ceil( 10*Math.random() ); //速度
		this.x      = 100 + 200 * Math.random();        //位置
		this.y      = 20;
		this.height = 50 +  Math.ceil( 50*Math.random() );
		this.width  = this.height * 2;

		this.ele    = document.createElement("div");

		this.init();
	}
	Cloud.prototype.init = function(){
		//设置this.ele的参数
		this.ele.style.position        = "absolute";
		this.ele.style.top             = this.y +"px";
		this.ele.style.left            = this.x +"px";

		this.ele.style.width           = this.width + "px";
		this.ele.style.height          = this.height + "px";

		this.ele.style.backgroundImage = "url(./img/多云.png)"
		this.ele.style.backgroundSize  = "100% 100%";
		this.ele.style.zIndex          = 1;
		//把它加到body中
		document.body.appendChild(this.ele);

	}
	Cloud.prototype.update = function(){
		
		//当移动到最左边，或者是最右边时，需要去 调头
		//
		if(this.x < 0 || this.x > (document.body.offsetWidth - this.width) ){
			this.dx = this.dx * -1;
		}

		this.x = this.x + this.dx;
		this.ele.style.left = this.x + "px";
	}

	window.Cloud = Cloud;

})();
