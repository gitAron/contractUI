jQuery.sap.declare("sap.ui.demo.myFiori.util.DateConverter");

sap.ui.demo.myFiori.util.DateConverter = {

	convertDates: function(jsondata) {
		$.each(jsondata, function(i, item) {
			// Create a date object with the current time
			var now = new Date(jsondata[i].createdAt );

			// Create an array with the current month, day and time
			var date = [now.getMonth() + 1, now.getDate(), now.getFullYear()];

			// Create an array with the current hour, minute and second
			var time = [now.getHours(), now.getMinutes(), now.getSeconds()];

			// Determine AM or PM suffix based on the hour
			var suffix = (time[0] < 12) ? "AM" : "PM";

			// Convert hour from military time
			time[0] = (time[0] < 12) ? time[0] : time[0] - 12;

			// If hour is 0, set it to 12
			time[0] = time[0] || 12;

			// If seconds and minutes are less than 10, add a zero
			for (var j = 1; j < 3; j++) {
				if (time[j] < 10) {
					time[j] = "0" + time[j];
				}
			}

			// Return the formatted string
			jsondata[i].createdAt = date.join("/") + " " + time.join(":") + " " + suffix;
		});
		return jsondata;
	}
};