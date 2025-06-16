require('dotenv').config()
const express = require('express') // JUST IMPORT METHOD 

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("hiteshdotcom")
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please Login at Chai andCode </h1>')
})

app.get("/youtube",(req,res)=>{
    res.send('<h2>Chai aur Code</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
