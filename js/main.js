'use strinct';

{
  document.querySelector('button').addEventListener('click', () => {
  	const targetNode = document.getElementById('target');

  	//この要素に他のクラスがなければ、これでok
    targetNode.className = 'my-color';

    //他のクラスがある場合
    //ここで、 my-color のスタイルを付けるためにボタンをクリックすると…、border が消えてしまう
	//なぜかというと、 className を使うとクラス属性の値が丸っと書き換わって、 my-color だけになってしまうから
    targetNode.className = 'my-color my-border';
  });
}


