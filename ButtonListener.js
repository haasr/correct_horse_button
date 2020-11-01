const gpio = require('onoff').Gpio;
const Button_GPIO_Pin = 16;
const child_process = require('child_process');

child_process.spawn('gpio', ['-g', 'mode', '16', 'up']); // Enable the internal pull-up resistor.

let videoBtn = new gpio(Button_GPIO_Pin, 'in', 'falling',
				{ debounceTimeout: 10 });

videoBtn.watch(function(err, value) {
	if (err) console.log('Error: ', err, err.stack);
	console.log("Button pressed; launching video in default browser...");
	child_process.spawn('chromium-browser', ['--kiosk', 'file:///home/pi/Videos/correct_horse.mp4']);
});

process.on('SIGINT', function() {
	videoBtn.unexport();
	console.log('\nButton unexported; Exiting.');
	process.exit();
});
