const connectDB = require('./db/connect');
const express = require('express');
const routes = require('./routes/routers');
const cors = require('cors');
require('dotenv').config({path: '../.env'})


// middleware
const app = express();
app.use(express.json());
app.use(cors());


// routes
app.get('/', (req, res) => {
    res.send("Hello User");
})
app.use('/api', routes);


// add environment variable of the port
const port = process.env.PORT || 3000

console.log(process.env.MONGO_URI)
// connect to the database then startup the server
const start = async () => {
    const MONGO_URI = process.env.MONGO_URI
    try {
        await connectDB(MONGO_URI)
        app.listen(port, () => console.log(`Listening on port ${port}....`));
    }
    catch (error) {
        console.log(error)
        process.exit(1)
       
    }
}

start()