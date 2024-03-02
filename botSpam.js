import TelegramBot from 'node-telegram-bot-api';
import chalk from "chalk"

const token = "6387957303:AAHxUEmLBnk3E6-E-PfAQ5MKRIj2-64_NWo"
const chatId = "6857759848"
const msg = "dasar badut 🤡🤡🤡😜😜🥵🥵"

const bot = new TelegramBot(token, {polling: true});

async function sendMsg(chatId, message){
  try {
       let i = 0;
       while (true){
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