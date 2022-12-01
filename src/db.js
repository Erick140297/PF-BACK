const { connect } = require("mongoose");

// If the MongoDB service doesn't not start. Open a terminal and run mongod

const db = async () => {
  const conn = await connect("mongodb://localhost:27017/dbPF");
  console.log("DB connected to", conn.connection.name);
};

module.exports = db;