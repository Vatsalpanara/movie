const express = require("express")
const port = 3000;
const path = require("path");
const db = require("./config/db")

const app = express();

app.set("view engine","ejs");
app.use(express.urlencoded());
app.use("/",require("./routes/route"))
app.use("/uploads",express.static(path.join(__dirname,"uploads")));


app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started at :- " + port);    
})