'use strict';

{
	class Post {//親クラス
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
			this.show();
		}

	}
	//クラスの拡張
	//SponsoredPost クラスには like() メソッドはないが、 Post クラスの like() メソッドが引き継がれる
	class SponsoredPost extends Post{//子クラス　継承
		constructor(text, sponsor) {
			super(text);//親クラスのconstructorを呼ぶ
			this.sponsor = sponsor;
		}

		show() {
			//こちらの処理ですが、親クラスの show() メソッドを使えば良いので、その場合 super に繋げて書けば
			//親クラスのメソッドを呼べるというルールもある。
			super.show();
			console.log(`... sponsored by ${this.sponsor}`);
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
