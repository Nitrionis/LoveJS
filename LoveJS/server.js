'use strict';
const path = require('path');
const express = require('express');

const app = express();

const fs = require('fs');

const sqlite3 = require('sqlite3').verbose();
let passwords = [];
// open database
const db = new sqlite3.Database('db.db', (err) => {
    if (err) return console.error(err.message);
    console.log('Connected to the SQlite database.');
    db.all('SELECT * FROM passwords', (err, rows) => {
        if (err != null) console.log(err);
        passwords = rows.map(v => v.password);
    });
});

const staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

app.use(express.json()); // to support JSON-encoded bodies

// Allows you to set port in the project properties.
app.set('port', 8080);

/* Data base girlsTable
   girlId: number
   name: string,
   comment: string,
   description: string,
   imgPath: string
 */

app.get('/girlInfo', (req, res) => {
    const id = GetGirlID(req.query.id);
    db.get('SELECT name, comment, description, imgPath FROM girls WHERE id = ?', [id], (e, r) => {
        if (e != null) console.log(e);
        console.log(r);
        res.send(r);
    });
});

app.post('/girlInfo', (req, res) => {
    res.end();
    // check the password
    const password = req.body.password;
    if (!passwords.includes(password)) return;
    // add or update girl in data base
    const id = GetGirlID(req.body.id);
    db.get('SELECT id FROM girls WHERE id = ?', [id], (e, r) => {
        if (e != null) console.log(e);
        if (r == undefined) {
            db.run('INSERT INTO girls VALUES(?, ?, ?, ?, ?)',
                [id, req.body.name, req.body.comment, req.body.description, req.body.imgPath],
                (e) => { if (e != null) console.log(e); }
            );
        } else {
            db.run('UPDATE girls SET name = ?, comment = ?, description = ?, imgPath = ? WHERE id = ?',
                [req.body.name, req.body.comment, req.body.description, req.body.imgPath, id],
                (e) => { if (e != null) console.log(e); }
            );
        }
    });
});

app.post('/deleteInfo', (req, res) => {
    res.end();
    // check the password
    const password = req.body.password;
    if (!passwords.includes(password)) return;
    // add or update girl in data base
    const id = GetGirlID(req.body.id);
    db.run('DELETE FROM girls WHERE id = ?', [id], (e) => { if (e != null) console.log(e); } );
});

app.post('/result', (req, res) => {
    res.end();
    let logData = new Date().toUTCString().concat('  ', req.connection.remoteAddress, '  ', JSON.stringify(req.body), '\n');
    console.log(logData);
    fs.writeFile('log.txt', logData, { flag: 'a' }, (e) => { if (e != null) console.log(e); });
});

var server = app.listen(app.get('port'), () => {
    console.log('listening');
});

function GetGirlID(str) {
    let num = parseInt('0x'.concat(str));
    if (isNaN(num))
        return 32000000;
    else
        return num;
}

process.on('SIGINT', Cleanup);
process.on('SIGTERM', Cleanup);

function Cleanup() { db.close(); }