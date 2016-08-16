jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
jQuery.sap.require("sap.ui.demo.myFiori.util.Grouper");
jQuery.sap.require("sap.m.MessageToast");

sap.ui.controller("sap.ui.demo.myFiori.view.Master", {

	onExit: function() {
		if (this._lineItemViewDialog) {
			this._lineItemViewDialog.destroy();
			this._lineItemViewDialog = null;
		}
	},

	handleListItemPress: function(evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("Detail", context);
	},

	_getDialog: function() {
		if (!this._oDialog) {
			this._oDialog = sap.ui.xmlfragment("sap.ui.demo.myFiori.view.Dialog", this);
			this.getView().addDependent(this._oDialog);
		}
		return this._oDialog;
	},
	handleOpenDialog: function() {
		this._getDialog().open();
	},
	handleOpenDialogFilter: function() {
		this._getDialog().open("filter");
	},
	

	handleSearch: function(evt) {

		// create model filter
		var filters = [];
		var query = evt.getParameter("query");
		if (query && query.length > 0) {
			var filter = new sap.ui.model.Filter("text", sap.ui.model.FilterOperator.Contains, query);
			filters.push(filter);
		}

		// update list binding
		var list = this.getView().byId("list");
		var binding = list.getBinding("items");
		binding.filter(filters);
	},

	handleFilterSettings: function(evt) {

	},

	liveSearch: function(evt) {

		// create model filter
		var filters = [];
		var query = evt.getSource().getValue();
		if (query && query.length > 0) {
			var filter = new sap.ui.model.Filter("text", sap.ui.model.FilterOperator.Contains, query);
			filters.push(filter);
		}

		// update list binding
		var list = this.getView().byId("list");
		var binding = list.getBinding("items");
		binding.filter(filters);
	},

	handleListSelect: function(evt) {
		var context = evt.getParameter("listItem").getBindingContext();
		this.nav.to("Detail", context);
	},
	
	handleConfirm: function(evt) {
		var that = this;
		var aSorters = [];
		var mParams = evt.getParameters();
		if (mParams.sortItem) {
			var sPath = mParams.sortItem.getKey();
			var bDescending = mParams.sortDescending;
			var vGroup = sap.ui.demo.myFiori.util.Grouper[sPath];
			aSorters.push(new sap.ui.model.Sorter(sPath, bDescending, vGroup));
		}
		var oBinding = that.getView().byId("list").getBinding("items");
		oBinding.sort(aSorters);
	},
	

	handleViewSettings: function(evt) {

		// create dialog
		var that = this;
		if (!this._lineItemViewDialog) {
			this._lineItemViewDialog = new sap.m.ViewSettingsDialog({
				groupItems: [
					new sap.m.ViewSettingsItem({
						text: "Loss Number",
						key: "lossNo"
					}),
					new sap.m.ViewSettingsItem({
						text: "Created at",
						key: "createdAt"
					}),
					new sap.m.ViewSettingsItem({
						text: "Last Modified at",
						key: "lastModifiedAt"
					})

				], confirm: function(evt) {
					var aSorters = [];
					var mParams = evt.getParameters();
					if (mParams.groupItem) {
						var sPath = mParams.groupItem.getKey();
						var bDescending = mParams.groupDescending;
						var vGroup = sap.ui.demo.myFiori.util.Grouper[sPath];
						aSorters.push(new sap.ui.model.Sorter(sPath, bDescending, vGroup));
					}
					var oBinding = that.getView().byId("list").getBinding("items");
					oBinding.sort(aSorters);
				}
			});
		}

		// open dialog
		this._lineItemViewDialog.open();
	}
});