import express from 'express';
import path from 'path';

const app = express();
const port = 4000;

app.get('/ab?cd', (req, res) => {
    res.send('product info')
});