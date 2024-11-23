console.log("web serverni boshlash");

const express = require("express")
const res = require("express/lib/response");
const http = require("http"); 
const app = express();           //htttp core module
const fs = require("fs");                // file system - json file ni chaqirish uchun ishlatilyapti
const db = require("./server").db();      //MongoDB ni chaqirish 



// let user;
// fs.readFile("database/user.json", "utf8", (err, data) =>{
//     if (err){
//         console.log("ERROR:", err);
//     }else {
//         user = JSON.parse(data)
//     }
// });

//gitda nima commit qilganimizni :  git log --online orqali


//1.: Kirish code
app.use(express.static("public"));               // har qanday browserdan public folder ochi, faqat publicni kora oladi      => Middleware DP(design pattern)
app.use(express.json());                          // data json formatni objectga ogirib beradi                                => Middleware DD => rest api
app.use(express.urlencoded({ extended: true }));    // form inputga yozilgan datani express qabul qilishi uchun, true bolmasa ignore qiladi =>Middleware DP => Traditional Api 


//2: Sesion


//3: Views code
//traditional usul - BSSR(backend side  server rendering) - Backendda front end ni qurib olish
//EJS orqali backend ichida htmln yasaladi

app.set("set", "views");
app.set("view engine", "ejs");


//4. Routing code - addresslarni shaklllantirish  - end pointlar hisoblanadi

app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({ test: "success" });
});

app.get("/author", (req, res) => {
    res.render("author", { user: user });

});


app.get("/", function (req, res) {
    res.render("plans");

});

module.exports = app;


//APi request : traditional Api, Rest Api, Graphl APi
// Request Structure:  Header &Body
// api request methods: GET & POST