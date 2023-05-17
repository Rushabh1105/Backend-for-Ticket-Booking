const mongoose = require('mongoose');
const {seed} = require('../Seeder/seed');
const DB = process.env.DATABASE;

const connect =async () => {
    console.log("mongodb connection requested...");
    await mongoose.connect(DB);
    await seed();
    await mongoose.connection.close();
    try {
        return mongoose.connect(DB, {
            useUnifiedTopology : true,
            useNewUrlParser : true
        });
    } catch (error) {
        console.log(error);
        return error
    }
    
}

module.exports = {
    connect,
}