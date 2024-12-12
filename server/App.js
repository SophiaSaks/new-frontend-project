const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    Origin: '*',
    optionsSuccessStatus: 200,
}
))

app.get('/api', (req, res) => {
    //
} )

app.listen(3000);