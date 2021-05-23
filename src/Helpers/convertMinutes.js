export const minutesConvert = (n) => {
	var num = n;
	var hours = num / 60;
	var rhours = Math.floor(hours);
	var minutes = (hours - rhours) * 60;
	var rminutes = Math.round(minutes);
	if (rhours > 1 && rminutes > 1) {
		return rhours + " hours and " + rminutes + " minutes";
	} else if (rhours > 1 && rminutes === 1) {
		return rhours + " hours and " + rminutes + " minute";
	} else if (rhours < 1 && rminutes > 1) {
		return rminutes + " minutes";
	} else if (rhours < 1 && rminutes === 1) {
		return rminutes + " minute";
	} else if (rhours === 1 && rminutes > 1) {
		return rhours + " hour and " + rminutes + " minutes";
	} else if (rhours === 1 && rminutes === 1) {
		return rhours + " hour and " + rminutes + " minute";
	} else if (rhours === 1 && rminutes === 0) {
		return rhours + " hour";
	} else if (rhours > 1 && rminutes === 0) {
		return rhours + " hours";
	}
};
