var isEnabled = false;
var isScriptExecuted = false;

chrome.storage.local.get({dict:{"intervalId": "", "isEnabled":false}},function(data){
        var dict = data.dict;
        if (dict["isEnabled"]){
        	document.getElementById("facezucc-button").innerHTML = "Disable FaceZUCC";
        	isEnabled = true;
        }
});

var toggle = function(){
	chrome.tabs.query(
    { currentWindow: true, active: true },
    function (tabArray) {
    	if (!isScriptExecuted){
    		chrome.tabs.executeScript(tabArray[0].id, {file: "magicfunctions.js"}, function() {
		  // File executed, it's ready for the message
		  chrome.tabs.sendMessage(tabArray[0].id, { action: "toggle"});
			});
			isScriptExecuted = true;
    	} else {
    		chrome.tabs.sendMessage(tabArray[0].id, { action: "toggle"});
    	}
    }
	);

	if (isEnabled){
		document.getElementById("facezucc-button").innerHTML="Enable FaceZUCC";
		isEnabled=!isEnabled;
		} else {
		document.getElementById("facezucc-button").innerHTML = "Disable FaceZUCC";
		isEnabled=!isEnabled;
	}
}

var googleDonation = function(){
	var sku = "";
	google.payments.inapp.buy({
	  'parameters': {'env': 'prod'},
	  'sku': sku,
	  'success': null,
	  'failure': null
	});
}

var bitpayDonation = function(){
	document.getElementById("bitpay-donation").submit();
}

var paypalDonation = function(){
	document.getElementById("paypal-donation").submit();
}

document.getElementById("facezucc-button").onclick = toggle;
//document.getElementById("donate-google").onclick = googleDonation;
document.getElementById("donate-bitpay").onclick = bitpayDonation;
document.getElementById("donate-paypal").onclick = paypalDonation;

