const dotenv = require("dotenv");
// import dotenv from "dotenv";
dotenv.config();

// module.exports = { PORT: process.env.PORT };

const ServerConfig = {
    PORT: process.env.PORT,
    GMAIL_PASS: process.env.GMAIL_PASS,
    GMAIL_EMAIL: process.env.GMAIL_EMAIL
};

module.exports = ServerConfig;
