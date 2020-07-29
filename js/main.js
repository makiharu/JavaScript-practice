'use strinct';
// li要素を追加する
{
  document.querySelector('button').addEventListener('click', () => {
  	//要素を追加するが、これだけだと空の要素ができただけ
  	const item2 = document.createElement('li');
  	//テキストの中身を記述
  	item2.textContent = 'item 2';

  	//DOM ツリーに追加すれば良いが、まずは親要素である ul 要素を取得
  	const ulNode = document.querySelector('ul');
  	ulNode.appendChild(item2);
  });
}


// 'use strict';

// {
//   document.querySelector('button').addEventListener('click', () => {
//     const item2 = document.createElement('li');
//     item2.textContent = 'item 2';

//     // const ulNode = document.querySelector('ul');
//     const ul = document.querySelector('ul');
//     ul.appendChild(item2);
//   });
// }