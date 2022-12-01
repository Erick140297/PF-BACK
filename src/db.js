const { connect } = require("mongoose");
require('dotenv').config()

const { URL } = process.env

// If the MongoDB service doesn't not start. Open a terminal and run mongod

const db = async () => {
  const conn = await connect(URL);
  console.log("DB connected to", conn.connection.name);
};

module.exports = db;