import TelegramBot from "node-telegram-bot-api";

const token = "<token bot anda>";

const bot = new TelegramBot(token, { polling: true });

async function sendMsg(chatId, message) {
  try {
    let i = 0;
    const maxAttempts = 10; // Ubah sesuai kebutuhan Anda
    while (i < maxAttempts) {
      await bot.sendMessage(chatId, message);
      console.log(`Pesan berhasil dikirim ke ${chatId} sebanyak ${i + 1} kali`);
      i++;
      await sleep(300); // Jeda 300 milidetik antara pengiriman
    }
  } catch (error) {
    console.error(`Gagal mengirim pesan: ${error}`);
  } finally {
    process.exit(0);
  }
}

// Masukkan ID yang akan dikirimkan pesan (dapat diperoleh dengan mengirim pesan ke bot @userinfobot di Telegram)
const chatId = "<token ChatId target>";

// Isi pesan di sini
const msg = "Halo, Ini pesan dari bot Telegram!";

sendMsg(chatId, msg);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
