var m = require('mithril');
var reservation_component = require('./app.js');

//Mount the component on client side
(function() {
    var state = document.readyState;
    if(state === 'interactive' || state === 'complete') {
        // document ready
			m.mount(document.getElementById('reserve__comp'), {
				controller: reservation_component.controller(seats_data),
				view: reservation_component.view
			});		
    }
    else setTimeout(arguments.callee, 100);
})();