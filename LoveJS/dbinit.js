const sqlite3 = require('sqlite3').verbose();
// create database
const db = new sqlite3.Database('db.db', (err) => {
    if (err) return console.error(err.message);
    console.log('Connected to the SQlite database.');
    db.serialize(() => {
        db.run(`CREATE TABLE passwords(password TEXT PRIMARY KEY NOT NULL)`,
            (e) => { if (e != null) console.log(e); }
        );
        db.run('INSERT INTO passwords VALUES(?)',
            [process.argv[2]],
            (e) => { if (e != null) console.log(e); }
        );
        db.run(`
            CREATE TABLE girls(
                id INTEGER PRIMARY KEY NOT NULL,
                name TEXT NOT NULL,
                comment TEXT NOT NULL,
                description TEXT NOT NULL,
                imgPath TEXT NOT NULL
        )`, (e) => {
                if (e != null) console.log(e);
                db.close((err) => {
                    if (err) return console.error(err.message);
                    console.log('Close the database connection.');
                });
            });
    });
});