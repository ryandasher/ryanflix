function showRandomEpisode() {
	// var selected_show = document.getElementsByClassName('shows')[0].value;
	// var data = 'data/' + selected_show + '.json';
	var httpRequest = new XMLHttpRequest;

	if (!httpRequest) {
		console.log('Can\t create an XMLHTTP Request.');
		return false;
	}

	httpRequest.overrideMimeType('application/json');
	httpRequest.open('GET', chrome.extensiondata, true);
	httpRequest.onreadystatechange = function() {
		if (httpRequest.readyState == 4 && httpRequest.status == 200) {
			callback(alert(httpRequest.responseText));
		}
	}
	httpRequest.send(null);
}

