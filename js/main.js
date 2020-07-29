'use strinct';


{	//フォームを送信するとページ遷移が発生するため、一瞬だけ表示されたあとにページがリロードされてしまう
	//Eventオブジェクトを渡してあげて、、既定の動作をキャンセルすることができる preventDefault() というメソッドを実行
	document.querySelector('form').addEventListener('submit', (e) => {
		e.preventDefault();
		console.log('submit');
	});

}

