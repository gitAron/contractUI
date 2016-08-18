sap.ui.define([
	], function () {
		return sap.ui.core.UIComponent.extend("sap.ui.demo.myFiori.Component", {

	createContent: function() {

		// create root view
		var oView = sap.ui.view({
			id: "app",
			viewName: "sap.ui.demo.myFiori.view.App",
			type: "JS",
			viewData: {
				component: this
			}
		});

		var oParameters = {}; // username : "<username>", password : "<password>"
		$.ajax({
			dataType: "json",
			data: oParameters,
			type: "GET",
			url: "/findLoss", //see neo-app.json destination and destinations in Cloud Cockpit
			//Debugging reasons
			//error: function(ts) {alert(ts.responseText)},
			success: function(data) {
				for (var i = 0; i < data.length; ++i) {
					data[i]["createdAtObject"] = new Date(data[i]["createdAt"]);
				}
				// set data model on root view
				var oModel = new sap.ui.model.json.JSONModel({
					Loss: data
				});
				oView.setModel(oModel);
			}

		});

		// set i18n model
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl: "i18n/messageBundle.properties"
		});
		oView.setModel(i18nModel, "i18n");

		// set device model
		var deviceModel = new sap.ui.model.json.JSONModel({
			isPhone: jQuery.device.is.phone,
			listMode: (jQuery.device.is.phone) ? "None" : "SingleSelectMaster",
			listItemType: (jQuery.device.is.phone) ? "Active" : "Inactive"
		});
		deviceModel.setDefaultBindingMode("OneWay");
		oView.setModel(deviceModel, "device");

		// done
		return oView;
	}
	});

});