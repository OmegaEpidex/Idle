const { Client, Message, RichEmbed} = require('discord.js ');

module.exports = {
    name: "apply",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */
    run: async (client, message, args) => {
        const questions = [
            'What Server? [US, EU, or Asia] ',
            'Name Clan that took Tags?',
            'Name Clan that took Items',
            'List Crate Content, and Amounts',
            'Name the Clan Members Involved',
        ]

        let collectCounter = 0;
        let endCounter = 0;

        const filter = (m) => m.author.id === message.author.id;
        const channel = appStart.channel;
        const collector = channel.createMessageCollector(filter);

        collector.on('collect', () => {
            if(collectCounter < questions.length) {
                channel.send(questions[collectoCounter++]);
            }else {
                channel.send(questions[collectCounter++]);
                collector.stop('fulfilled');
            }
        })
        collector.on('end', (collected, reason) => {
            const appsChannel = client.channels.cache.get('838284435768999947');
            if (reason === 'fulfilled') {
                let index = 1;
                const mappedResponses = collected.map(msg)
                    response => '${index++}) ${questions[endCounter++]}\n-> ${msg.content}';
                }
        })
        .join('\n\n');
        appsChannel.send(ReQuest,
            new RichEmbed()
            .setMention('<@&846973530956103700>')
            .setThumbnail(client.user.AvatarURL)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setTitle('New Tag Time\:')
            .setDescription(mappedResponses =>
                shift
                .toUpperCase()
                .bold
                .font('Comic_SANS_MS')
                    )
                    .setColor(message.author.roleColor)
                    .setImage('./Images/Tag.jpg')
                    .setFooter(client.user.username, client.user.displayAvartarURL)
                    .setFooterImage(client.user.set.AvatarURL)
                    .setTimestamp(createdAt)
                    );
                },
            }