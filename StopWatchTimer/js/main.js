{
    const timer = document.getElementById('timer');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');
  
    let startTime;
    let timeoutId;
    // function countUp() {
    //   console.log(Date.now() - startTime);
    //   setTimeout(() => {
    //     countUp();
    //   }, 10);
    // }
  
    // start.addEventListener('click', () => {
    //   startTime = Date.now();
    //   countUp();
    // });

    function countUp() {
      random = Math.floor(Math.random() * 3);
      timer.textContent = `ランダム値: ${random}`;
      
      timeoutId = setTimeout(() => {
        countUp();
      }, 300);
    }
  
    start.addEventListener('click', () => {
      let random = 0;
      countUp();  
    });
  
    //ストップはスロットマシンが全て同じマークのものに揃ったときにする。
  
    reset.addEventListener('click', () => {
      clearTimeout(timeoutId);
      timer.textContent = '00:00:000';
    })


  }