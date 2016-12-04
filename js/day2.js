function day2(reader){	
	var arr = reader.result.split("\n");
	var position = [[7,8,9],
					[4,5,6],
					[1,2,3]];
	var x = 1;
	var y = 1;
	var combination = "";
	var position2 = [["","","D","",""],
					 ["","A","B","C",""],
					 ["5","6","7","8","9"],
					 ["","2","3","4",""],
					 ["","","1","",""]];
	var x2 = 0;
	var y2 = 2;
	var combination2 = "";
	
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr[i].length; j++){
			if(arr[i].substring(j,j+1) == "U"){
				y = (y == 2) ? 2 : y + 1;
				y2 = (y2 != 4) ? (position2[y2+1][x2] != "") ? y2 + 1 : y2 : y2
			}else if(arr[i].substring(j,j+1) == "D"){
				y = (y == 0) ? 0 : y - 1;
				y2 = (y2 != 0) ? (position2[y2-1][x2] != "") ? y2 - 1 : y2 : y2;
			} else if(arr[i].substring(j,j+1) == "L"){
				x = (x == 0) ? 0 : x - 1;
				x2 = (x2 != 0) ? (position2[y2][x2-1] != "") ? x2 - 1 : x2 : x2;
			} else if(arr[i].substring(j,j+1) == "R"){
				x = (x == 2) ? 2 : x + 1;
				x2 = (x2 != 4) ? (position2[y2][x2+1] != "") ? x2 + 1 : x2 : x2;
			}
		}
		combination = combination + position[y][x];		
		combination2 = combination2 + position2[y2][x2];
	}
	return "First combination is: " + combination + "\nSecond combination is: " + combination2;
}