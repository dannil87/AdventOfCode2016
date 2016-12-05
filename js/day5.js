function day5(reader){
	
	function getPwd(doorID){
		var pwd = "";
		var pwd2 = ["","","","","","","",""];
		var cnt = 0;
		var idx = 0;
		
		while(pwd.length < 8 || cnt < 8){
			var hash = hex_md5(doorID + idx);
			if(hash.substring(0,5) == "00000" && pwd.length < 8){
				pwd += hash.charAt(5);
			}
			if(hash.substring(0,5) == "00000" && parseInt(hash.charAt(5)) < 8 && pwd2[parseInt(hash.charAt(5))] == ""){
				pwd2[parseInt(hash.charAt(5))] = hash.charAt(6);
				cnt++;
			}
			idx++;
		}
		return "1: The password is: " + pwd + "\n2: The password is: " + pwd2;
	}
	
	return getPwd(reader.result);
}