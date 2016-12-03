function day3(reader){	
	var arr = reader.result.split("\n");
	var sides = [];
	var trimString = "";
	var valid = 0;
	var valid2 = 0;
	for(var i = 0; i < arr.length; i++){
		trimString = arr[i].substring(arr[i].search(/\S|$/),arr[i].length);
		sides = trimString.split(/\s+/);
		if(parseInt(sides[0])+parseInt(sides[1]) > parseInt(sides[2]) && parseInt(sides[2])+parseInt(sides[1]) > parseInt(sides[0]) && parseInt(sides[0])+parseInt(sides[2]) > parseInt(sides[1])){
			valid++;
		}		
	}
	for(var i = 0; i < arr.length; i+=3){
		var vert = [];
		for(var j = 0; j < 3 && i + j < arr.length; j++){
			trimString = arr[i+j].substring(arr[i+j].search(/\S|$/),arr[i+j].length);
			sides = trimString.split(/\s+/);
			vert.push(sides[0]);
			vert.push(sides[1]);
			vert.push(sides[2]);
		}
		if(parseInt(vert[0]) + parseInt(vert[3]) > parseInt(vert[6]) && parseInt(vert[6]) + parseInt(vert[3]) > parseInt(vert[0]) && parseInt(vert[0]) + parseInt(vert[6]) > parseInt(vert[3])){
			valid2++;
		}
		if(parseInt(vert[1]) + parseInt(vert[4]) > parseInt(vert[7]) && parseInt(vert[7]) + parseInt(vert[4]) > parseInt(vert[1]) && parseInt(vert[1]) + parseInt(vert[7]) > parseInt(vert[4])){
			valid2++;
		}
		if(parseInt(vert[2]) + parseInt(vert[5]) > parseInt(vert[8]) && parseInt(vert[8]) + parseInt(vert[5]) > parseInt(vert[2]) && parseInt(vert[2]) + parseInt(vert[8]) > parseInt(vert[5])){
			valid2++;
		}
	}
	
	return "1: Valid triangles: " + valid + "\n2: Valid triangles: " + valid2;
}