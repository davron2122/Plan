const http = require("http");
const mongodb = require("mongodb")


let db;
const connectionSTring = "mongodb+srv://davron2122:ngyp13cWszuGVckg@cluster0.ttbmp.mongodb.net/Plan";
mongodb.connect(connectionSTring,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        if (err) console.log("ERROR on connection MongoDB");
        else {
            console.log("MongoDB connection successed");

            module.exports =client;

            const app = require("./app");
            const server = http.createServer(app);
            let PORT = 3000;
            server.listen(PORT, function () {
                console.log(
                    `The server is running successfully port: ${PORT}, http://localhost:${PORT}`

                );

            });
        }
    }
);