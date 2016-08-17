jQuery.sap.declare("sap.ui.demo.myFiori.util.DateConverter");

sap.ui.demo.myFiori.util.DateConverter = {
	
	convertDates: function(jsondata) {
		$.each(jsondata, function(i, item) {
			alert(jsondata[i].createdAt);
		});
		return jsondata;
	}
};