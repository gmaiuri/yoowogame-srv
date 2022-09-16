// Importe dependencies.
const express = require('express');

// Create Express App.
const app = express();

// Define internal app vars.
const APP_TITLE   = "YoowoGame Server",
      APP_VER     = "Version 1.2.0-alpha",
      APP_PORT    = 8000;

const buildJSON = j => JSON.stringify(j, null, 3);

// GET / handler.
app.get('/', (req, res) => {
    res.send(buildJSON({
        code: 0,
        msg: APP_TITLE + " ready!"
    }));
});

// GET /status handler.
app.get('/status', (req, res) => {
    res.send(buildJSON({
        code: 0,
        msg: "READY"
    }));
});

// Run app.
app.listen(APP_PORT, () => {
    console.log(APP_TITLE);
    console.log(APP_VER);
    console.log("Running on port %d", APP_PORT)
});
