let percent = normal(-Infinity);
let charge = normal(0);
let upg1 = normal(1);
let upg2 = normal(2.3);
let upg3 = normal(-Infinity);
let upg4 = normal(3.69897);

setInterval(function() {
  percent = percent.add(charge);
  document.getElementById("percent").innerText = percent;
}, 1000);

function buyUpg1() { 
   costCheck = percent.greaterThanOrEqualTo(upg1);
   if (costCheck == true) {
	   percent = percent.sub(upg1);
	   document.getElementById("percent").innerText = percent;
	   charge = charge.add(1);
	   upg1 = upg1.mul(2);  
	   document.getElementById("upg1").innerText = upg1;
   } 
	
}

function buyUpg2() { 
   costCheck = percent.greaterThanOrEqualTo(upg2);
   if (costCheck == true) {
	   percent = percent.sub(upg2);
	   document.getElementById("percent").innerText = percent;
	   charge = charge.add(10);
	   upg2 = upg2.mul(1.6);  
	   upg2 = upg2.floor();
	   document.getElementById("upg2").innerText = upg2;
   } 
	
}

function buyUpg3() { 
   costCheck = percent.greaterThanOrEqualTo(upg3);
   if (costCheck == true) {
	   percent = percent.sub(upg3);
	   document.getElementById("percent").innerText = percent;
	   charge = charge.add(100);
	   upg3 = upg3.mul(1.3);  
	   upg3 = upg3.floor();
	   document.getElementById("upg3").innerText = upg3;
   } 
	
}

function buyUpg4() { 
   costCheck = percent.greaterThanOrEqualTo(upg4);
   if (costCheck == true) {
	   percent = percent.sub(upg4);
	   document.getElementById("percent").innerText = percent;
	   charge = charge.mul(2);
	   upg4 = upg4.mul(2.2);  
	   upg4 = upg4.floor();
	   document.getElementById("upg4").innerText = upg4;
   } 
	
}
