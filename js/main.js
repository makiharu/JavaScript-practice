'use strinct';


{
	document.querySelector('button').addEventListener('dblclikc', () => {
		console.log('double clicked');
	});
//この関数に引数を渡せば、ブラウザがイベントに関する情報をセットして渡してくれるという仕組み
	// document.addEventListener('mouseover', e => {
	// 	//consle.log('moved');
	// 	console.log(e.clientX, e.clientY);
	// });

//文書内でキーを押したときに何のキーが押されたかを表示
	document.addEventListener('keydown', e => {
		console.log(e.key);
	});

}

