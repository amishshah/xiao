const Command = require('../../structures/Command');

module.exports = class PrimeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'prime',
			aliases: ['is-prime'],
			group: 'number-edit',
			memberName: 'prime',
			description: 'Determines if a number is a prime number.',
			args: [
				{
					key: 'number',
					prompt: 'What number do you want to check?',
					type: 'integer',
					max: Number.MAX_SAFE_INTEGER
				}
			]
		});
	}

	run(msg, { number }) {
		return msg.reply(`${number} is${this.isPrime(number) ? '' : ' not'} a prime number.`);
	}

	isPrime(number) {
		if (number < 2) return false;
		for (let i = 2; i < number; i++) {
			if (number % i === 0) return false;
		}
		return true;
	}
};
