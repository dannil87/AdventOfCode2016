function day4(reader){
	var arr = reader.result.split("\n");
	var checksum = "";
	var sectorID = 0;
	var encName = "";
	var score;
	var totalSum = 0;
	var cipher;
	var decoded;
	var NPSectorID = 0;
	
	for(var i = 0; i < arr.length; i++){
		checksum = arr[i].substring(arr[i].indexOf("[")+1,arr[i].indexOf("]"));
		encName = arr[i].substring(0,arr[i].lastIndexOf("-")).replace(/-/g,"");
		sectorID = parseInt(arr[i].substring(arr[i].lastIndexOf("-")+1,arr[i].indexOf("[")));
		score = [["a",0],["b",0],["c",0],["d",0],["e",0],["f",0],["g",0],["h",0],["i",0],["j",0],["k",0],["l",0],["m",0],["n",0],["o",0],["p",0],["q",0],["r",0],["s",0],["t",0],["u",0],["v",0],["w",0],["x",0],["y",0],["z",0]]
		cipher = sectorID % 26;
		decoded = "";
		for(var j = 0; j < encName.length; j++){
			score[encName[j].charCodeAt(0)-97][1]++;
			decoded = (encName[j].charCodeAt(0)-97+cipher > 25) ? decoded + score[encName[j].charCodeAt(0)-123+cipher][0] : decoded + score[encName[j].charCodeAt(0)-97+cipher][0];
		}
		score.sort(
			function(a,b) {
				return b[1]-a[1] || a[0].localeCompare(b[0]);
			}
		);
		if(score[0][0] + score[1][0] + score[2][0] + score[3][0] + score[4][0] == checksum){
			totalSum += sectorID;
			NPSectorID = (decoded.search("northpole") != -1) ? sectorID : NPSectorID;
		}
	}
	return "1: Total sum of sector ID:s is: " + totalSum + "\n2: Sector ID of room with North Pole objects is: " + NPSectorID;
}