'use strict';

{
	//join()
	//1 /区切りの方法
	//2 区切りなし表示
	const d = [2020, 7, 28];
	console.log(d.join('/')); //1 2020/7/28
	console.log(d.join('')); //2 2020728

	//split()
	const t = '17:08:24';
	console.log(t.split(':'));

	const [hour, minute, second] = t.split(':');
	console.log(hour);
	console.log(minute);
	console.log(second);
 }


