$(document).ready(function(){
	let coordLat = 0;
	let coordLon = 0;
	let apikey = '5ffac77f16951932bd95bd6b05ba0883';
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition, showError);
	} else {
		$("#target").text("Geolocation is not supported by this browser.");
	}

	function showPosition(position) {
		coordLat = position.coords.latitude;
		coordLon = position.coords.longitude;
	}

	function showError(error) {
		switch(error.code) {
			case error.PERMISSION_DENIED:
				$("#target").text("User denied the request for Geolocation.");
				break;
			case error.POSITION_UNAVAILABLE:
				$("#target").text("Location information is unavailable.");
				break;
			case error.TIMEOUT:
				$("#target").text("The request to get user location timed out.");
				break;
			case error.UNKNOWN_ERROR:
				$("#target").text("An unknown error occurred.");
				break;
		}
	} 
	$.ajax({
        type: "POST",
        url: "https://api.openweathermap.org/data/2.5/onecall?lat=" + coordLat + '&lon=' + coordLon + '&appid'+ apikey,
        dataType: "json",
        success: function (result, status, xhr) {
        	console.log('hello');
        },
        error: function (xhr, status, error) {
			alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
        }
	});
});