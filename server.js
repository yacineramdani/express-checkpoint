const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());


const activateTime = (req, res, next) => {
    let t = new Date().getHours();
    let d = new Date().getDay();
    console.log(d);
    if((t < 9 || t > 16) && (d == 0 || d == 6 )){
        
        res.SendFile(path.join(__dirname + "/public/Closed.html"))
    }else{
        res.sendFile(path.join(__dirname + "/public/Home.html"))
        
    }
    next()
}
app.use(express.static(__dirname + "/public"))
app.use(activateTime)

app.get("/", activateTime, (req, res) =>{
    console.log("activateTime");
})


// app.get("/OurServices", function (req, res) {
//     res.sendFile(path.join(__dirname, "OurServices.html"))
// })
// app.get("/ContactUs", function (req, res) {
//     res.sendFile(path.join(__dirname, "ContactUs.html"))
// })
// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "Home.html"))
// })
// app.get("/Home", function (req, res) {
//     res.sendFile(path.join(__dirname, "Home.html"))
// })
app.listen(3000);



 