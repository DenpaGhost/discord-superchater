require('dotenv').config();
module.exports = {
    env: {
        DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
        DISCORD_OAUTH_CALLBACK_URI: process.env.DISCORD_OAUTH_CALLBACK_URI
    }
}