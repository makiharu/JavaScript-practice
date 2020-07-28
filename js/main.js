'use strict';

//タイマー機能について
//現在日時を表示する関数があったとして、それを 1 秒ごとにくり返す
//setInterval() という命令を使うのですが、このように関数とミリ秒単位の数値を渡すと、
//この関数をこちらのミリ秒間隔でくり返し実行してくれます。


{
	let i = 0;

	function showTime() {
		console.log(new Date());
		i ++;
		if (i > 2) {
			clearInterval(intervalId);
		}
	}

	const intervalId = setInterval(showTime, 1000);
}

