let percent = new Decimal(0);
let charge = new Decimal(1);
let upg1 = new Decimal(10);
let upg2 = new Decimal(250);
let upg3 = new Decimal(2500);
let upg4 = new Decimal(5000);

setInterval(function() {
  percent = percent.add(charge);
  save();
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
function save() {
  var save = {
    percent: percent,
    charge: charge,
    upg1: upg1,
    upg2: upg2,
    upg3: upg3,
    upg4: upg4
  }
 localStorage.setItem("save",JSON.stringify(save));
 var savegame = JSON.parse(localStorage.getItem("save"));
 if (typeof savegame.percent !== "undefined") percent = savegame.percent;
 if (typeof savegame.charge !== "undefined") charge = savegame.charge;
 if (typeof savegame.upg1 !== "undefined") upg1 = savegame.upg1;
 if (typeof savegame.upg2 !== "undefined") upg2 = savegame.upg2;
 if (typeof savegame.upg3 !== "undefined") upg3 = savegame.upg3;
 if (typeof savegame.upg4 !== "undefined") upg4 = savegame.upg4;
}

function hardReset() {
 reset = "ARE YOU SURE?!!!";
 if (comfirm(reset) == true) {
  alert("NOOOOOOOO...")
  localStorage.removeItem("save")
  let percent = new Decimal(0);
  let charge = new Decimal(1);
  let upg1 = new Decimal(10);
  let upg2 = new Decimal(250);
  let upg3 = new Decimal(2500);
  let upg4 = new Decimal(5000);
  document.location.reload();
 }
}
