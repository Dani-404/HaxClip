# HaxClip
Create Haxball Clips (15 seconds) GIF from hbr2 file.

### Installation
```sh
$ npm install
$ node main.js
```

### Linux
```
sudo apt-get install chromium-browser
```

Be sure to set an executablePath and --no-sandbox argument on puppeteer.launch() method (main.js)
```js
this.browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium-browser',
    product: 'chrome',
    headless: "new",
    args: [
        `--no-sandbox`,
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`
    ]
});
```

### Config
[Config/Config.js](https://github.com/Dani-404/HaxClip/blob/main/Config/Config.js)<br>
<b>API_KEY</b> is the key to authorizing websockets connections<br>
<b>LIMIT_CLIP_BY_USER</b> is the limit of clips per users

### Copyrights
Free to use, it would be nice to keep the copyrights.

### Minimal configuration
This project using puppeteer and recording frames from canvas at 30 FPS. A server of at least 4GB of ram is recommended for performances.<br><br>
If you want minimize this, you need cap the frame rate of the [HaxReplay](https://github.com/Dani-404/HaxClip/blob/main/HaxReplay/website/game/replay-min.js#L3729), and according it after with [encoder.setFrameRate()](https://github.com/Dani-404/HaxClip/blob/main/HaxReplay/website/game/replay-min.js#L1384C1-L1384C21) method.<br>
You can use <b>headless: false</b> of <b>puppeteer.launch()</b> method for your testing.

### Output example
![image](https://i.imgur.com/4B88S1o.gif)

### SSL
This project does not support SSL certificates, if you wish to set it up, refer to [this page](https://github.com/websockets/ws#external-https-server).
<br><br>
Else you can enabling mixed content to [allow haxball.com going to your unsecure endpoint](https://experienceleague.adobe.com/docs/target/using/experiences/vec/troubleshoot-composer/mixed-content.html).
<br>
If you use puppeteer for setup your rooms, you can use these flags to allow mixed content.
```
--disable-web-security --allow-running-insecure-content
```

### Client Examples
See the [Examples](https://github.com/Dani-404/HaxClip/tree/main/Examples) folder.
