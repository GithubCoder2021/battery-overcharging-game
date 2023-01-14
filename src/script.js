let percent = new Decimal(0);
let charge = new Decimal(1);
let upg1 = new Decimal(20);
setInterval(function() {
  percent = percent.add(charge);
	
  document.getElementById("percent").innerText = percent;
}, 1000);

function buyUpg1() { 
   costCheck = percent.greaterThanOrEqualTo(upg1);
   if (costCheck == true) {
	   percent = percent.sub(upg1);
	   charge = charge.mul(2);
	   upg1 = upg1.mul(2);  
	   document.getElementById("upg1").innerText = upg1;
   } 
	
}
