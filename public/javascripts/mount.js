//Mount the component on client side
var m = require("mithril");
var ReservationComponent = require('./app.js');
module.exports = (function() {
    var state = document.readyState;
    if(state === 'interactive' || state === 'complete') {
        // document ready
		m.mount(document.getElementById('reserve__comp'), {
			controller: ReservationComponent.controller(seats_data),
			view: ReservationComponent.view
		});		
    }
    else setTimeout(arguments.callee, 100);
})();