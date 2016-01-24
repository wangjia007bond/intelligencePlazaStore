sap.ui.controller("uplaza.DressDetail", {
	
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf uplaza.DressDetail
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf uplaza.DressDetail
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf uplaza.DressDetail
*/
	onAfterRendering: function() {
		$(".dressDot1.Top").animate({opacity: 1.0});
	},
	
//	onFlip: function(oEvent){
//		var cardContaioner = this.byId("myCard");
//		cardContaioner.addStyleClass("flip").toggle();
//	},
	
	onDot2: function(oEvent){
		$(".dressDot1.Top").animate({opacity: 0.0});
		$(".dressDot2.Top").animate({opacity: 0.0});
		$(".dressDot3.Top").animate({opacity: 0.0});
		var selectDot = oEvent.oSource.aCustomStyleClasses[0];
		selectDot= "." + selectDot.replace(/ /,".");
		$(selectDot).animate({opacity: 1.0});
	},
	
	onBack: function(){
		 this.app = sap.ui.getCore().byId("theApp");
		 this.app.back();
	},
	
	onGame: function(){
		 var bus = sap.ui.getCore().getEventBus();
 	     bus.publish("nav", "to", { 
 	            id : "gameHome",
 	            data : {
 	            }
 	    });
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf uplaza.DressDetail
*/
//	onExit: function() {
//
//	}

});