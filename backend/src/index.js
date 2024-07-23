const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello User");
})


// add environment variable of the port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}....`));