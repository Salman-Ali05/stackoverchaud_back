const app = require('./app');
app.use(require('cors')());

const connectDB = require('./config/db.config');

connectDB();