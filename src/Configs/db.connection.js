const mongoose = require("mongoose");
require("dotenv/config");

// const connect = mongoose
//     .connect(process.env.MONGO_URI, { useNewUrlParser: true })
//     .then((result) => {
//         console.log(`Database connected: ${result.connection.host}`);
//     })
//     .catch((err) => {
//         console.log(`Database connection error: ${err}`);
//     });

const connect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
        console.log(`Database connected to: ${conn.connection.host}`);
    } catch (err) {
        console.log(`Database connection error: ${err}`);
    }
};

module.exports = connect;
