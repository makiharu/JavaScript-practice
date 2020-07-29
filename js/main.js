'use strinct';


{
  const text = document.querySelector('textarea');

  // text.addEventListener('focus', () => {
  //   console.log('focus');
  // });

  // text.addEventListener('blur', () => {
  //   console.log('blur');
  // });

  //input 内容が更新されたとき
  text.addEventListener('input', () => {
  	// console.log('input');
  	console.log(text.value.length)
  });
  //change　更新が確定したとき
  text.addEventListener('change', () => {
  	console.log('change');
  });

  //リロードして文字を入力するたびに input イベントが呼ばれていて、
  //入力をおえてフォーカスを外してあげると change イベントがちゃんと呼ばれています。

}

