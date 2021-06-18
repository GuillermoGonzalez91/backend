const express = require('express')

const app = express()

require('./db');
const routes = require('./routes')


app.use(express.json())

// routes 
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})

app.use('/posts', routes)


// server running 
app.listen(3000, ()=>{
    console.log('server running on port', 3000)
})

