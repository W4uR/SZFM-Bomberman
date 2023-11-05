const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        queryDb: (query) => {
          return queryDB(query, config);
        }
      })
    },
    "env": {
      "db":{ 
        "host": "localhost",
        "user": "root",
        "password": "",
        "database": "bomberman"
      }
    }
  },
  "watchForFileChanges": false
});

const mysql = require("mysql");
function queryDB(query, config) {
  const connection = mysql.createConnection(config.env.db);
  connection.connect();
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        connection.end();
        return resolve(results);
      }
    });
  });
}
