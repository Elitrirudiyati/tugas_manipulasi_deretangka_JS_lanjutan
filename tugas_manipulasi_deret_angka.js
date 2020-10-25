function deretAngka(n) {
 
 let hasilDeret = '';
 for(i=1; i <= n ; i++){
 	if(i % 3 === 0 && i % 5 === 0){
 		hasilDeret += "NIOMIC ";
 	}else if(i % 3 === 0){
 		hasilDeret += "NIO ";
 	}else if(i % 5 === 0){
 		hasilDeret += "MIC ";
 	}else{
 		hasilDeret += i + " ";
 	}
 }
 return hasilDeret;
}

console.log(deretAngka(10));
console.log(deretAngka(20));
console.log(deretAngka(30));
