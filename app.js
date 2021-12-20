import express from 'express';

const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Bingo!')
})

app.listen(port, () => {
    console.log(`This app listening at http://localhost:${port}`)
})