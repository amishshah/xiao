const Command = require('../../structures/Command');
const { letterTrans } = require('custom-translate');
const dictionary = require('../../assets/json/emojify');

module.exports = class EmojifyCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'emojify',
			aliases: ['regional-indicator'],
			group: 'text-edit',
			memberName: 'emojify',
			description: 'Converts text to emoji form.',
			args: [
				{
					key: 'text',
					prompt: 'What text would you like to convert to emoji?',
					type: 'string',
					validate: text => {
						if (letterTrans(text.toLowerCase(), dictionary, ' ').length < 2000) return true;
						return 'Your text is too long.';
					},
					parse: text => text.toLowerCase()
				}
			]
		});
	}

	run(msg, args) {
		const { text } = args;
		return msg.say(letterTrans(text, dictionary, ' '));
	}
};