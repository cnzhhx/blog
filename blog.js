window.onload = function () {
	//neck中间的点击条
	var ul = $("ul1");
	var allLis = ul.children;
	var row = $("row");
	var divs = row.children;
	var body1 = $("body1");
	var body2 = $("body2");
	var body3 = $("body3");
	var body4 = $("body4");

	for (var i = 0; i < allLis.length; i++) {
		(function(i) {
			var li = allLis[i];
			li.onclick = function () {
				if (i == 0) {
					for (var j = 0; j < divs.length; j++) {
						divs[j].className = "";
						divs[0].className = "selected";
						body1.className = "unselected4";
						body2.className = "unselected4";
						body3.className = "unselected4";
						body4.className = "unselected4";
					}
				}else if (i == 2) {
					for (var j = 0; j < divs.length; j++) {
						divs[j].className = "";
						divs[1].className = "selected";
						body1.className = "body1";
						body2.className = "unselected4";
						body3.className = "unselected4";
						body4.className = "unselected4";
					}
				}else if (i == 4) {
					for (var j = 0; j < divs.length; j++) {
						divs[j].className = "";
						divs[2].className = "selected";
						body1.className = "unselected4";
						body2.className = "body2";
						body3.className = "unselected4";
						body4.className = "unselected4";						
					}					
				}else if (i == 6) {
					for (var j = 0; j < divs.length; j++) {
						divs[j].className = "";
						divs[3].className = "selected";
						body1.className = "unselected4";
						body2.className = "unselected4";
						body3.className = "body3";
						body4.className = "unselected4";
					}
				}else if (i == 8) {
					for (var j = 0; j < divs.length; j++) {
						divs[j].className = "";
						divs[4].className = "selected";
						body1.className = "unselected4";
						body2.className = "unselected4";
						body3.className = "unselected4";
						body4.className = "body4";
					}					
				}
			}
		})(i);
	}


	//body1
	var body1_left = $("body1_left");
	var body1Ldivs = body1_left.children;
	var body1_right = $("body1_right");
	var body1Rdivs = body1_right.children;

	for (var i = 0; i < body1Ldivs.length; i++) {
		(function (i) {
		    var li = body1Ldivs[i];		
		    li.onclick = function () {
		    	if (i == 0) {
		    		for (var j = 0; j < body1Rdivs.length; j++) {
		    			body1Ldivs[j].className = "";
		    			this.className = "selected2";
		    			body1Rdivs[j].className = "";
		    			body1Rdivs[i].className = "selected3";
		    		}
		    	}else if (i == 1) {
		    		for (var j = 0; j < body1Rdivs.length; j++) {
		    			body1Ldivs[j].className = "";
		    			this.className = "selected2";
		    			body1Rdivs[j].className = "";
		    			body1Rdivs[i].className = "selected3";		    			
		    		}		    		
		    	}else if (i == 2) {
		    		for (var j = 0; j < body1Rdivs.length; j++) {
		    			body1Ldivs[j].className = "";
		    			this.className = "selected2";
		    			body1Rdivs[j].className = "";
		    			body1Rdivs[i].className = "selected3";
		    		}		    		
		    	}else if (i == 3) {
		    		for (var j = 0; j < body1Rdivs.length; j++) {
		    			body1Ldivs[j].className = "";
		    			this.className = "selected2";
		    			body1Rdivs[j].className = "";
		    			body1Rdivs[i].className = "selected3";
		    		}		    		
		    	}else{
		    		for (var j = 0; j < body1Rdivs.length; j++) {
		    			body1Ldivs[j].className = "";
		    			this.className = "selected2";
		    			body1Rdivs[j].className = "";
		    			body1Rdivs[i].className = "selected3";
		    		}		    		
		    	}
		    }
		})(i);
	}
	
}