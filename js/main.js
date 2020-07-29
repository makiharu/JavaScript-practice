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
	//クラスの拡張
	class SponsoredPost {
		constructor(text, sponsor) {
			this.text = text;
			this.likeCount = 0;
			this.sponsor = sponsor;
		}

		show() {
			console.log(`${this.text} - ${this.likeCount}`);
			console.log(`... sponsored by ${this.sponsor}`);
		}

		like() {
			this.likeCount++;
			this.show();
		}
	}



	const posts = [
		new Post('JacaScriptの勉強'),
		new Post('プログラミング学習'),
		new SponsoredPost('JSを使いこなす', 'hogehoge'),
	];

	posts[2].show();//JSを使いこなす - 0
					// ... sponsored by hogehoge
	posts[2].like();//JSを使いこなす - 1
					// ... sponsored by hogehoge
}


