sap.ui.controller("uplaza.dressSelect", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf uplaza.dressSelect
*/
	onInit: function() {
		this.navConRec = "Dot1";
//		var btn = document.getElementById('btn');

//		btn.addEventListener('click', function(){
//		    alert('你点击了这里');
//		}, false);
		
	//	this.loadNumbers();
		/*
		var button1 = new sap.m.Image("Dot1", {
			src : "image/04dress_dotselected.png",
			press: function(evt) {
				oController.handleNav(evt, this);
			},
			customData: new sap.ui.core.CustomData({
				key: "target",
				value: "Dress1",
			})
		}).addStyleClass("dressDot1");
		var button2 = new sap.m.Image("Dot2", {
			src : "image/04dress_dotun.png",
			press: function(evt) {
				oController.handleNav(evt, this);
			},
			customData: new sap.ui.core.CustomData({
				key: "target",
				value: "Dress2",
			})
		}).addStyleClass("dressDot2");
		var button3 = new sap.m.Image("Dot3", {
			src : "image/04dress_dotun.png",
			press: function(evt) {
				oController.handleNav(evt, this);
			},
			customData: new sap.ui.core.CustomData({
				key: "target",
				value: "Dress3",
			})
		}).addStyleClass("dressDot3");
		*/
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf uplaza.dressSelect
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf uplaza.dressSelect
*/
//	onAfterRendering: function() {
//		$(".dressDot1.Top").animate({opacity: 1.0});
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf uplaza.dressSelect
*/
//	onExit: function() {
//
//	}
	handleNav: function(evt) {
		//set buttons
		this.byId(this.navConRec).setSrc("image/04dress_dotun.png");
		this.navConRec = evt.getSource().sId.substring("13");
		this.byId(this.navConRec).setSrc("image/04dress_dotselected.png");
		var navCon = this.getView().byId("navCon");
		var target = evt.getSource().data("target");
		if (target) {
			var animation = "show";
			navCon.to(this.getView().byId(target), animation);
		} else {
			navCon.back();
		}
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
	
	loadNumbers: function() {
		jQuery.sap.delayedCall(0, this, function () {
			var $hs = $("#markScores");
			$hs.append('<strong id="HealthStatusNum"></strong>');
			$hs.append('<label id="HSLabel">Fitting Scores</label>');
			$hs.circleProgress({
				value: 0.73,
		        size: 140,
		        thickness: 4,
		        fill: {
		        	color: "rgb(243, 185, 64)",
		        }
			}).on('circle-animation-progress', function(event, progress, stepValue) {
			    $(this).find('strong').html(parseInt(100 * stepValue.toFixed(2).substr(1)));
			});
		});
	},
	
	onCheckOut: function(){
		 var bus = sap.ui.getCore().getEventBus();
	     bus.publish("nav", "to", { 
	            id : "CheckOut",
	            data : {
	            }
	    });
	},
	
	onChange: function(){
//		$(".dress111").animate({opacity: 0.0});
//		$(".dress112").animate({opacity: 1.0});
		this.byId("dress111").setSrc("image/04dress_01_01.png");
	},
	
	flipCard: function(){
		alert("hello world");
	},

});