import express from 'express'
const app = express()

app.get('/portfolio', (req, res) => {
    res.send("Portfolio get");
})

app.post('/portfolio', (req, res) => {
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







app.put('/')

app.listen(3000, () => {
    console.log('Listening on local port 3000')
});