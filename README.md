# Telegram Spammer
Ini adalah program untuk mengirim pesan ke pengguna lain melaui bot telegram. Untuk membuat botnya klik [disini](https://www.directual.com/lesson-library/how-to-create-a-telegram-bot).

## Tools yang diperlukan
-  [Node.js](https://nodejs.org/) - Untuk menjalankan kode program ini.
-  Bot telegram
  
## Cara Penggunaan
1. **Jalankan semua perintah ini**
 ```bash
   git clone  https://github.com/annalitcz/telegram-spammer
   cd telegram-spammer
   npm install
```
2. **Ubah Token bot & chatId**
```js
const token = "<token bot anda>";

const chatId = "<token ChatId target>";
//token chatId dapat diperoleh dengan mengirim pesan ke bot @userinfobot di Telegram.
```

3. **Ubah jumlah pesan yang akan dikirim** 
```js
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
```
4. **Jalankan Program** 
```bash
node botSpam.js
```