console.log("Jack Ma maslaxatlari");
const list = [
    "Yaxshi talaba boling", //0-20
    "Togri boshliq tanlang va koproq xato qiling", //20-30
    "Ozingiz uchun ishlashni boshlang", //40-50
    "Siz kuchli bolgan narsalarmi qiling ", //50-60
    "Yoshlarga investitsya qiling", //50-60
    "Endi dam oling, foydasi yoq", //60
];

//Synchronous functions
//Callback Function
function maslaxatBering(a, callback) {
    if (typeof a !== "number") callback ("insert a number", null);

    else if (a <= 20) callback (null, list[0]);
    else if (a > 20 && a <= 30) callback (null, list[1]);
    else if (a > 30 && a <= 40) callback (null, list[2]);
    else if (a > 40 && a <= 50) callback (null, list[3]);
    else if (a > 50 && a <= 60) callback (null, list[4]);
    else {
            setInterval(() => {                          
                callback(null, list[5]);
            }, 1000);
        }
    }


    console.log("passed here 0 ");
    maslaxatBering( 65, (err, data) => {
        if (err) console.log("ERROR:", err);
        else {
            console.log("javob:", data);
        }
    });
    console.log("passed here 1");




//Asynchrnous fuction define qismda ishlatilyapti


//ASYNC function
// async function maslaxatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number");

//     else if (a <= 20) return (list[0]);
//     else if (a > 20 && a <= 30) return (list[1]);
//     else if (a > 30 && a <= 40) return (list[2]);
//     else if (a > 40 && a <= 50) return (list[3]);
//     else if (a > 50 && a <= 60) return (list[4]);
//     else {
//         return new Promise((resolve, reject) => {     // promise - array map uchun uchun ishlatiladi : setTimeout va setIntervalTime kop ishlatildi
//             setTimeout(() => {                        // resolve = return, reject = throw new Error ga teng bolayapti
//                 resolve(list[5]);
//             }, 5000);
//         });
//     }

// }


//Call via then/catch:

//     console.log("passed here 0 ");
//     maslaxatBering( 65, (err, data) => {
//         if (err) console.log("ERROR:", err);
//         else {
//             console.log("javob:", data);
//         }
//     });
//     console.log("passed here 1");


//Synchronous toliq ishga tushib bolgach, nodejs asynchronous natija bilan shug'ullanadi   
// Aynchronous single thread band qilmaydi, operatsiyalarni event loop orqali thread poolga tashlaydi 


// //call qism da then/catch method dan foydalanilyapti




// console.log("passed here 0 ");
// maslaxatBering(20)
//     .then((data) => {
//         console.log("javob:", data);
//     })
//     .catch((err) => {
//         console.log("Error:", err);
//     });
// console.log("passed here 1");



//Call qismda - asyn/await orqali yaratyappiz 
// async function run() {
//     let javob = await maslaxatBering(20);
//     console.log(javob);

//     javob = await maslaxatBering(31);
//     console.log(javob);

//     javob = await maslaxatBering(41);
//     console.log(javob);
// }

// run();

