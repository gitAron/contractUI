jQuery.sap.declare("sap.ui.demo.myFiori.util.Grouper");

sap.ui.demo.myFiori.util.Grouper = {
	
	createdAt : function (oContext) {
		var status = oContext.getProperty("createdAt");
		var key, text;
		if (status <= 1470725528416) {
			key = "Key_A";
			text = "loss number <= 1470725528416 " ;
		} else {
			key = "Key_B";
			text = "loss number > 1470725528416 ";
		}
		return {
			key: key,
			text: text
		};
	},
	
	lastModifiedAt : function (oContext) {
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
	
	lossNo : function (oContext) {
		var number = oContext.getProperty("lossNo");
		var key, text;
		if (number <= 200) {
			key = "Key_A";
			text = "loss number <= 200 " ;
		} else if (number <= 250) {
			key = "Key_B";
			text = "loss number <= 250  ";
		} else {
			key = "Key_C";
			text = "loss number > 250 ";
		}
		return {
			key: key,
			text: text
		};
	}
};