const App = require('./app');

require('dotenv').config();

const { PORT } = process.env;

App.listen(PORT, console.log(`Running on port ${PORT}`));
