'use strict';

{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const reset = document.getElementById('reset');

  timer.textContent = 'hoge';
  
  function countUp() {
    const random = Math.floor(Math.random() * 3);
    timer.textContent = `ランダム値: ${random}`;
    
    const timeoutId = setTimeout(() => {
      countUp();
    }, 1000);
  }

  start.addEventListener('click', () => {

    countUp();  
  });

  //ストップはスロットマシンが全て同じマークのものに揃ったときにする。

  reset.addEventListener('click', () => {
    clearTimeout(timeoutId);
    timer.textContent = '00:00:000';
  })
};