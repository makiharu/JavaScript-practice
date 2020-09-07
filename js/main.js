'use strict';

{
	//テンプレートリテラルを用いて、配列の各値を表示せよ。
	//Score: 40
// 	Score: 50
//  Score: 40
	const scores = [40, 90, 40];
	scores.splice(1, 1, 50, 50);
	for (let i =0; i < scores.length; i++) {
		console.log(`Score ${i}: ${scores[i]}`);
	}

}