'use strict';

 {
    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        const msg = ['hoge', 'fuga', 'poit'];
        const n = Math.floor(Math.random() * msg.length);
        btn.textContent = msg[n];
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
    
 }