require('dotenv').config();

const {
    PORT,
    MONGODB_URI,
    JWT_SECRET_KEY
} = process.env;

const requiredCredentials = {
    MONGODB_URI,
    JWT_SECRET_KEY
};

for (const [key, value] of Object.entries(requiredCredentials)) {
    if (!value) {
        console.error(`❌ Missing required environment variable: ${key}`);
        process.exit(1);
    }
}

module.exports = {
    PORT: PORT || 5000,
    MONGODB_URI,
    JWT_SECRET_KEY
};
