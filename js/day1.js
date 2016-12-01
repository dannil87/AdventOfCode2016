function day1(reader){	
	var facing = "N";
	var blocksNS = 0;
	var blocksEW = 0;
	var location = [];
	var secondvisit = "";
	var secondvisitdistance = 0;
	var output = "";	
	var arr = reader.result.split(", ");
	
	for(var i = 0; i < arr.length; i++){
		if(arr[i].substring(0,1) == "R"){
			if(facing == "N"){
				facing = "E";
				for(var j = blocksEW+1; j <= blocksEW + parseInt(arr[i].substring(1,arr[i].length)); j++){
					if(location.indexOf("N"+blocksNS+"E"+j) != -1 && secondvisit == ""){
						secondvisit = "N/S: " + blocksNS + ", E/W: " + j;
						secondvisitdistance = Math.abs(blocksNS) + Math.abs(j);
					}else{
						location.push("N"+blocksNS+"E"+j);
					}
				}
				blocksEW = blocksEW + parseInt(arr[i].substring(1,arr[i].length));
			}else if(facing == "E"){
				facing = "S";
				for(var j = blocksNS-1; j >= blocksNS - parseInt(arr[i].substring(1,arr[i].length)); j--){
					if(location.indexOf("N"+j+"E"+blocksEW) != -1 && secondvisit == ""){
						secondvisit = "N/S: " + j + ", E/W: " + blocksEW;
						secondvisitdistance = Math.abs(j) + Math.abs(blocksEW);
					}else{
						location.push("N"+j+"E"+blocksEW);
					}
				}
				blocksNS = blocksNS - parseInt(arr[i].substring(1,arr[i].length));
			}else if(facing == "W"){
				facing = "N";
				for(var j = blocksNS+1; j <= blocksNS + parseInt(arr[i].substring(1,arr[i].length)); j++){
					if(location.indexOf("N"+j+"E"+blocksEW) != -1 && secondvisit == ""){
						secondvisit = "N/S: " + j + ", E/W: " + blocksEW;
						secondvisitdistance = Math.abs(j) + Math.abs(blocksEW);
					}else{
						location.push("N"+j+"E"+blocksEW);
					}
				}
				blocksNS = blocksNS + parseInt(arr[i].substring(1,arr[i].length));
			}else if(facing == "S"){
				facing = "W";
				for(var j = blocksEW-1; j >= blocksEW - parseInt(arr[i].substring(1,arr[i].length)); j--){
					if(location.indexOf("N"+blocksNS+"E"+j) != -1 && secondvisit == ""){
						secondvisit = "N/S: " + blocksNS + ", E/W: " + j;
						secondvisitdistance = Math.abs(blocksNS) + Math.abs(j);
					}else{
						location.push("N"+blocksNS+"E"+j);
					}
				}
				blocksEW = blocksEW - parseInt(arr[i].substring(1,arr[i].length));
			}
		}else if(arr[i].substring(0,1) == "L"){
			if(facing == "N"){
				facing = "W";
				for(var j = blocksEW-1; j >= blocksEW - parseInt(arr[i].substring(1,arr[i].length)); j--){
					if(location.indexOf("N"+blocksNS+"E"+j) != -1 && secondvisit == ""){
						secondvisit = "N/S: " + blocksNS + ", E/W: " + j;
						secondvisitdistance = Math.abs(blocksNS) + Math.abs(j);
					}else{
						location.push("N"+blocksNS+"E"+j);
					}
				}
				blocksEW = blocksEW - parseInt(arr[i].substring(1,arr[i].length));
			}else if(facing == "E"){
				facing = "N";
				for(var j = blocksNS+1; j <= blocksNS + parseInt(arr[i].substring(1,arr[i].length)); j++){
					if(location.indexOf("N"+j+"E"+blocksEW) != -1 && secondvisit == ""){
						secondvisit = "N/S: " + j + ", E/W: " + blocksEW;
						secondvisitdistance = Math.abs(j) + Math.abs(blocksEW);
					}else{
						location.push("N"+j+"E"+blocksEW);
					}
				}
				blocksNS = blocksNS + parseInt(arr[i].substring(1,arr[i].length));
			}else if(facing == "W"){
				facing = "S";
				for(var j = blocksNS-1; j >= blocksNS - parseInt(arr[i].substring(1,arr[i].length)); j--){
					if(location.indexOf("N"+j+"E"+blocksEW) != -1 && secondvisit == ""){
						secondvisit = "N/S: " + j + ", E/W: " + blocksEW;
						secondvisitdistance = Math.abs(j) + Math.abs(blocksEW);
					}else{
						location.push("N"+j+"E"+blocksEW);
					}
				}
				blocksNS = blocksNS - parseInt(arr[i].substring(1,arr[i].length));
			}else if(facing == "S"){
				facing = "E";
				for(var j = blocksEW+1; j <= blocksEW + parseInt(arr[i].substring(1,arr[i].length)); j++){
					if(location.indexOf("N"+blocksNS+"E"+j) != -1 && secondvisit == ""){
						secondvisit = "N/S: " + blocksNS + ", E/W: " + j;
						secondvisitdistance = Math.abs(blocksNS) + Math.abs(j);
					}else{
						location.push("N"+blocksNS+"E"+j);
					}
				}
				blocksEW = blocksEW + parseInt(arr[i].substring(1,arr[i].length));
			}
		}
	}
	return "1: Easter Bunny HQ is at N/S: " + blocksNS + ", E/W: " + blocksEW + " which is " + (Math.abs(blocksNS) + Math.abs(blocksEW)) + " blocks away\n2: First second time visit is at " + secondvisit + " which is " + secondvisitdistance + " blocks away";		
}
