const express = require('express')
const bodyParser = require('body-parser')
const { default: mongoose } = require('mongoose')
const app = express()
const Book = require('./books/Book.js')
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/librarian').then(()=>{
    console.log("Connected to DB");
})

// app.get('/', function(req,res){
//     res.send('Welcome')
// })

app.get('/', async(req,res)=>{
    let list =  await Book.find()
    res.send('list')
})

app.post('/', async function(req,res){
    try {
        let book = Book(req.body)
        await book.save()
        // console.log(req.body)
        res.send(book)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
})

