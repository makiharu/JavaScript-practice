'use strinct';

  {
  	function update() {
  		//document.querySelector('h1').textContent = 'Changed!';

  		document.querySelector('#target').textContent = 'Changed!-target';

  		//document.getElementById('target').textContent = 'Changed!-getById'
  	}

  	setTimeout(update, 1000);
  }