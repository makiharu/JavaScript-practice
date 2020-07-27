'use strict';

{

	const scores = [80,90,40]
	scores.push(60, 50);
	scores.shift();
	scores.unshift(10, 20);
	scores.pop();

	//10 20 90 40 60

    for (let i = 0; i < scores.length; i++) {
  		console.log(`Score ${i}: ${scores[i]}`);
  	}
}

