jQuery.sap.declare("sap.ui.demo.myFiori.util.Formatter");
jQuery.sap.require("sap.ui.core.format.DateFormat");

sap.ui.demo.myFiori.util.Formatter = {
	
	_statusStateMap : {
		"Neu" : "Warning",
		"Initial" : "Success"
	},
	
	statusState :  function (value) {
		var map = sap.ui.demo.myFiori.util.Formatter._statusStateMap;
		return (value && map[value]) ? map[value] : "None";
	},
	
	date : function (value) {
		if (value) {
			var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern: "MM/dd/yyyy HH:mm:ss"}); 
			oDateFormat.parse(new Date(value));
			return oDateFormat;
		} else {
			return value;
		}
	},
	
	quantity :  function (value) {
		try {
			return (value) ? parseFloat(value).toFixed(0) : value;
		} catch (err) {
			return "Not-A-Number";
		}
	}
};