let percent = new Decimal(0);
let charge = new Decimal(1);
let upg1 = new Decimal(10);
let upg2 = new Decimal(250);
let upg3 = new Decimal(2500);
let upg4 = new Decimal(5000);

setInterval(function() {
  percent = percent.add(charge);
  document.getElementById("percent").innerText = percent;
}, 1000);

function buyUpg1() { 
   if (percent.gte(upg1)) {
	   percent = percent.sub(upg1);
	   document.getElementById("percent").innerText = percent;
	   charge = charge.add(1);
	   upg1 = upg1.mul(2);
	   document.getElementById("upg1").innerText = upg1;
   } 
	
}

function buyUpg2() { 
   if (percent.gte(upg2)) {
	   percent = percent.sub(upg2);
	   document.getElementById("percent").innerText = percent;
	   charge = charge.add(10);
	   upg2 = upg2.mul(1.6);
	   document.getElementById("upg2").innerText = upg2;
   } 
	
}

function buyUpg4() { 
   if (percent.gte(upg3)) {
	   percent = percent.sub(upg3);
	   document.getElementById("percent").innerText = percent;
	   charge = charge.add(100);
	   upg3 = upg3.mul(1.3);
	   document.getElementById("upg3").innerText = upg3;
   } 
	
}

function buyUpg4() { 
   if (percent.gte(upg4)) {
	   percent = percent.sub(upg4);
	   document.getElementById("percent").innerText = percent;
	   charge = charge.mul(2);
	   upg4 = upg4.mul(1.9);
	   document.getElementById("upg4").innerText = upg4;
   } 
	
}

