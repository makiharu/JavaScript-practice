'use strict';

{
	//ユーザーから文字を受け取って、大文字にする
	//文字型ではなく、数値が値として渡った場合の処理方法について

	const name = '5';

	try {
		console.log(name.toUpperCase());
	} catch (e) {
		console.log(e);
	}


	console.log('Finish');
}



