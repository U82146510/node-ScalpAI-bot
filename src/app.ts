import {bot} from './Telegram/bot.ts';
import {logger} from './logger/logger.ts';

async function start():Promise<void>{
    try {
        logger.info('Bot On');
        await bot.start();
    } catch (error) {
        console.error(error);
    }
};

start();