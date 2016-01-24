sap.ui.jsview("uplaza.App", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf uplaza.App
	*/ 
	getControllerName : function() {
		return "uplaza.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf uplaza.App
	*/ 
	createContent : function(oController) {
		this.setDisplayBlock(true);
		var app = new sap.m.App("theApp", {
			initialPage : "homepage"
		});
		var page = sap.ui.xmlview("homepage", "uplaza.homepage");
		app.addPage(page);
		return new sap.m.Shell("appShell",{
			title : "UPlaza",
			showLogout : false,
			app : app,
		});
	}

});