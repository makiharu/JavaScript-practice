'use strinct';

{
  document.querySelector('button').addEventListener('click', () => {
  	const targetNode = document.getElementById('target');

    // targetNode.className = 'my-color';
    // targetNode.className = 'my-color mey-border';
    // targetNode.classList.add('my-color');

    // no.1
    // if (targetNode.classList.contains('my-color') === true) {
    // 	targetNode.classList.remove('my-color');
    // } else {
    // 	targetNode.classList.add('my-color');
    // }

    //no.2
   targetNode.classList.toggle('my-color');



  });
}


