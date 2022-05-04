const sql = require("mssql");
const sqlConfig = {
  user: "parisb",
  password: "Cocaine2083!!",
  database: "nodeSQLlearning",
  server: "nodeapppracticepbro1.database.windows.net",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: false, // change to true for local dev / self-signed certs
  },
};

async function connect() {
  try {
    // make sure that any items are correctly URL encoded in the connection string
    await sql.connect(sqlConfig);
    const result = await sql.query`INSERT INTO Persons (PersonID,	LastName,	FirstName,	Address,	City)
    VALUES ('1', 'Brooker', 'Paris', '3 Denman House', 'London')`;
    console.log(result);
    console.log("did it work");
  } catch (err) {
    console.log(err);
  }
}

connect();
