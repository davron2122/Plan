//TASK-D
/*
Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;
*/

function haveSameLetters(str1, str2) {
  const sortString = (str) => str.split("").sort().join("");
  return sortString(str1) === sortString(str2);
}
const result = haveSameLetters("mitgroup", "gmtiprou");
console.log("result:", result);

console.log("******");

const result2 = haveSameLetters("Nodjs", "isFun");
console.log("result2:", result2);
 






/*
TASK-C.

MITASK-C 

Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
*/

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   // Qoldiq metodini yaratish
//   qoldiq() {
//     const currentTime = new Date()
//     .toLocaleTimeString('en-GB', { hour12: false });
//     console.log(`Hozir ${currentTime}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`);
//   }

  
//   sotish(mahsulot, miqdor) {
//     if (mahsulot === 'non') {
//       this.non -= miqdor;
//     } else if (mahsulot === 'lagmon') {
//       this.lagmon -= miqdor;
//     } else if (mahsulot === 'cola') {
//       this.cola -= miqdor;
//     }
//     const currentTime = new Date().toLocaleTimeString('en-GB', { hour12: false });
//     console.log(`Sotish amalga oshirildi: ${miqdor}ta ${mahsulot} sotildi, hozir ${currentTime}da.`);
//   }

//   // Qabul method
//   qabul(mahsulot, miqdor) {
//     if (mahsulot === 'non') {
//       this.non += miqdor;
//     } else if (mahsulot === 'lagmon') {
//       this.lagmon += miqdor;
//     } else if (mahsulot === 'cola') {
//       this.cola += miqdor;
//     }
//     const currentTime = new Date().toLocaleTimeString('en-GB', { hour12: false });
//     console.log(`Qabul amalga oshirildi: ${miqdor}ta ${mahsulot} qabul qilindi, hozir ${currentTime}da.`);
//   }
// }

// // Misolni tekshirish:
// const shop = new Shop(4, 5, 2);
// shop.qoldiq(); // Boshlang'ich qoldiqni ko'rsatadi
// shop.sotish('non', 3); // 3ta non sotiladi
// shop.qabul('cola', 4); // 4ta cola qabul qilinadi
// shop.qoldiq(); // Yangi qoldiqni ko'rsatadi



/*
B-TASK: 

Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
*/


//solution: 


//-------------------------------------------------------------------------------------
// Task-A
//Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi so'zdan qatnashga sonini return qilishi kerak boladi.
//Masalan, countLetter ("e", "engineer") 3ni return qilsin.
//For loop dan foydalaning



// via Filter and Split method
/*
function countLetter(letter, element) {
  return element.split("").filter((ele) => ele === letter).length;
}
console.log(countLetter("e", "engineer"));


*/

//via Foreach method
/*
function countLetter(letter, element) {
  let count = 0;
  element.split("").forEach((ele) => {
    if (ele === letter) {
      count++;
    }
  });
  return count;
}
const result = countLetter("e", "employee");
console.log("result:", result);
*/

//--------------------------------------------------------------

// console.log("Jack Ma maslaxatlari");
// const list = [
//     "Yaxshi talaba boling", //0-20
//     "Togri boshliq tanlang va koproq xato qiling", //20-30
//     "Ozingiz uchun ishlashni boshlang", //40-50
//     "Siz kuchli bolgan narsalarmi qiling ", //50-60
//     "Yoshlarga investitsya qiling", //50-60
//     "Endi dam oling, foydasi yoq", //60
// ];

// //Synchronous functions
// //Callback Function
// function maslaxatBering(a, callback) {
//     if (typeof a !== "number") callback ("insert a number", null);

//     else if (a <= 20) callback (null, list[0]);
//     else if (a > 20 && a <= 30) callback (null, list[1]);
//     else if (a > 30 && a <= 40) callback (null, list[2]);
//     else if (a > 40 && a <= 50) callback (null, list[3]);
//     else if (a > 50 && a <= 60) callback (null, list[4]);
//     else {
//             setInterval(() => {
//                 callback(null, list[5]);
//             }, 1000);
//         }
//     }


//     console.log("passed here 0 ");
//     maslaxatBering( 65, (err, data) => {
//         if (err) console.log("ERROR:", err);
//         else {
//             console.log("javob:", data);
//         }
//     });
//     console.log("passed here 1");


//---------------------------------------------------------------

//Asynchrnous fuction define qismda ishlatilyapti


//ASYNC function
// async function maslaxatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number");

//     else if (a <= 20) return (list[0]);
//     else if (a > 20 && a <= 30) return (list[1]);
//     else if (a > 30 && a <= 40) return (list[2]);
//     else if (a > 40 && a <= 50) return (list[3]);
//     else if (a > 50 && a <= 60) return (list[4]);
//     else {dev
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

