const connection = require("./connection.js");

const orm = {
    selectAll: (table, cb) => {
        const query = "SELECT * FROM ??;";
        connection.query(query, [table], (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },
    insertOne: (table, col, val, cb) =>{
        const query = "INSERT INTO ?? (??) VALUES (?)"
        connection.query(query, [table, col, val], (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },
    updateOne: (table, colVal, id, cb) =>{
        const query = "UPDATE ?? SET ?? = true WHERE id = ?"
        connection.query(query, [table, colVal, id, colVal], (err,data) =>{
            if (err) throw err;
            cb(data);
        })
    }
}
module.exports = orm;