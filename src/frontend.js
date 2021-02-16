document.addEventListener("DOMContentLoaded", function () {
	var countdowns = document.getElementsByClassName("eb-countdown-container");

	// Return if there is no countdown block
	if (!countdowns) return;

	// Set each countdown
	for (let i = 0; i < countdowns.length; i++) {
		let countdown = countdowns[i];

		let counter = function (countdown) {
			var dateNode = countdown.getElementsByClassName("eb-countdown-get-date");
			var date = dateNode[0].getAttribute("data-date");
			var now = new Date().getTime();
			var time = new Date(date).getTime();
			// var currentUtcOffset = time.getTimezoneOffset() * 60 * 1000;
			var timer = Math.floor( ( time - now ) / 1000 );

			var days = 0;
			var hours = 0;
			var minutes = 0;
			var seconds = 0;

			if (time >= now) {
				var oneDay = 86400;
				var oneHour = 3600;
				var oneMinute = 60;
				var oneSecond = 1;

				days = Math.floor(timer / oneDay);
				timer -= days * oneDay;
				hours = Math.floor(timer / oneHour) % 24;
				console.log(timer + "/" + oneHour + " % 24");
				timer -= hours * oneHour;
				minutes = Math.floor(timer / oneMinute) % 60;
				console.log(timer + "/" + oneMinute + " % 60");
				timer -= minutes * oneMinute;
				seconds = Math.floor(timer / oneSecond) % 60;
				console.log(timer + "/" + oneSecond + " % 60");
			}

			// Get values from html
			var daysNode = countdown.getElementsByClassName(
				"eb-countdown-digits-days"
			);
			var hoursNode = countdown.getElementsByClassName(
				"eb-countdown-digits-hours"
			);
			var minutesNode = countdown.getElementsByClassName(
				"eb-countdown-digits-minutes"
			);
			var secondsNode = countdown.getElementsByClassName(
				"eb-countdown-digits-seconds"
			);

			// Change inner html
			daysNode[0].innerHTML = days;
			hoursNode[0].innerHTML = hours;
			minutesNode[0].innerHTML = minutes;
			secondsNode[0].innerHTML = seconds;

			if ( ! countdown.classList.contains('eb-countdown-activated') ) {
				countdown.classList.add('eb-countdown-activated')
			}
		};

		var interval = setInterval(function () {
			counter(countdown);
		}, 1000);
	}
});
