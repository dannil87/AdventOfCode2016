function makeArray(w, h, val) {
    var arr = [];
    for(var i = 0; i < h; i++) {
        arr[i] = [];
        for(var j = 0; j < w; j++) {
            arr[i][j] = val;
        }
    }
    return arr;
}

function rect(screen,w,h){
	for(var i = 0; i < h; i++){
		for(var j = 0; j < w; j++){
			screen[i][j] = 1;
		}
	}
	return screen;
}

function rotateCol(screen,col,len){
	var idx = [];
	for(var i = 0; i < screen.length; i++){
		if(screen[i][col] == 1){
			if(i + len >= screen.length){
				idx.push(i + len - screen.length);
			}else{
				idx.push(i + len);
			}
		}
	}
	for(var i = 0; i < screen.length; i++){
		screen[i][col] = (idx.indexOf(i) > -1) ? 1 : 0;
	}
	return screen;
}

function rotateRow(screen,row,len){
	for(var i = 0; i < len; i++){
		var temp = screen[row].pop();
		screen[row].unshift(temp);
	}
	return screen;
}

function day8(reader){
	
	var lines = reader.result.split("\r\n");
	var screen = makeArray(50,6,0);
	for(var line in lines){
		if(lines[line].indexOf("rect") > -1){
			var w = parseInt(lines[line].substring(lines[line].indexOf(" ")+1,lines[line].indexOf("x")));
			var h = parseInt(lines[line].substring(lines[line].indexOf("x")+1,lines[line].length));
			screen = rect(screen,w,h);
		}else if(lines[line].indexOf("rotate column") > -1){
			var col = parseInt(lines[line].substring(lines[line].indexOf("x=")+2,lines[line].indexOf("by")-1));
			var len = parseInt(lines[line].substring(lines[line].indexOf("by")+3,lines[line].length));
			screen = rotateCol(screen,col,len);
		}else if(lines[line].indexOf("rotate row") > -1){
			var row = parseInt(lines[line].substring(lines[line].indexOf("y=")+2,lines[line].indexOf("by")-1));
			var len = parseInt(lines[line].substring(lines[line].indexOf("by")+3,lines[line].length));
			screen = rotateRow(screen,row,len);
		}
		
	}
	var counter = 0;
	var html = '';
	for(var i = 0; i < screen.length; i++){
		html += '<div style="width:100%;overflow:hidden;">';
		for(var j = 0; j < screen[0].length; j++){
			if(screen[i][j] == 1){
				counter += 1;
				html += '<div style="width:10px;height:10px;background-color:black;float:left;"></div>';
			}else{
				counter += 0;
				html += '<div style="width:10px;height:10px;background-color:white;float:left;"></div>'
			}
		}
		html += '</div>';
	}
	return "<div>1: Pixels lit: " + counter + "</div>2:" + html;
}