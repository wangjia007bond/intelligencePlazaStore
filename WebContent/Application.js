jQuery.sap.declare("Application");
jQuery.sap.require("sap.ui.app.Application");

sap.ui.app.Application.extend("Application", {

	init : function() {
		//to be continue...
	},

	main : function() {
		// create app view and put to html root element
		var root = this.getRoot();
		sap.ui.xmlview("app", "uplaza.App").placeAt(root);
	}
});