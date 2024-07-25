const express = require('express');
const routes = require('./routes/routers');

// middleware
const app = express();
app.use(express.json());


// routes
app.get('/', (req, res) => {
    res.send("Hello User");
})
app.use('/api', routes);


// add environment variable of the port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}....`));