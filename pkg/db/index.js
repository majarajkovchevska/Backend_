const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: `${__dirname}/../../config.env` });

const DB = process.env.DATABASE.replace("<password>", process.env.DATABASE_PASS);

exports.init = async () => {
    try {
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("successfuly conected to DATABASE")
    } catch (err) {
        console.log(err)
    }
}