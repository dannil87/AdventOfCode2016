function is_ABBA_or_ABA(str) {  
	var rev = str.split("").reverse().join("");  
	return str == rev;  
}  

function find_ABBA(str){ 
	var brackets = false;
	var openBracket = 0;
	var closedBracket = 0;
	var abba = 0;
	var tls = false;
	for(var i = 0; i < str.length; i++){
		if(str.charAt(i) == "["){
			openBracket++;
		}
		if(str.charAt(i) == "]"){
			closedBracket++;
		}		
		var sub = str.substr(i, 4);
		if (is_ABBA_or_ABA(sub) && sub.charAt(0) != sub.charAt(1) && sub.length == 4){
			if(openBracket > closedBracket){
				brackets = true;
			}
			abba++;
		} 
	}  
	if(abba != 0 && !brackets){
		tls = true;
	}
	return tls;
}

function find_ABA(str){
	var openBracket = 0;
	var closedBracket = 0;
	var valid = false;
	var aba = [];
	var bab = [];
	for(var i = 0; i < str.length; i++){
		if(str.charAt(i) == "["){
			openBracket++;
		}
		if(str.charAt(i) == "]"){
			closedBracket++;
		}		
		var sub = str.substr(i, 3);
		if (is_ABBA_or_ABA(sub) && sub.charAt(0) != sub.charAt(1) && sub.charAt(1) != "[" && sub.charAt(1) != "]" && sub.length == 3){
			if(openBracket > closedBracket){
				bab.push(sub);
			}else{
				aba.push(sub);
			}
		} 
	}  
	//if(aba.length > 0){valid = true;}
	for(var i = 0; i < aba.length; i++){
		if(bab.indexOf(aba[i].charAt(1)+aba[i].charAt(0)+aba[i].charAt(1)) > -1){
			valid = true;
			continue;
		}
	}
	
	return valid;	
}

function day7(reader){
	var lines = reader.result.split("\r\n");
	var tlsIPs = 0;
	var sslIPs = 0;
	for(var line in lines){
		tlsIPs = (find_ABBA(lines[line])) ? tlsIPs + 1 : tlsIPs;
		sslIPs = (find_ABA(lines[line])) ? sslIPs + 1 : sslIPs;
	}
	
	return "1: " + tlsIPs + " IPs\n2: " + sslIPs + " IPs";
}