jQuery.sap.declare("sap.ui.demo.myFiori.util.Grouper");

sap.ui.demo.myFiori.util.Grouper = {
	
	BillingStatus : function (oContext) {
		var status = oContext.getProperty("lastModifiedAt");
		return {
			key: status,
			text: status
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