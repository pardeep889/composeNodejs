const express = require('express');
const app = express();

let os = require('os')
console.log(os.userInfo());


app.get('/', (req,res) => {
    res.send(" i am admin...");    
})

app.listen(8080, () => {
    console.log('Admin  App is listening on port 8080 in container');
})

