'use strict';

{
	let i = 0;
	function showTime() {
		console.log(new Date());
		const timeoutID = setTimeout(showTime, 1000);
		i ++;
		if (i > 2) {
			clearTimeout(timeoutID);
		}
	}

	showTime();
}

