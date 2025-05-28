import {bot} from './Telegram/bot.ts';

async function start():Promise<void>{
    try {
        
        await bot.start();
    } catch (error) {
        console.error(error);
    }
};

start();