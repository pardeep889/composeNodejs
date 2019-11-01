const express = require('express');
const app = express();


app.get('/', (req,res) => {
    res.send("hello world i am admin...");    
})

app.listen(80, () => {
    console.log('Admin App is listening on port 80 in container')
})

