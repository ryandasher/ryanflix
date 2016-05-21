/**
* Make a request to the proper JSON file, and parse it.
*/
function retrieveEpisodes() {
	var json_file =
		'/data/' + document.getElementsByClassName('shows')[0].value + '.json';
	var httpRequest = new XMLHttpRequest;

	if (!httpRequest) {
		console.log('Can\'t create an XMLHTTP Request.');
		return false;
	}

	httpRequest.overrideMimeType('application/json');
	httpRequest.open('GET', json_file, true);
	httpRequest.onreadystatechange = function() {
		if (httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status == 200) {
			showRandomEpisode(JSON.parse(httpRequest.responseText));
		}
	}
	httpRequest.send();
}

/**
* Return a random integer.
*
* Args:
* max -- Length of the data we want to generate a random number for (integer).
* increment -- Amount to increment by (integer).
* rounded -- Round down to the nearest integer (boolean).
*/
function getRandomNumber(max, increment, rounded) {
	if(rounded) {
		return Math.floor((Math.random() * max) + increment);
	}
	return (Math.random() * max) + increment;
}

/**
* Show a random episode and season to the user.
*
* Args:
* episodes -- Parsed JSON from our show's data file (object).
*/
function showRandomEpisode(episodes) {
	// Randomly choose a season.
	var seasons = Object.keys(episodes);
	var index = getRandomNumber((seasons.length - 1), 1, true);

	// Randomly choose an episode from the selected season.
	var season = episodes[seasons[index]];
	var epIndex = getRandomNumber((season.length - 1), 1, true);

	document.getElementsByClassName('season')[0].innerHTML = seasons[index];
	document.getElementsByClassName('episode')[0].innerHTML = season[epIndex];
	document.getElementById('show').style.display = 'block';
}
