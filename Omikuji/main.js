'use strict';

 {
    const btn = document.getElementById('btn');
    const endbtn = document.getElementById('end');

    //おみくじボタンを押下した場合
    btn.addEventListener('click', () => {
        const msg = ['ストップウォッチを15分以内に作成する', 'おみくじを作成する', '基本情報の問題を15問解く', '新しいことを学ぶ'];
        const n = Math.floor(Math.random() * msg.length);
    
        if(n < 0.3) {
            btn.textContent = msg[n];
        } else if(n < 0.8) {
            btn.textContent = msg[n];
        } else {
            btn.textContent = msg[n];
        }

        //背景の設定
        switch(n) {
            case 0:
                btn.style.background = '#ffff99';
                break;
            case 1:
                btn.style.background = '#66ff66';
                break;
            case 2:
                btn.style.background = '#33ffff';
                break;
        }
            });

        //タスクが完了した場合
        endbtn.addEventListener('click', () => {
            //完了メッセージを表示した後、もとの表示に戻す
            btn.textContent = 'よくできました!!!';
            btn.style.background = '#ef454a';

            setTimeout(() => {
                btn.textContent = 'もう一度挑戦する？';
                btn.style.background = '#ffa500';
            }, 2000);
        });
 }