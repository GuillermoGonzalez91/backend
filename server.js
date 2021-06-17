const express = require('express')

const app = express()

app.use(express.json())

// routes 
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})

// server running 
app.listen(3000, ()=>{
    console.log('server running on port')
})