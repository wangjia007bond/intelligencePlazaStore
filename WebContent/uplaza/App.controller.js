sap.ui.controller("uplaza.App", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf uplaza.App
*/
	onInit: function() {
		//this.app = sap.ui.getCore().byId("appControl");

		// subscribe to event bus
		/*
		var bus = sap.ui.getCore().getEventBus();
		bus.subscribe("nav", "to", this.navToHandler, this);
		bus.subscribe("nav", "back", this.navBackHandler, this);
		bus.subscribe("nav", "virtual", this.navVirtualHandler, this); */
	},
/*
	navToHandler : function(channelId, eventId, data) {
		if (data && data.id) {
			// lazy load view
			if (this.app.getPage(data.id) === null) {
				jQuery.sap.log.info("now loading page '" + data.id + "'");
				this.app.addPage(sap.ui.xmlview(data.id, "uplaza." + data.id));
			}
			// Navigate to given page (include bindingContext)
			this.app.to(data.id, data.data);
		} else {
			jQuery.sap.log.error("nav-to event cannot be processed. Invalid data: " + data);
		}
	},

	navBackHandler : function() {
		this.app.back();
	},
	
	navVirtualHandler : function(channelId, eventId, data) {
		var page = sap.ui.xmlview(data, "uplaza."+data.id);
		this.app.addPage(page);
	}
*/
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf uplaza.App
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf uplaza.App
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf uplaza.App
*/
//	onExit: function() {
//
//	}

});