var template = require('../views/index.marko');
var m = require('mithril');
var render = require('mithril-node-render');
var ReservationComponent = require('../public/javascripts/app.js');
var RandomSeatsGenerator = require('../helpers/seat-generator.js');

//GET index page
exports.index = function(req, res){	
	var seats_data = {total_seats: RandomSeatsGenerator.TOTAL_SEATS, seats: []};
	seats_data.seats = RandomSeatsGenerator.generateRandomSeats(seats_data.total_seats);
	
	//Server side rendered HTML from Isomorphic Mithril JS
	var reservation_component_html = render(m.component(ReservationComponent,seats_data));	

	//Stream HTML - Chunked Encoding for better TTFB
	template.stream({
		serverside_rendered_html : reservation_component_html,
		seats_data : seats_data
	})
	.pipe(res);
};