const express = require('express');
const app = express();


app.get('/', (req,res) => {
    res.send("hello world I am client ss");    
})

app.listen(80, () => {
    console.log('Client App is listening on port 80 in docker container')
})