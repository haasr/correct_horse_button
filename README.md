# correct_horse_button
Open a video by pressing a button on the Raspberry Pi. This is called correct_horse_button because it opens an mp4 copy of this video: https://www.youtube.com/watch?v=b3_lVSrPB6w

Requirements
------------

- Raspberry Pi 3B or 4B with a connected display and ideally, connected audio.
- The graphical version of Raspberry Pi OS running on the Pi with Internet access (Internet only necessary for installs).
- An installation of the wiringpi libraries, headers, and gpio command (usually installed by default).
- An installation of chromium-browser
- A fresh installation of Node.js and NPM
- A simple push-button
- A couple of female to male jumper wires and perhaps a breadboard.

* If you would prefer to use something like omxplayer to open a video, you could change the chromium-browser
command in ButtonListener.js to an omxplayer command with your omxplayer args. I use Chromium so a local file
URL could easily be substituted for a web URL.
* The breadboard is not necessary as the button's pins can just be connected to the jumper wires.


Installing Node
---------------

Download the archive:

  wget https://nodejs.org/dist/v12.18.3/node-v12.18.3-linux-armv7l.tar.gz
  
Extract it:

  tar -xf node-v12.18.3-linux-armv7l.tar.gz
  
Copy it:

  cp -r node-v12.18.3-linux-armv7l/* /usr/local/
  
Finally, check the Node and NPM versions:

  node --version
  npm --version
 
 
 Installing wiringpi
 -------------------
 
 If wiringpi is not installed, it may be installed using:
 
  sudo apt install wiringpi -y
  
  
 Installing chromium-browser
 ---------------------------
 
  If chromium-browser is not installed, it may be installed using:
  
  sudo apt install chromium-browser -y
  
 
Connecting the push-button
--------------------------
 
Simply connect one pin or set of pins on the button (I am using a 4-pin button) to physical pin 34 (GND)
and connect the other pin or set of pins to physical pin 36 (GPIO 16).
 
 
Execute the code
----------------
 
  node ButtonListener.js
  
After execution, pushing the button will hopefully lauch your video. Note that the video URL is hardcoded
in the script because I am lazy. You can replace it with the URL of your choice such as (https://www.youtube.com/watch?v=b3_lVSrPB6w).


Troubleshooting
---------------

- Ensure one side of your button is connected to a ground pin such as physical pin 34. Ensure the other
side is connected to physical pin 36 (GPIO 16).

- Run the 'gpio readall' command. Check that BCM pin 16 is in input mode. Try ensuring that the pull-up
resistor is enabled using the command: 'gpio -g mode 16 up'.

- Check that the button inputs are being read by reading the button unpressed and then pressed using the
command: 'gpio -g read 16'. If the value does not change from a 1 to 0 when the button is pressed, the button
may be incorrectly connected.


