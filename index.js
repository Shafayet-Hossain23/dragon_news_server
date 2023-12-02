const express = require('express')
const app = express()
const port = process.env.port || 5000
var cors = require('cors')


const categories = require('./data/categories.json')
// console.log(categories)
const news = require('./data/News.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send(news)
})
app.get('/news-categories', (req, res) => {
    res.send(categories)
})
app.get('/news/:id', (req, res) => {
    // console.log(req.params.id)
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id
    if (id === '08') {
        res.send(news)
    }
    else {
        const selectedCategory = news.filter(c => c.category_id === id);
        res.send(selectedCategory)
    }

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})