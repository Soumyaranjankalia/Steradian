const express = require('express');
const connect = require('./configs/db')

const cors = require('cors');
const app = express();

app.use(express.json())
app.use(cors());


const company = require('./controller/companyRegister.controller');
app.use('/save', company)

app.listen(8080, async function(){
    try {
        await connect();
        console.log("listing 8080")
    } catch (error) {
        console.log(error)
    }
});