'use strinct';
// チェックボックス(赤、青、黄)

{
	//ダブルクリック
	document.querySelector('button').addEventListener('dblclick', () => {
		console.log('Double cliccked');
	});
	//マウス移動
	document.querySelector('button').addEventListener('mousemove', () => {
		console.log('move');
	});

}
