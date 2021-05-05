const { response } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const FoodeModel = require('./models/Food')

const app = express()

app.use(express.json())

mongoose.connect('mongodb+srv://mranger:<password>@cluster0.bdbui.mongodb.net/food?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.get('/', async (require, response) => {
    const food = new FoodeModel({foodName: "Coke", daysSinceIAte: 3})

    try {
        await food.save()
        response.send("inserted data here")
    } catch (err) {
        console.log(err)        
    }
})

app.listen(3001, () => {
    console.log('server running on port 3001...')
})
