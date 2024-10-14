const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');

// Serve the pair.html file
app.use(express.static('public'));

const client = new Client();

client.on('qr', (qr) => {
    // QR code එක save කරනවා pair.js එක තුල HTML වලින් ප්‍රදර්ශනය කරන්න
    fs.writeFileSync('./public/qr.txt', qr);
    console.log('QR code generated. Visit http://localhost:3000/pair.html');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('WhatsApp Bot is ready!');
});

client.on('message', message => {
    console.log(message.body);
    if (message.body === 'Hello') {
        message.reply('Hello! How can I help you?');
    }
});

client.initialize();

// Server running on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
