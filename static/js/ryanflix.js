function retrieveEpisodes() {
	var json_file =
		'/data/' + document.getElementsByClassName('shows')[0].value + '.json';
	var httpRequest = new XMLHttpRequest;

	if (!httpRequest) {
		console.log('Can\'t create an XMLHTTP Request.');
		return false;
	}

	httpRequest.overrideMimeType('application/json');
	httpRequest.open('GET', chrome.extension.getURL(json_file), true);
	httpRequest.onreadystatechange = function() {
		if (httpRequest.readyState == 4 && httpRequest.status == 200) {
			showRandomEpisode(httpRequest.responseText);
		}
	}
	httpRequest.send(null);
}

function showRandomEpisode(episodes) {
	alert("WE HERE.");
	alert(showRandomEpisode);
}
