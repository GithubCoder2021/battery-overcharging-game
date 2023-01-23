let percent = normal(-Infinity);
let charge = normal(0);
let upg1 = normal(1);
let upg2 = normal(2.39794);
let upg3 = normal(3.39794);
let upg4 = normal(3.69897);

setInterval(function() {
  percent = addLogs(percent,charge);
  percent = normal(percent);
  document.getElementById("percent").innerText = percent;
}, 1000);

function buyUpg1() { 
   if (percent >= upg1) {
	   percent = subtractLogs(percent,upg1);
           percent = normal(percent);
	   document.getElementById("percent").innerText = percent;
	   charge = addLogs(charge,0);
	   upg1 = multiplyLogs(upg1,0.30103);
           upg1 = normal(upg1); 
	   document.getElementById("upg1").innerText = upg1;
   } 
	
}

function buyUpg2() { 
   if (percent >= upg2) {
	   percent = subtractLogs(percent,upg2);
           percent = normal(percent);
	   document.getElementById("percent").innerText = percent;
	   charge = addLogs(charge,1);
	   upg2 = multiplyLogs(upg,0.20411);
           upg2 = normal(upg2); 
	   document.getElementById("upg2").innerText = upg2;
   } 
	
}

function buyUpg3() { 
   if (percent >= upg3) {
	   percent = subtractLogs(percent,upg3);
           percent = normal(percent);
	   document.getElementById("percent").innerText = percent;
	   charge = addLogs(charge,2);
	   upg3 = multiplyLogs(upg,0.1139);
           upg3 = normal(upg3); 
	   document.getElementById("upg3").innerText = upg3;
   } 
	
}

function buyUpg4() { 
   if (percent >= upg4) {
	   percent = subtractLogs(percent,upg4);
           percent = normal(percent);
	   document.getElementById("percent").innerText = percent;
	   charge = multiplyLogs(charge,0.30103);
	   upg4 = multiplyLogs(upg,0.342422);
           upg4 = normal(upg4); 
	   document.getElementById("upg4").innerText = upg4;
   } 
	
}

