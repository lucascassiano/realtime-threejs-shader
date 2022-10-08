
const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static('public'))
app.use(express.static('files'))
app.use(express.static('node_modules'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.use('/static', express.static(path.join(__dirname, 'public')))