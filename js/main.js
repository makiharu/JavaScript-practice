'use strinct';


{
	document.querySelector('ul').addEventListener('click', e => {
		//これは、Element.tagNameはタグ名を大文字で返す
	    if (e.target.nodeName === 'LI') {
	      e.target.classList.toggle('done');
	    }
	  });
}

