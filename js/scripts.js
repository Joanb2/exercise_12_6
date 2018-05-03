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
	  	$('<li>').appendTo(countriesList);
	  	var liElement = $('li');
		liElement.addClass('liClass');
	   	$('<h3>').text(item.name).appendTo(liElement);
	   	$('<p>').text("Capital: " + item.capital).appendTo(liElement);
	   	$('<p>').text("Population: " + item.population).appendTo(liElement);
	   	$('<p>').text("Area: " + item.area + " km2").appendTo(liElement);
	});
}