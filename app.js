const express = require("express");
const app = express();
const connected = require("./connection.js");

connected
.then(()=>{
    console.log("connected!");
    const server = app.listen(8080, () => console.log("listening"));
})
.catch((e) => console.log(e));

app.use(express.json()); 
const router = require('./routes/index.js');
app.use('/api/v1',router);


app.get('/',(req,res)=>{
    res.send("testing!");
});
