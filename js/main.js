'use strict';

{
	const scores = [80,90,40]

	scores.splice(1,1, 30,60,90);
	//80 30 60 90 40


	for (let i = 0; i < scores.length; i ++) {
		console.log(`Score ${i}: ${scores[i]}`);
	}
}

//splice(変化が開始する位置, 削除数, 追加する要素)