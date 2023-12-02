const prefixCommand = "!",
    discordWebHookReplay = "https://discord.com/api/webhooks/1180076639628034079/d54gpHTs06Rt190l6_7vQ9kJ4ssqlzmzUfmYxs4mmWFgGuLTdlUgU4Tn9xT4Gvs35Art",
    discordWebHookClip = "1156713181868216481/ENYLp6T11okKm2bsfQlcxlzOa3gJnpRUa6X7mXC2kbwvh6MS7VjBA4SKrxb1IBFaJuQY";

let clips = [];

const room = HBInit({
	roomName: "Room",
	maxPlayers: 16,
	noPlayer: true
});

let socket;

function connectToHaxClip() {
	const socketInfo = socket = new WebSocket(`ws://127.0.0.1:8091/key=HaxClip-u7z8za9228e5&&webHook=${discordWebHookClip}`);
	socketInfo.onclose = function(e) {
		console.error("Connection to HaxClip losted... Trying to reconnect...");
		
		setTimeout(function() {
			connectToHaxClip();
		}, 1000);
	}

	socketInfo.onmessage = function(msg) {
		if(msg.data == null)
			return;
		
		const dataParsed = JSON.parse(msg.data);
		if(dataParsed.key == null)
			return;
			
		switch(dataParsed.key) {
			case "playerMsg": {
				room.sendAnnouncement(dataParsed.data.msg, dataParsed.data.playerId, dataParsed.data.color, dataParsed.data.style, dataParsed.data.sound);
				break;
			}
		}
	};
}

connectToHaxClip();

function getDate(){
    let data = new Date(),
    day = data.getDate().toString().padStart(2, '0'),
    month = (data.getMonth()+1).toString().padStart(2, '0'),
    year = data.getFullYear(),
    hours = data.getHours().toString().padStart(2, '0'),
    minutes = data.getMinutes().toString().padStart(2, '0');
    return `${day}-${month}-${year}-${hours}h${minutes}m`;
}

function processClips(clipsList) {
    const form = new FormData();
	form.append("file", new File([room.stopRecording()], `HaxReplay-${getDate()}.hbr2`, {type: "text/plain"}));
	
	fetch(discordWebHookReplay, {
        method: "POST",
        body: form
    }).then((response) => response.json()).then((msgData) => {		
		if(msgData == null || msgData.attachments == null || msgData.attachments[0] == null)
			return;
		
		clipsList.forEach((clip) => {
			sendMsg("newClip", {
				url: msgData.attachments[0].url.split('?')[0],
				byUser: {username: clip.username, id: clip.id},
				time: clip.time
			 })
		});
    }).catch((e) => {
		console.error("Impossible to send discord results.");
    })
}

function updateAdmins() {
    var players = room.getPlayerList();
    if ( players.length == 0 ) return;
    if ( players.find((player) => player.admin) != null ) return;
    room.setPlayerAdmin(players[0].id, true);
  }

room.onPlayerChat = function(player, message) {
    if(message.startsWith(prefixCommand)) {
        const splitMsg = message.substring(1).split(" "); // split message everySpace;
        const commandName = splitMsg[0]; // getCommandName, we can get arguments with splitMsg[1], splitMsg[2]...

        if(commandName == null)
            return false;

        switch(commandName.toLowerCase()) {
            case "clip":
                if(room.getScores() == null || socket == null || socket.readyState !== WebSocket.OPEN) {
                    room.sendAnnouncement("Sorry you can't clip now.", player.id, 0xff4a4a, null, 2);
                    return false;
                }
                
                if(Math.round(room.getScores().time) < 15)
                {
                    room.sendAnnouncement("Please wait 15 seconds match duration before making a clip.", player.id, 0xff4a4a, null, 2);
                    return false;
                }
                
                let count = 0;
                clips.forEach((clip) => {
                    if(clip.id == player.id)
                        count++;
                });
                
                if(count >= 2) {
                    room.sendAnnouncement("Sorry maximum 2 clips by game.", player.id, 0xff4a4a, null, 2);
                    return false;
                }
                
                clips.push({id: player.id, username: player.name, time: Math.round(room.getScores().time)});
                room.sendAnnouncement(`Clip added to the waiting list, it will be processed at the end of the game.`, player.id, 0xffd20a);
                break;

            default:
                room.sendAnnouncement("Invalid command!", player.id, 0xFF0000)
                break;
        }

        return false;
    }
}

room.onPlayerJoin = function(player) {
  updateAdmins();
}

room.onPlayerLeave = function(player) {
  updateAdmins();
}

room.onGameStart = function() {
    room.startRecording();
}

room.onGameStop = function() {
    const clipsCloned = [...clips];
	clips = [];
    processClips(clipsCloned);
}