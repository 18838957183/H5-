var pointer = {
	ele:document.createElement("div"),
	init:function(){
		this.ele.style.position = "fixed";
		this.ele.style.top = "10px";
		this.ele.style.left = "10px";
		this.ele.style.width = "100px"
		this.ele.style.height = "30px";
		this.ele.style.border = "2px solid red";
		this.ele.innerHTML = "分数："
		document.body.appendChild(this.ele);
	},
	addMark:function(n){
		game.score += n;
		this.ele.innerHTML = "分数：" + game.score;

	}

}