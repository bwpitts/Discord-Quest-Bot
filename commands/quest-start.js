const quests = require('../quests.json');
module.exports = {
	name: 'quest-start',
	description: 'This will start a quest for the server.',
	aliases: ['quest'],
	execute(message) {
		let quest = quests['lumber-quest']
		let questTitle = quest.title;
		let questDescription = quest.request;
		let rewardText = "We will reward " + quest.reward + " per " + quest.item;
		message.channel.send(`**${questTitle}**`);
		message.channel.send(`${questDescription}`);
		message.channel.send(rewardText);
	},
};