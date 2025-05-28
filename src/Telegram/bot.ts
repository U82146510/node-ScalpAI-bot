import { Bot } from 'grammy';
import dotnev from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotnev.config({
    path:path.resolve(__dirname,'../../.env')
});

const token:string|undefined = process.env.bot_token;
if(!token){
    throw new Error('missing token');
}

export const bot = new Bot(token);

bot.command('start',(ctx)=>{
    ctx.reply(`Welcome to ScalpAI 💹 Ready to trade smart?`);
});