const socket = new WebSocket('ws://127.0.0.1:8091/?key=HaxClip-u7z8za9228e5&&webHook=1156713181868216481/ENYLp6T11okKm2bsfQlcxlzOa3gJnpRUa6X7mXC2kbwvh6MS7VjBA4SKrxb1IBFaJuQY');

function sendMsg(key, data = null) {
    if(socket == null)
        return;
    
    socket.send(JSON.stringify({key: key, data:data}));
}

setTimeout(() => {
  sendMsg("newClip", {
      url: "https://url.com/myReplay.hbr2",
      byUser: {username: "OvB", id: 1},
      time: 60
  })
}, 1000);

socket.addEventListener("message", (event) => {
	if(event.data == null)
		return;
	
	const dataParsed = JSON.parse(event.data);
        if(dataParsed.key == null)
			return;
		
	switch(dataParsed.key) {
		case "playerMsg": {
			console.log(dataParsed.data)
            break;
        }
    }
});