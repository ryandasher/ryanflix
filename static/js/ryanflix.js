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

function getRandomNumber(max, increment, rounded) {
	if(rounded) {
		return Math.floor((Math.random() * max) + increment);
	}
	return (Math.random() * max) + increment;
}

function showRandomEpisode(episodes) {
	var seasons = Object.keys(episodes);
	var index = getRandomNumber((Object.keys(episodes).length - 1), 1, true);
	
	var season = episodes[seasons[index]];
	var episodeIndex = getRandomNumber((season.length - 1), 1, true);
	var episode = season[episodeIndex];
}
