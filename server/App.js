const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    Origin: '*',
    optionsSuccessStatus: 200,
}
))

app.get('/api', (req, res) => {
    return("5934d7c41c30f5c76770d6a905d6848e");
} )

app.listen(3000);