//IIFE for generating random seats.
var RandomSeatsGenerator = (function(){
	const TOTAL_SEATS 	= 	48;	

	//Randomly generate AVAILABLE and UNAVAILABLE seats
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
	return{
		generateRandomSeats : generateRandomSeats,
		TOTAL_SEATS : TOTAL_SEATS
	}
})();

module.exports = RandomSeatsGenerator;