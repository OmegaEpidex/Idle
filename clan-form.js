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
            "What\'s Your Business Level?",
            'What Region is Your Game Server? [America, Europe, or Asia] ',
            'Would you Participate in Voice Channels? [PvP, Boss, General]',
            'What is Your Age Range? [17-21, 22-26, 27-31, 32-40+]',
            'What is your In-Game Name and Player Number for Invite?',
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
                .setThumbnail()
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('New Application')
                .setDescription(mappedResponses)
                .setColor(RANDOM)
                .setImage()
                .setFooter()
                .setFooterImage()
                .setTimestamp()
                );
            },
        };