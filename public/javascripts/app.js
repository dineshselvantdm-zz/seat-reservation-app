//Isomorphic Javascript 

const AVAILABLE		= 	1;
const SELECTED 		=	2;	
const SEAT_STATE 	=	{"0":"unavailable","1":"available","2":"selected"};

//MVC JS Framework
var m = require("mithril");

//MVC Mithril Component for Seat Reservation
var ReservationComponent = {

	controller: function(data){
		ReservationComponent.seats=data.seats;
		ReservationComponent.selected_seats=[];	
	},

	view: function(ctrl,args){
		return m(".reserve__comp__container",{onclick:ReservationComponent.changeSeatState},[
			m(".reserve__comp__container__head","PICK YOUR SEAT(S)"),
			m("hr"),
			ReservationComponent.seats.map(function(state,seat_position){
				return m(".reserve__comp__container__seat--"+SEAT_STATE[state],
					{"data-pos":seat_position+1})
			}),
			m(".reserve__comp__container__msg","You reserved " +
				ReservationComponent.selected_seats.length +
				" seat(s)  "+
				ReservationComponent.selected_seats.toString())
		])
	},

	changeSeatState : function(e){
			var current_seat_pos = e.target.getAttribute("data-pos");
			var current_seat_index = current_seat_pos-1;
			var current_seat_status = ReservationComponent.seats[current_seat_index];
			if(current_seat_status === AVAILABLE){
				ReservationComponent.seats[current_seat_index] = SELECTED;
				ReservationComponent.selected_seats.push(current_seat_pos);
			}else if(current_seat_status === SELECTED){
				ReservationComponent.seats[current_seat_index] = AVAILABLE;
				var unselected_seat_index = ReservationComponent.selected_seats.indexOf(current_seat_pos);
				ReservationComponent.selected_seats.splice(unselected_seat_index,1);
			}
		}
}

module.exports = {
  view : ReservationComponent.view,
  controller : ReservationComponent.controller
}