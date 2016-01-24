sap.ui.controller("uplaza.HMMap", {
	onDress: function(oEvent){
		 var bus = sap.ui.getCore().getEventBus();
 	     bus.publish("nav", "to", { 
 	            id : "dressSelect",
 	            data : {
 	            }
 	    });
	},
	
	onGame: function(){
		 var bus = sap.ui.getCore().getEventBus();
	     bus.publish("nav", "to", { 
	            id : "gameHome",
	            data : {
	            }
	    });
	},
	
	onBack: function(){
		 var bus = sap.ui.getCore().getEventBus();
 	     bus.publish("nav", "to", { 
 	            id : "storeMap",
 	            data : {
 	            }
 	    });
	},
	
	onCenter: function(oEvent){
		 var bus = sap.ui.getCore().getEventBus();
	     bus.publish("nav", "to", { 
	            id : "personalCenter",
	            data : {
	            }
	    });
	},
	
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf uplaza.HMMap
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf uplaza.HMMap
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf uplaza.HMMap
*/
	onAfterRendering: function() {
		setTimeout('$(".storeYellow1").animate({opacity: 1.0},500);',0);
		setTimeout('$(".storeYellow2").animate({opacity: 1.0},500);',0);
		setTimeout('$(".storeYellow3").animate({opacity: 1.0},500);',0);
		setTimeout('$(".storeDress1").animate({opacity: 1.0},1000);',1000);
		setTimeout('$(".storeDress2").animate({opacity: 1.0},1000);',1500);
		setTimeout('$(".storeDress3").animate({opacity: 1.0},1000);',2000);
	
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf uplaza.HMMap
*/
//	onExit: function() {
//
//	}

});