let percent = new Decimal(0);
let charge = new Decimal(1);
let upg1 = new Decimal(10);
let upg2 = new Decimal(250);
let upg3 = new Decimal(1500);

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
	   upg2 = upg2.mul(2);  
	   document.getElementById("upg2").innerText = upg2;
   } 
	
}
function buyUpg3() { 
   costCheck = percent.greaterThanOrEqualTo(upg3);
   if (costCheck == true) {
	   percent = percent.sub(upg3);
	   document.getElementById("percent").innerText = percent;
	   charge = charge.add(100);
	   upg3 = upg3.mul(2);  
	   document.getElementById("upg3").innerText = upg3;
   } 
	
}
