require('dotenv').config();

const {
    MONGO_URI,
    JWT_SECRET_KEY
} = process.env;

const requiredCredentials = {
    MONGO_URI,
    JWT_SECRET_KEY
};

for (const [key, value] of Object.entries(requiredCredentials)) {
    if (!value) {
        console.error(`❌ Missing required environment variable: ${key}`);
        process.exit(1);
    }
}

module.exports = {
    MONGO_URI,
    JWT_SECRET_KEY
};
