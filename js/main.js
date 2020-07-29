'use strinct';
// セレクトボックス(赤、青、黄)
{
  document.querySelector('button').addEventListener('click', () => {
  	const li = document.createElement('li');
  	const color = document.querySelector('select');
  	//li の textContent に値をセット
  	//select の場合 value プロパティで選択された値、
  	//そして selectedIndex プロパティで選択された値が何番目かを取得できる
  	li.textContent = `${color.value} - ${color.selectedIndex}`;
  	document.querySelector('ul').appendChild(li);
  });
}

