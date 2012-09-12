/*global soda:true*/

var soda = (function(){
	
	function CalendarDay(){
		var year, month, day, parts, string;
		
		if(arguments.length ===3){
			year = arguments[0];
			month = arguments[1];
			day = arguments[2];
		}else if(arguments.length === 1){
			string = arguments[0];
			parts = string.split("-");
			if(parts.length !==3){
				throw "Invalid date string: " + string;
			}
			year = parseInt(parts[0], 10);
			month = parseInt(parts[1], 10);
			day = parseInt(parts[2], 10);
			
		}else{
			throw "Invalid number of arguments: " + arguments.length;
		}
		
		function toString(){
			function padZero(v){
				if(v<10){
					return "0" + v;
				} else {
					return "" + v;
				}
			}
			return year + "-" + padZero(month) + "-" + padZero(day);
		}
		
		function getYear(){
			return year;
		}
		
		function getMonth(){
			return month;
		}
		
		function getDay(){
			return day;
		}
		
		function isAfter(other){
			if(other.year() === year){
				if(other.month() === month){
					return other.day() < day;
				}else if(other.month() < month){
					return true;
				}else{
					return false;
				}
			} else if(other.year() < year){
				return true;
			} else {
				return false;
			}
			
		}
		
		return {year:getYear, month:getMonth, day:getDay, toString:toString, isAfter:isAfter};
	}
	
	return {
		CalendarDay:CalendarDay
	};
}());
