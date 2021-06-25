require('dotenv').config();
const {  webhook, Client } = require('discord.js');
client = new Client();
client.on('ready', () => {
    console.log(" 'Excellent,' ${client.user.username} 'is now Online' ");

    client.user 
        .setPresence({
        status: 'busy',
        game: {
            name: 'LastDayOnEarth:Survival',
            type: 'WATCHING'
        }
    });
})
async ( message, args) => {
    if (message.deletable) message.delete();
    
    if (args.length < 1)
      return message
      .reply('Your request needs more information')
      .then(m => m.delete(5000));

    if (args[0].toLowerCase() ==='embed') {
        const embed = new RichEmbed()
        .setColor(roleColor)
        .setDescription(args.slice(1).join(''))
        .setTimeStamp()
        .setImage(client.user.AvatarURL)
        .setAuthor(message.author.name, message.author.displayAvatarURL)
        .setFooter(client.user.username, client.user.displayAvartarURL)
    message.channel.send(embed);
    }else {
        message.channel.send(args.join(''));
    }
}
client.on('message', async message => {
    const PREFIX = '$';

    if (!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content
    .slice(PREFIX.length)
    .trim()
    .split(/\s+/g);
    const cmd = args
    .shift()
    .bold()
    .LowerCase();
    
    if (PREFIX === 'true') {
        if (cmd.length === 0)
        return;
    }
   if (cmd === 'Help') {
        response = run.Help;
        MessageEmbed.channel.send(response);
    }  
    if (cmd === 'Tag') {
    response = resPond.content.run(Tagstime.js);
    RichEmbed.channel.send(response);
    }       
    if (cmd === 'clans') {
        response;
        bin.content(response)
        RichEmbed.channel.send(response, 'Community Clans');
    }    
    if (cmd === 'joinClan') {
        response = run('./clan_application.js');
        RichEmbed.channel.send(response, 'Initializing...');
    }
    if (cmd === 'joinComm') {
        response = run('./comm_application.js');
        RichEmbed.channel.send(response, 'Initializing...');
    }
    if (cmd === 'bunker-code') {
        response = bunker-codes.fetch(bunker-code, B_date);
        RichEmbed.channel.send(response, '🔥Current ☣️Bunker☣️ Code: 😍${bunker_code.B_date}😍 ${date.time}');
    }
    if (cmd === 'ticKet') {
        response = request.content.MemberInfo(MemberInfo.args('Clan_Role, Clan_Role, Tag_T'))
        request()
        .content(Clan_Role, Tag_T, Member_Role)
        .date(UTC);
        RichEmbed.channel.send(response, 'Current Records');
    }else if (ticKet === [0]) {
        RichEmbed.channel.send('You Have no TicKets recorded ${run: server.TAGS;}');
    }

})
client.login(process.env.token)