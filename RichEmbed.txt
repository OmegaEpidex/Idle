module.exports = { 
    run: async (client, message) => {
        embed = new RichEmbed()
        .setIcon(client.user.displayAvatarURL)
        .setColor(roleColor)
        .setDescription(args.slice(1).join(''))
        .setTimeStamp()
        .setImage(client.user.AvatarURL)
        .setAuthor(message.author.name, message.author.displayAvatarURL)
        .setFooter(client.user.username, client.user.displayAvartarURL)
        message.channel.send(embed);

    }
}