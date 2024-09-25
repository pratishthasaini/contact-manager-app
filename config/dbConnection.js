const mongoose = require('mongoose');
const connectDb = async() => {
    try {
        const con = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("connection succesfull",
            con.connection.host,
            con.connection.name  
        );
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
module.exports = connectDb;
