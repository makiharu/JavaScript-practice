'use strinct';

const signal = 'pink'

switch (signal) {
	case 'red':
		console.log('止まれ');
	break;
	case 'yellow':
		console.log('注意して進め');
		break;
	case 'green':
		console.log('進んでもいいよ');
	break;
	default:
		console.log('Wrong signal!');
	break;
}

