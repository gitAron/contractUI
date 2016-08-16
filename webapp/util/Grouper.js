jQuery.sap.declare("sap.ui.demo.myFiori.util.Grouper");

sap.ui.demo.myFiori.util.Grouper = {
	
	BillingStatus : function (oContext) {
		var status = oContext.getProperty("lastModifiedAt");
		var key, text;
		if (status <= 1470725545443) {
			key = "Key_A";
			text = "loss number <= 1470725545443 " ;
		} else if (status <= 1470810189290) {
			key = "Key_B";
			text = "loss number <= 1470810189290  ";
		} else {
			key = "Key_C";
			text = "loss number > 1470810189290 ";
		}
		return {
			key: key,
			text: text
		};
	},
	
	GrossAmount : function (oContext) {
		var number = oContext.getProperty("lossNo");
		var key, text;
		if (number <= 25) {
			key = "Key_A";
			text = "loss number <= 25 " ;
		} else if (number <= 75) {
			key = "Key_B";
			text = "loss number <= 75  ";
		} else {
			key = "Key_C";
			text = "loss number > 75 ";
		}
		return {
			key: key,
			text: text
		};
	}
};