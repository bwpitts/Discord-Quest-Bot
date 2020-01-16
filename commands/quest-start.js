const quests = require('../quests.json');
module.exports = {
	name: 'quest-start',
	description: 'This will start a quest for the server.',
	aliases: ['quest'],
	execute(message, args) {
		currentQuest = args;
		message.channel.send(args);
	},
};