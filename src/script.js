percent = new Decimal(0);
charge = new Decimal(1);
setInterval(function() {
  percent = percent.add(charge);
	
  document.getElementById("percent").innerText = percent;
}, 1000);
