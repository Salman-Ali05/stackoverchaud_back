const app = require('./app');
const connectDB = require('./config/db.config');
const serverless = require('serverless-http');

connectDB();

module.exports = serverless(app);