const Asena = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');


Asena.addCommand({pattern: 'play ?(.*)', fromMe: false, desc: 'play song' , dontAddCommandList: true }, async (message, match) => {
	if (match[0].includes('install')) return;
	
        if (match[1] === '') return await message.client.sendMessage(message.jid,'need song name', MessageType.text, { quoted: message.data });
	
	const url = `https://zenzapi.xyz/api/play/playmp3?query=${match[1]}&apikey=whitedevil-terrorboy`;
	try {
		const response = await axios.get (json.url);
    
		const json = JSON.parse(response.body);
    
		if (response.statusCode === 200) return await axios.get (json.url)
      } catch {
		return await message.client.sendMessage(message.jid,'NOT FOUND', MessageType.text);
	}
});
