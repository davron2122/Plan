console.log("web serverni boshlash");

const express = require("express")
const res = require("express/lib/response");
const http = require("http");
const app = express();                    //htttp core module
const fs = require("fs"); // file system - json file ni chaqirish uchun ishlatilyapti
const db = require("./server").db();      //calling the MongoDB 
const mongodb = require("mongodb");
const axios = require('axios');


let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data)
    }
});

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
    console.log("user entered/create-item");
    //STEP1. BACKEND GA KELDIK
    console.log(req.body);
    const new_reja = req.body.reja;
    //STEP2. BACKEND => MONGODB
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        //STEP3. MONGODB => BACKEND

        //STEP4. DB DAGI DATANI FRONT ENDGA JONATAMIZ
        console.log(data.ops);
        res.json(data.ops[0]);


    });

});

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne({ _id: new mongodb.ObjectId(id) }, function (err, data) {
        res.json({ state: "success" })

    })
});

app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate(
        { _id: new mongodb.ObjectId(data.id) }, // filter = search
        { $set: { reja: data.new_input } },      //changing by set
        function (err, data) {
            res.json({ state: "success" });
        });
});

app.post("/delete-all", (req, res) => {
    if (req.body.delete_all) {
        db.collection("plans").deleteMany(function () {
            res.json({ state: "all plans are deleted" });
        });

    }
});


app.get("/", function (req, res) {
    console.log("user entered /");
    //STEP1. BACKEND GA KELDIK
    db.collection("plans")
        .find()
        .toArray((err, data) => {
            //STEP2. BACKEND => MONGODB
            if (err) {
                console.log(err); //STEP3. MONGODB => BACKEND
                console.log(data);
            } else {


                res.render("plans", { items: data });  //BSSR = backend da frnt end qurish
            }
        });
});

module.exports = app;


//APi request : traditional Api, Rest Api, Graphl APi
// Request Structure:  Header &Body
// api request methods: GET & POST





//======================================

//Deploy
/*



*/