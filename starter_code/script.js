$(document).ready(function(){
$('#city-type').click(function(){
event.preventDefault();
});
//array for city values
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

for(var i = 0; i < cities.length; i++){
	$("#city-type").append('<option>' + cities[i] + '</option>');
};

function cityImg(){
var city = $('#city-type').val();



if (city === 'NYC') {
$('body').attr('class','nyc')
		};
		if (city === 'SF') {
$('body').attr('class','sf')
		};
if (city === 'LA') {
$('body').attr('class','la')
		};
		if (city === 'ATX') {
$('body').attr('class','atx')
		};
		if (city === 'SYD') {
$('body').attr('class','syd')
		};
	}
		$('#city-type').change(cityImg);

});

