'use strict';

const fs = require('fs');

var client = undefined;

exports.init = function(c) {
	client = c;
	client.on('message', onMessageHandler);
}

function onMessageHandler(target, context, msg, self) {

  // ignore messages from other bots
  if (self) return;


  const commName = msg.trim().toLowerCase().split()[0];

  // switch to find command
  switch (commName) {

    // basic chat commands
    case '!hi':
        client.say(target, 'yo Kapp');
        break;
	case '!skyhii':
        client.say(target, 'You don\'t question the Sky. NEVER question the Sky.');
        break;
	case '!sheep':
        client.say(target, 'Love is stored in the sheep <3');
        break;
    case '!gautam':
        client.say(target, 'Hype Conductor thirsting for channel points!');
        break;
    case '!amerikia':
        client.say(target, 'Trust me, I work at Taco Bell :taco:');
        break;
    case '!reb':
        client.say(target, 'he\'s just ok');
        break;
    case '!azrael':
        client.say(target, 'Death has come to claim your soul.');
        break;
    case '!aeria':
        client.say(target, 'The best sis there is - reb');
        break;
    case '!juego':
        client.say(target, '/me @' + context.username + ' is here.... but not here..... if that make sense...');
        break;
    case '!cheese':
        client.say(target, 'Ah yes, the energy of the future.');
        break;
	case '!jessi':
		client.say(target, 'Jessi #1 lurker!');
		break;
    case '!ram':
        client.say(target, 'As a certain Ram once said, everyone here is gaming <3');
        break;
    case '!cactus':
        client.say(target, 'Prickly, but sweet :)');
        break;
    case '!raid':
        client.say(target, 'MEDII RAID mrmedi6Pog mrmedi6Hype MEDII RAID mrmedi6Pog mrmedi6Hype MEDII RAID mrmedi6Pog mrmedi6Hype MEDII RAID mrmedi6Pog mrmedi6Hype MEDII RAID mrmedi6Pog mrmedi6Hype MEDII RAID mrmedi6Pog mrmedi6Hype MEDII RAID mrmedi6Pog mrmedi6Hype');
		break;
	case '!hype':
		client.say(target, 'mrmedi6Hype mrmedi6Hype h y p e!!!!! mrmedi6Hype mrmedi6Hype');
		break;
    case '!himbo':
        client.say(target, '5Head H I M B O AND MEDII WAS HIS NAME-O 5Head');
        break;
    case '!antiparty':
        client.say(target, 'mrmedi6Sad mrmedi6Sad S A D mrmedi6Sad mrmedi6Sad :balloon:');
        break;
    case '!anigma':
        client.say(target, 'his luck is b i g his brain is not');
		break;
    case '!mooshi':
        client.say(target, 'I\'m so proud of you!');
        break;
    case '!purlmotto':
        client.say(target, 'GOODNIGHT! stay safe stay awesome stay epic stay cool stay wonderful stay amazing stay wholesome and, most importantly, STAY FRIGIN SAFE! GOODNIGHT!');
        break;
    case '!brainfood':
        client.say(target, 'Brainfood47 is canonically better than MrMedii.');
        break;
    }
}
