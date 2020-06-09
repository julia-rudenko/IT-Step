$(document).ready(function(){
	let coordLat = 0;
	let coordLon = 0;
	let apikey = '5ffac77f16951932bd95bd6b05ba0883';
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition, showError);
	} else {
		console.log("Geolocation is not supported by this browser.");
	}

	function showPosition(position) {
		coordLat = position.coords.latitude;
		coordLon = position.coords.longitude;
		$.ajax({
			type: "POST",
			url: "https://api.openweathermap.org/data/2.5/onecall?lat=" + coordLat + '&lon=' + coordLon + '&exclude=current,minutely,hourly' + '&appid'+ apikey,
			dataType: "json",
			success: function (result, status, xhr) {
			},
			error: function (xhr, status, error) {
				$('.weather').text('Sunny');
				$('.temperature').text('+30');
				alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
			}
		});
	}

	function showError(error) {
		switch(error.code) {
			case error.PERMISSION_DENIED:
				console.log("User denied the request for Geolocation.");
				break;
			case error.POSITION_UNAVAILABLE:
				console.log("Location information is unavailable.");
				break;
			case error.TIMEOUT:
				console.log("The request to get user location timed out.");
				break;
			case error.UNKNOWN_ERROR:
				console.log("An unknown error occurred.");
				break;
		}
	} 
});