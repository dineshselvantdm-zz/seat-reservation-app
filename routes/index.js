
/*
 * GET index page.
 */

var template = require('../views/index.marko');
var m = require('mithril');
var render = require('mithril-node-render');
var reservation_component = require('../public/javascripts/app.js');

const TOTAL_SEATS 	= 	48;

var randomizeSeats = function(){
		return parseInt(Math.random()*10)%2;
	}

var generateRandomSeats = function(data){
		var seats = [];
		var total_seats = data ? data : TOTAL_SEATS;
		for(let i=0;i<total_seats;i++){
			seats[i] = randomizeSeats();
		}
		return seats;
	}

exports.index = function(req, res){	
	var seats_data = {total_seats: TOTAL_SEATS, seats: []};
	seats_data.seats = generateRandomSeats(seats_data.total_seats);
	var reservation_component_html = render(m.component(reservation_component,seats_data));	
	template.stream({
		serverside_rendered_html : reservation_component_html,
		seats_data : seats_data
	})
	.pipe(res);
};