"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();
const PORT = 3000;
const HOST = "localhost";
app.use(express.static(path.join(__dirname, '/Client')));
app.use(express.static(path.join(__dirname, '/node_modules')));
app.use(express.static(path.join(__dirname, '/Views')));
function displaySPA(res) {
    fs.readFile(__dirname + "/index.html", (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
}
app.get('/', (req, res) => {
    displaySPA(res);
});
app.get('/home', (req, res) => {
    displaySPA(res);
});
app.get('/about', (req, res) => {
    displaySPA(res);
});
app.get('/services', (req, res) => {
    displaySPA(res);
});
app.get('/contact', (req, res) => {
    displaySPA(res);
});
app.get('/contact-list', (req, res) => {
    displaySPA(res);
});
app.get('/projects', (req, res) => {
    displaySPA(res);
});
app.get('/register', (req, res) => {
    displaySPA(res);
});
app.get('/login', (req, res) => {
    displaySPA(res);
});
app.get('/edit', (req, res) => {
    displaySPA(res);
});
app.get('*', (req, res) => {
    displaySPA(res);
});
app.listen(PORT, () => {
    console.log(`WEBD6201 listening at http://${HOST}:${PORT}`);
});
//# sourceMappingURL=index.js.map