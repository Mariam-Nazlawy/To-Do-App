const connectDB = require('./db/connect');
const express = require('express');
const routes = require('./routes/routers');
const cors = require('cors');
require('dotenv').config({path: '../.env'})


// middleware
const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5000' // Allow only your frontend server
}));


// routes
app.get('/', (req, res) => {
    res.send("Hello User");
})
app.use('/api', routes);


// add environment variable of the port
const port = process.env.PORT;


// connect to the database then startup the server
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`Listening on port ${port}....`));
    }
    catch (error) {
        console.log(error)
        process.exit(1)
       
    }
}

start()