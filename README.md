# HaxClip
Create Haxball Clips (15 seconds) GIF from hbr2 file.

### Installation
```sh
$ npm install
$ node main.js
```

### Config
<b>API_KEY</b> is the key to authorizing websocket connections<br>
<b>LIMIT_CLIP_BY_USER</b> is the limit of clips per users

### Minimal configuration
This project using puppeteer and recording frames from canvas. A server of at least 4GB of ram is recommended for performances.

### Output example
![image](https://i.imgur.com/4B88S1o.gif)

### SSL
This project does not support SSL certificates, if you wish to set it up, refer to: https://www.npmjs.com/package/ws#external-https-server
<br>
Else you can enabling mixed content from allow haxball.com going to your unsecure endpoint: https://experienceleague.adobe.com/docs/target/using/experiences/vec/troubleshoot-composer/mixed-content.html

### Examples
See the Examples folder.
