function day6(reader){
	var lines = reader.result.split("\r\n");
	var corrupted = [];
	var decoded = "";
	var decoded2 = "";
	for(var i = 0; i < lines.length; i++){
		for(var j = 0; j < lines[i].length; j++){
			if(!corrupted[j]){corrupted[j]="";}
			corrupted[j] += lines[i].charAt(j);
		}
	}
	for(var i = 0; i < corrupted.length; i++){
		var chars = "";
		var max = 0;
		var min = 0;
		var maxChar = "";
		var minChar = "";
		for(var j = 0; j < corrupted[0].length; j++){
			if(chars.indexOf(corrupted[i].charAt(j)) == -1){
				chars += corrupted[i].charAt(j);
				var cnt = (corrupted[i].match(new RegExp(corrupted[i].charAt(j),"g")) || []).length;
				if(max == 0 || cnt > max){maxChar = corrupted[i].charAt(j);max = cnt;}
				if(min == 0 || cnt < min){minChar = corrupted[i].charAt(j);min = cnt;}
			}
		}
		decoded += maxChar;
		decoded2 += minChar;
	}
	
	return "1: " + decoded + "\n2: " + decoded2;
}