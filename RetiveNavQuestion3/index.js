const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/retivenav', async (req, res) => {

    await axios.get('https://codequiz.azurewebsites.net/',
    { withCredentials: true,
        headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
    }
    }
    ).then(resp => {

        console.log(resp.data);
    });
});


app.listen(4000, () => {
    console.log('Listening on 4000');
});
