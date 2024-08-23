require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

const API_URL = process.env.API_URL;
const COOKIE = process.env.COOKIE;

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                Cookie: COOKIE
            }
        });
        const data = response.data;
        res.render('index', { data });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
