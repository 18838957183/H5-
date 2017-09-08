;(function(){
	function QQ(){
		var that = this;
		this.x      = 48 + Math.random() * ( document.body.offsetWidth - 120) ;
		this.y      = 800 ; //开始时应该是一个正值
		this.mark   = Math.ceil( Math.random()*8) ; //当前气球的分值
		this.index  = this.mark ; //当前气球的编号
		this.dy     = this.mark * 1.5 ;       // 向上飞升的速度 分值越大，速度越大
		this.ele    = document.createElement("div"); //把气球放在ele中

		this.init();  //设置气球的背景，位置 相关的参数
	}
	QQ.prototype.pos  = ["0px 0px","-96px 0px","-192px 0px","-288px 0px",
			   "0px -123px","-96px -123px","-192px -123px","-288px -123px"];
	QQ.prototype.width  = 96;
	QQ.prototype.height = 123;

	//功能：初始化元素
	QQ.prototype.init  = function(){
		
		//设置元素的属性
		this.ele.style.position = "absolute";
		this.ele.style.top  = this.y + "px";
		this.ele.style.left = this.x + "px";
		this.ele.style.width  = this.width +"px";
		this.ele.style.height = this.height +"px";
		this.ele.style.backgroundImage = "url(./img/ballon.png)";
		this.ele.style.backgroundPosition = this.pos[this.index-1];
		this.ele.style.zIndex = 2;
		
		//添加dom树中。
		document.body.appendChild(this.ele);
	}

	QQ.prototype.update = function() {
		this.y = this.y - this.dy;	

		if(this.y < -1*this.height ){
			console.info("我要重生！！！！！")
			//要气球还原，再做一次初始化
			//位置，分值，速度，
			this.killself();
		}
		else{
			this.ele.style.top  =  this.y + "px";
		}	
	};

	//自杀
	QQ.prototype.killself = function(){
		this.x      = 48 + Math.random() * ( document.body.offsetWidth - 120) ;
		this.y      = 800 ; //开始时应该是一个正值
		this.mark   = Math.ceil( Math.random()*8) ; //当前气球的分值
		this.index  = this.mark ; //当前气球的编号
		this.dy     = this.mark * 1.5 ;       // 向上飞升的速度 分值越大，速度越大
		this.ele.style.backgroundPosition = this.pos[this.index-1];
		this.ele.style.top  = this.y + "px";
		this.ele.style.left = this.x + "px";
	}

	//给对象添加被打死的方法
	QQ.prototype.die = function(){
		//增加分数
		// console.info(this,that);
		// console.info(game.score,that.mark);
		pointer.addMark(this.mark);
		this.killself();

		//要气球还原，再做一次初始化
		//位置，分值，速度，
		// this.x      = 48 + Math.random() * ( document.body.offsetWidth - 120) ;
		// this.y      = 800 ; //开始时应该是一个正值
		// this.mark   = Math.ceil( Math.random()*8) ; //当前气球的分值
		// this.index  = this.mark ; //当前气球的编号
		// this.dy     = this.mark * 1.5 ;       // 向上飞升的速度 分值越大，速度越大
		// this.ele.style.backgroundPosition = this.pos[this.index-1];
		// this.ele.style.top  = this.y + "px";
		// this.ele.style.left = this.x + "px";
	}

	window.QQ = QQ;
})();
