require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const {connect} = require("./src/configs/database");
const apiRouter = require("./src/routes/routes");
const PORT = process.env.PORT;

const app = express();


app.use(bodyParser.urlencoded({extended : false}))
app.use("/api", apiRouter);


app.listen(PORT,async () => {
    await connect();
    console.log('Mongodb connected successfully...')
    console.log('server started successfully...');
    /* const seat = await Booking.findOne({status : 'Empty'});
    console.log(seat); */
    //bookingServiece.updateSeat(6);
})