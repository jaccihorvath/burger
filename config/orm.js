const connection = require('../config/connection.js');


// Helper function for SQL syntax
function printQuestionMarks(num) {
    let arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
};
  

  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    let arr = [];
  
    for (let key in ob) {
        let value = ob[key];
        
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
      return arr.toString();
};


let orm = {
    selectAll: function (table, cb) {
        let query = 'SELECT * FROM ' + table + ';';

        connection.query(query, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function (table, cols, vals, cb) {
        let query = 'INSERT INTO ' + table;

        query += ' (';
        query += cols.toString();
        query += ') ';
        query += 'VALUES (';
        query += printQuestionMarks(vals.length);
        query += ') ';

        console.log(query);

        connection.query(query, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function (table, objColVals, condition, cb) {
        let query = 'UPDATE ' + table;

        query += ' SET ';
        query += objToSql(objColVals);
        query += ' WHERE ';
        query += condition;

        console.log(query);
        connection.query(query, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;