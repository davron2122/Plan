console.log("Jack Ma maslaxatlari");
const list = [
    "Yaxshi talaba boling", //0-20
    "Togri boshliq tanlang va koproq xato qiling", //20-3-
    "Ozingiz uchun ishlashni boshlang", //40-50
    "Siz kuchli bolgan narsalarmi qiling ", //50-60
    "Yoshlarga investitsya qiling", //50-60
    "Endi dam oling, foydasi yoq", //60
];

function maslaxatBering(a, callback) {
    if (typeof a !== "number") callback("insert a number", null);

    else if (a <= 20) callback(null, list[0]);
    else if (a > 20 && a <= 30) callback(null, list[1]);
    else if (a > 30 && a <= 40) callback(null, list[2]);
    else if (a > 40 && a <= 50) callback(null, list[3]);
    else if (a > 50 && a <= 60) callback(null, list[4]);
    else {
        setTimeout(function () {
            callback(null, list[5]);
        }, 5000);
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
