"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const PORT = 3000;
const HOST = "localhost";
app.use(express.static('./'));
app.get('/', (req, res) => {
    res.status(200).send('Hello, World!');
});
app.get('/home', (req, res) => {
    res.sendFile('/index.html');
});
app.listen(PORT, () => {
    console.log(`WEBD6201 listening at http://${HOST}:${PORT}`);
});
//# sourceMappingURL=index.js.map