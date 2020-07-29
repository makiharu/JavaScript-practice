'use strict';

{
	class Post {
		constructor(text) {
			this.text = text;
			this.likeCount = 0;
		}

		//プロパティがメソッドのとき、functionを省略できる
		show() {
			//同じオブジェクト内のプロパティにアクセスするには、thisを使う
			console.log(`${this.text} - ${this.likeCount}likes`)
		}

		like() {
			this.likeCount++;
			this.show;
		}
	}


	const posts = [
		new Post('JacaScriptの勉強'),
		new Post('プログラミング学習')
	];

	posts[0].like();
	//show(posts[0]);
	posts[1].show();
	posts[0].show();
}

