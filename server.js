const express = require('express');
const secure = require('ssl-express-www');

const app = express();

app.use(secure);

const port = $PORT;
app.listen(port, () => console.log('Server listening.'));
