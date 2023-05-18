require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {connect} = require("./src/configs/database");
const apiRouter = require("./src/routes/routes");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use("/api", apiRouter);


app.listen( PORT, async () => {
    console.log(PORT);
    await connect();
    console.log('Mongodb connected successfully...')
    console.log('server started successfully...');
    /* const seat = await Booking.findOne({status : 'Empty'});
    console.log(seat); */
    //bookingServiece.updateSeat(6);
})