const express = require("express");
const app = express();

app.listen("8080",(_req,_res)=>{
    console.log("server is running on port 8080");
});