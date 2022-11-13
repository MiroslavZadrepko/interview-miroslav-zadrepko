const mongoose = require('mongoose');

const conrectToDB = async () => {

    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`DB connected ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    };

};

module.exports = conrectToDB;