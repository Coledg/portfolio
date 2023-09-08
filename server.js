import express from 'express'
import cors from 'cors'
import { getAllPhotos, addNewPhoto } from './utils/database.mjs'
const app = express()
app.use(cors())
app.use(express.json());

app.get('/portfolio', async (req, res) => {
    const photos = await getAllPhotos();
    res.send({ photos });
})

app.post('/portfolio', async (req, res) => {
    await addNewPhoto(req.body.details);
    res.send("Portfolio post");
})

app.get('/portfolio/new', (req, res) => {
    res.send("Portfolio new form");
})

app.get('/portfolio/:id', (req, res) => {
    res.send("View item");
})

app.get('/portfolio/:id/edit', (req, res) => {
    res.send("Portfolio edit form");
})

app.put('/portfolio/:id', (req, res) => {
    res.send("Portfolio patch req");
})

app.delete('/portfolio/:id', (req, res) => {
    res.send("Deleteing item")
})

app.listen(3000, () => {
    console.log('Listening on local port 3000')
});