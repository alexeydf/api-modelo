const express = require('express');
const app = express();
const cors = require('cors');
const modelo = require('./routes/modelo');
require('dotenv').config();

app.use(express.json());
app.use(cors());

app.use('/', modelo);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server ON -> PORT: ${PORT}`));

module.exports = app;