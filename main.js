const axios = require('axios');

const Discord = require("discord.js");


const client = new Discord.Client({
        intents: [
            Discord.Intents.FLAGS.GUILDS,
            Discord.Intents.FLAGS.GUILD_MESSAGES
        ]
    });

const prefix = '-';

client.once('ready', () => {
    console.log("discordbot is online");
});

client.on('message', message =>{
if(!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).split(/ + /);
const command = args.shift().toLowerCase();


    if(command === 'joke'){
    axios.get('http://192.168.0.6:8000/videos/?format=json')
    .then(function (response) {
        console.log(response.data.results[0].link)
        message.channel.send({files:[String(response.data.results[0].link)]})
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    
        //message.channel.send({files:['./a.mp4']})
    }

    
    
})


client.login("OTMzOTExOTE3NTY5OTI5Mjk2.YeobQA.5wARVHgGw_H5koQZjzzKkmTyThg");