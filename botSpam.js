import TelegramBot from 'node-telegram-bot-api';
import chalk from "chalk"

const token = "6744613512:AAHCfqB-7vNmzIre8UR-RCFOdiPzpEXo1kA"
const chatId = "1261786452"
const msg = "dasar badut 🤡🤡🤡😜😜🥵🥵"

const bot = new TelegramBot(token, {polling: true});

async function sendMsg(chatId, message){
  try {
       let i = 0;
       while (i<= 10){
       await bot.sendMessage(chatId, message);
         i++
       console.log(chalk.green(`successfully sent to ${chatId} ${i} times`));
       }
  } catch (error) {
       console.error(chalk.red(`message failed to send, ${error} s`));
       refresh()
  }
}

function refresh(){
  console.log(chalk.yellow("Repeating sending message..."));
  setTimeout(() => {
    sendMsg(chatId, msg);
  }, 10000); 
}

sendMsg(chatId, msg)