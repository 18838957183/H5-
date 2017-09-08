;(function(){
	var game = { //导演,总控制器
		maxNumber  : 10,    //气球的总数
		timer 	   : -1,  //游戏主循环定时器的编号
		score      : 0,   //分数；
		frameIndex : 0,		//游戏的总帧数。理解为游戏已经玩了多长时间
		load:function(){
			pointer.init();
			gun.init();
			bg.init();
			var that  = this;
			document.body.onclick = function(e){
				var x = e.clientX;
				var y = e.clientY;
				//计算全部的气球的中心距离鼠标点的位置
				for (var i = 0; i < that.actors.length; i++) {
					var obj = that.actors[i];
					if(obj.mark){//气球
						//气球的中心点
						var qqx = obj.x + obj.width/2;
						var qqy = obj.y + obj.height/2;

						var d =Math.sqrt(Math.pow(x-qqx,2) + Math.pow(y-qqy,2)) ;
						console.info (obj,d);
						if( d<obj.width/2 ){
							//这里这个气球被打中了
							obj.die();
							// break;
						}
					}
				}
				console.info(e);
				
			}
			document.body.onmousemove = function(e){
				//console.info(x,y);
				gun.moveTo(e.clientX,e.clientY);
			}
			
			//加载云朵演员
			for (var i = 0; i < 3; i++) {
			
				this.actors.push( new Cloud() );
			}
		},
		startGame  : function () {
			this.load();  //加载演员
			var that = this;
			this.timer = setInterval( function(){
				//console.info(this);
				that.frameIndex++;
				if(that.frameIndex % 20 == 0){
					//console.info("---------------------时间到了-----")
					if(that.actors.length < that.maxNumber + 3){
						//console.info("------------------------生产-----气球来了")
						that.actors.push(new window.QQ());
					}
					else{
						//console.info("--------------------气球数量达标了，不生产")
					}
				}

				//让所有的演员更新
				for (var i = 0; i < that.actors.length; i++) {
					that.actors[i].update();
				}

			},50);
		},
		stop:function(){
			clearInterval(this.timer);
		},
		actors	   :[]     //保存所有的演员
	};

	window.game = game;

})();
