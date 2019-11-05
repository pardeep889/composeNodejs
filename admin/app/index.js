const express = require('express');
const app = express();
const  bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());


let os = require('os')
const osinfo = os.userInfo();
console.log("Username:================>",osinfo.username);
console.log("PATH:======>>>>>>", __dirname);
app.get('/', (req,res) => {
    res.send(" i am admin...");    
})

app.listen(8080, () => {
    console.log('Admin  App is listening on port 8080 in container');
})

