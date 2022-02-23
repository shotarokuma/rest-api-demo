const express = require("express");
const app = express();
const connected = require("./connection.js");

connected
.then(()=>{
    console.log("connected!");
    const server = app.listen(8080, () => console.log("listening"));
})
.catch((e) => console.log(e));


app.get('/',(res,req)=>{
    res.send("testing!");
});
