const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_URL;

mongoose.connect(mongo_url)
    .then(() => {
        console.log('MongoDB Connected...')
    }).catch((err) => {
        console.log('Error while MongoDB connecting ...', err);
    })