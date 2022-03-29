export function extractTime(date) {
	let timePassed = Date.now() - (new Date(date)).getTime();
	timePassed /= 1000;
	const extractValues = [60, 60, 24, 7, 4, 13];
	let i;
	for(i = 0; i < extractValues.length && timePassed > extractValues[i]; i++) {
		timePassed /= extractValues[i];
	}
	timePassed = timePassed.toFixed(0);
	switch(i) {
		case 0:
			return timePassed + ' seconds ago';
		case 1:
			return timePassed + ' mins ago';
		case 2:
			return timePassed + ' hours ago';
		case 3:
			return timePassed + ' days ago';
		case 4:
			return timePassed + ' days ago';
		case 5:
			return 'about ' + timePassed + ' months ago'
		default:
			return 'about ' + timePassed + ' years ago';
	}
}
