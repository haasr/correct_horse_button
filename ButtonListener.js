const gpio = require('onoff').Gpio;
const Button_GPIO_Pin = 16;
const spawn = require('child_process').spawn;

let videoBtn = new gpio(Button_GPIO_Pin, 'in', 'falling',
				{ debounceTimeout: 10 });

videoBtn.watch(function(err, value) {
	let openVidCmd = '';

	if (err) console.log('Error: ', err, err.stack);
	openVidCmd = spawn('chromium-browser', ['"/home/pi/videos/correct_horse.mp4"']);
});

process.on('SIGINT', function() {
	videoBtn.unexport();
	console.log('\nButton unexported; Exiting.');
	process.exit();
});
