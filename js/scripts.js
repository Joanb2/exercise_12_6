var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').on('click', searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
	  		url: url + countryName,
	  		method: 'GET',
	  		success: showCountriesList
	  	});
}

function showCountriesList(resp) {
	countriesList.empty();
	  resp.forEach(function(item){
	   	$('<li>').text(item.name).appendTo(countriesList);
	   	$('<p>').text("Capital: " + item.capital).appendTo('li');
	   	$('<p>').text("Population: " + item.population).appendTo('li');
	   	$('<p>').text("Area: " + item.area + " km2").appendTo('li');
	});
}