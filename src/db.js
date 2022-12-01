const { connect } = require("mongoose");

// If the MongoDB service doesn't not start. Open a terminal and run mongod

const db = async () => {
  // const conn = await connect("mongodb://localhost:27017/dbPF");
  const conn = await connect(`mongodb+srv://riquiamado:c220471A@cluster0.56kysuf.mongodb.net/?retryWrites=true&w=majority`);
  
  console.log("DB connected to", conn.connection.name);
};

module.exports = db;