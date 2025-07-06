const app = require('./app');
const serverless = require('serverless-http');
const connectDB = require('./config/db.config');

connectDB();

module.exports = app;
module.exports.handler = serverless(app);
