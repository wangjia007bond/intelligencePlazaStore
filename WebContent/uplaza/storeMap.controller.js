sap.ui.controller("uplaza.storeMap", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf uplaza.storeMap
*/
	onInit: function() {
	},
	
	onMenu: function(){
		 var bus = sap.ui.getCore().getEventBus();
 	     bus.publish("nav", "to", { 
 	            id : "floorMenu",
 	            data : {
 	            }
 	    });
	},
	
	onYellow : function(oEvent){
		$(".mapYellow").animate({opacity: 1.0});
		$(".mapRed4").animate({opacity: 0.0});
		$(".mapHM").animate({opacity: 1.0});
	},
	
	onStore: function(oEvent){
		 var bus = sap.ui.getCore().getEventBus();
 	     bus.publish("nav", "to", { 
 	            id : "storeSearch",
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
	
	onGame: function(){
		 $(".appStore.Top").animate({opacity: 0.0});
		 $(".appGame.Top").animate({opacity: 1.0});
		 var bus = sap.ui.getCore().getEventBus();
	     bus.publish("nav", "to", { 
	            id : "gameHome",
	            data : {
	            }
	    });
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf uplaza.storeMap
*/
//	onBeforeRendering: function() {
//		
//				
//		
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf uplaza.storeMap
*/
	onAfterRendering: function() {
		
		setTimeout('$(".mapRed1").animate({opacity: 1.0},400);',0);
		setTimeout('$(".mapRed3").animate({opacity: 1.0},400);',400);
		setTimeout('$(".mapGrey1").animate({opacity: 1.0},400);',800);
		setTimeout('$(".mapPink2").animate({opacity: 1.0},400);',1200);
		setTimeout('$(".mapRed4").animate({opacity: 1.0},400);',1600);
		setTimeout('$(".mapPurple2").animate({opacity: 1.0},400);',2000);
		setTimeout('$(".mapPink1").animate({opacity: 1.0},400);',2400);
		setTimeout('$(".mapPurple1").animate({opacity: 1.0},400);',2800);
		setTimeout('$(".mapGrey2").animate({opacity: 1.0},400);',3200);
		setTimeout('$(".mapRed2").animate({opacity: 1.0},400);',3600); 
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf uplaza.storeMap
*/
//	onExit: function() {
//	
//	}

});