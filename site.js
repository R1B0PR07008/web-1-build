// *setting up database for username,psw,profile img, ect... AND setting up login/register functions
console.log("hi, welcome to WEB-1. I see you're looking at the code. I wouldn't really trust it since it is my first website but you can get some inspiration from it.");
function getIdP(id, ih) {
    document.getElementById(id).innerHTML=ih
}
function getClassP(id,ih) {
    document.getElementsByClassName(id).innerHTML= ih
}

// const sqlite3 = require('sqlite3')
// let sql = 'INSERT INTO userData(Username, Password) VALUES(?,?,?,?,?)';
// let row3 = 'SELECT User-ID FROM userDATA'

// function userId() {
//   let userId = row3
//   userId++ 
//   return userId
// }

// !open database in memory
// let db = new sqlite3.Database('./User-DATA-DB.db', sqlite3.OPEN_READWRITE, (err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Connected to the database.');
// });

// if (document.URL.includes('register.html')){
  
//   //!Variables for INPUT
//   let Email = document.getElementById("Email-register").value || 'UNDEFINED';
//   let Name = document.getElementById("Name-register").value || 'UNDEFINED';
//   let UserName = document.getElementById("Username-register").value || 'UNDEFINED';
//   let Password = document.getElementById("Password-register").value || 'UNDEFINED';  
  
//   document.getElementsByName('btn-register-1').onclick = function () {
//     console.log('btn-register-1 Pressed');
//     sql = 'INSERT INTO userData(Username, Password, User-ID, Name, EMAIL) VALUES(?,?,?,?,?)';
  
//     db.run(
//     sql, 
//     [UserName, Password, userId, Name, Email], 
//     (err) => {
//     if (err) return console.error(err.message)
    
//     console.log('DATA ADDED')
//     }); 
//   };
// };



// sql = 'SELECT * FROM userData';

// db.all(sql, [], (err, rows)=>{
//   if (err) return console.error(err.message)

//   rows.forEach(row => {
//     console.log(row)
//   });
// })

// // !close the database connection
// db.close((err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });

//* app code below, database code above

//! Page DATA

//* LOGIN AND REGISTER PAGES
// if (document.URL.includes("login.html")) {
//  let empty = true 
// }

//* OTHER PAGES

if (document.URL.includes("len.html")) {
    console.log("you are in the len page");
    function Hide(UNIT) {
        let un = 'undefined';
        if (UNIT === un ) {
            document.getElementsByClassName("ans-text").visibility = "hidden";
            document.getElementById('ans-text').style.visibility = "hidden";
        } if (
            UNIT === 'm' || UNIT === 'M' ||
            UNIT === 'km' || UNIT === 'KM' || UNIT === 'Km' || UNIT === 'kM' ||
            UNIT === 'cm' || UNIT === 'CM' || UNIT === 'Cm' || UNIT === 'cM' ||
            UNIT === 'ft' || UNIT === 'FT' || UNIT === 'Ft' || UNIT === 'fT' ||
            UNIT === 'yd' || UNIT === 'YD' || UNIT === 'Yd' || UNIT === 'yD' ||
            UNIT === 'mi' || UNIT === 'MI' || UNIT === 'Mi' || UNIT === 'mI' ||
            UNIT === 'in' || UNIT === 'IN' || UNIT === 'iN' || UNIT === 'In'
        ) {
            document.getElementById('BTN-1-LEN-IF').style.visibility = "hidden";
            document.getElementById('ans-text').style.visibility = "visible";
        };
    };
    let UNIT = document.getElementById('UNIT-LEN').value || 'undefined';
    Hide(UNIT);

    function Len() {
        let NUM = document.getElementById('NUM-LEN').value || 1;
        let UNIT = document.getElementById('UNIT-LEN').value || 'undefined';
        console.log("btn 'BTN-1-LEN' pressed.");
        console.log(NUM)
        console.log(UNIT)
        if (UNIT === 'm' || UNIT === 'M') {

            document.getElementById("len-1-text").innerHTML = "M to KM";
            document.getElementById("len-2-text").innerHTML = "M to CM";
            document.getElementById("len-3-text").innerHTML = "M to FT";
            document.getElementById("len-4-text").innerHTML = "M to YD";
            document.getElementById("len-5-text").innerHTML = "M to MI";
            document.getElementById("len-6-text").innerHTML = "M to IN";

            document.getElementById("len-7-text").innerHTML = "M to KM";
            document.getElementById("len-8-text").innerHTML = "M to CM";
            document.getElementById("len-9-text").innerHTML = "M to FT";
            document.getElementById("len-10-text").innerHTML = "M to YD";
            document.getElementById("len-11-text").innerHTML = "M to MI";
            document.getElementById("len-12-text").innerHTML = "M to IN";


            document.getElementById("01-len").innerHTML = (NUM / 1000);
            document.getElementById("02-len").innerHTML = (NUM * 100);
            document.getElementById("03-len").innerHTML = (NUM * 3.28);
            document.getElementById("04-len").innerHTML = (NUM * 1.094);
            document.getElementById("05-len").innerHTML = (NUM / 1809);
            document.getElementById("06-len").innerHTML = (NUM * 39.37);
            document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

            document.getElementById("len-1-formula").innerHTML = "/ 1000";
            document.getElementById("len-2-formula").innerHTML = "* 100";
            document.getElementById("len-3-formula").innerHTML = "*3.28";
            document.getElementById("len-4-formula").innerHTML = "* 1.094";
            document.getElementById("len-5-formula").innerHTML = "/ 1809";
            document.getElementById("len-6-formula").innerHTML = "* 39.37";

            Hide(UNIT)
        } if (UNIT === 'km' || UNIT === 'KM' || UNIT === 'Km' || UNIT === 'kM') {
            document.getElementById("len-1-text").innerHTML = "KM to M:";
            document.getElementById("len-2-text").innerHTML = "KM to CM:";
            document.getElementById("len-3-text").innerHTML = "KM to FT:";
            document.getElementById("len-4-text").innerHTML = "KM to YD:";
            document.getElementById("len-5-text").innerHTML = "KM to MI:";
            document.getElementById("len-6-text").innerHTML = "KM to IN:";

            document.getElementById("len-7-text").innerHTML = "KM to M:";
            document.getElementById("len-8-text").innerHTML = "KM to CM:";
            document.getElementById("len-9-text").innerHTML = "KM to FT:";
            document.getElementById("len-10-text").innerHTML ="KM to YD:";
            document.getElementById("len-11-text").innerHTML ="KM to MI:";
            document.getElementById("len-12-text").innerHTML ="KM to IN:";


            document.getElementById("01-len").innerHTML = (NUM * 1000  );
            document.getElementById("02-len").innerHTML = (NUM * 100000);
            document.getElementById("03-len").innerHTML = (NUM * 3281  );
            document.getElementById("04-len").innerHTML = (NUM * 1094  );
            document.getElementById("05-len").innerHTML = (NUM / 1.609 );
            document.getElementById("06-len").innerHTML = (NUM * 39370 );
            document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

            document.getElementById("len-1-formula").innerHTML = "* 1000  ";
            document.getElementById("len-2-formula").innerHTML = "* 100000";
            document.getElementById("len-3-formula").innerHTML = "* 3281  ";
            document.getElementById("len-4-formula").innerHTML = "* 1094  ";
            document.getElementById("len-5-formula").innerHTML = "/ 1.609 ";
            document.getElementById("len-6-formula").innerHTML = "* 39370 ";

            Hide(UNIT)
        } if (UNIT === 'cm' || UNIT === 'CM' || UNIT === 'Cm' || UNIT === 'cM') {
            document.getElementById("len-1-text").innerHTML = "CM to M:";
            document.getElementById("len-2-text").innerHTML = "CM to KM:";
            document.getElementById("len-3-text").innerHTML = "CM to FT:";
            document.getElementById("len-4-text").innerHTML = "CM to YD:";
            document.getElementById("len-5-text").innerHTML = "CM to MI:";
            document.getElementById("len-6-text").innerHTML = "CM to IN:";

            document.getElementById("len-7-text").innerHTML = "CM to M:";
            document.getElementById("len-8-text").innerHTML = "CM to KM:";
            document.getElementById("len-9-text").innerHTML = "CM to FT:";
            document.getElementById("len-10-text").innerHTML ="CM to YD:";
            document.getElementById("len-11-text").innerHTML ="CM to MI:";
            document.getElementById("len-12-text").innerHTML ="CM to IN:";


            document.getElementById("01-len").innerHTML = (NUM / 100   );
            document.getElementById("02-len").innerHTML = (NUM / 1e+6  );
            document.getElementById("03-len").innerHTML = (NUM / 30.48 );
            document.getElementById("04-len").innerHTML = (NUM / 41.44 );
            document.getElementById("05-len").innerHTML = (NUM / 160934);
            document.getElementById("06-len").innerHTML = (NUM / 2.54  );
            document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

            document.getElementById("len-1-formula").innerHTML = "/ 100   ";
            document.getElementById("len-2-formula").innerHTML = "/ 1e+6  ";
            document.getElementById("len-3-formula").innerHTML = "/ 30.48 ";
            document.getElementById("len-4-formula").innerHTML = "/ 41.44 ";
            document.getElementById("len-5-formula").innerHTML = "/ 160934";
            document.getElementById("len-6-formula").innerHTML = "/ 2.54  ";

            Hide(UNIT)
        } if (UNIT === 'ft' || UNIT === 'FT' || UNIT === 'Ft' || UNIT === 'fT') {
            document.getElementById("len-1-text").innerHTML = "FT to M:";
            document.getElementById("len-2-text").innerHTML = "FT to KM:";
            document.getElementById("len-3-text").innerHTML = "FT to CM:";
            document.getElementById("len-4-text").innerHTML = "FT to YD:";
            document.getElementById("len-5-text").innerHTML = "FT to MI:";
            document.getElementById("len-6-text").innerHTML = "FT to IN:";

            document.getElementById("len-7-text").innerHTML = "FTto M:";
            document.getElementById("len-8-text").innerHTML = "FTto KM:";
            document.getElementById("len-9-text").innerHTML = "FTto CM:";
            document.getElementById("len-10-text").innerHTML ="FTto YD:";
            document.getElementById("len-11-text").innerHTML ="FTto MI:";
            document.getElementById("len-12-text").innerHTML ="FTto IN:";


            document.getElementById("01-len").innerHTML = (NUM * 3.281 );
            document.getElementById("02-len").innerHTML = (NUM / 3281  );
            document.getElementById("03-len").innerHTML = (NUM * 30.48 );
            document.getElementById("04-len").innerHTML = (NUM * 3     );
            document.getElementById("05-len").innerHTML = (NUM / 5280  );
            document.getElementById("06-len").innerHTML = (NUM * 12    );
            document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

            document.getElementById("len-1-formula").innerHTML = "* 3.281 ";
            document.getElementById("len-2-formula").innerHTML = "/ 3281  ";
            document.getElementById("len-3-formula").innerHTML = "* 30.48 ";
            document.getElementById("len-4-formula").innerHTML = "* 3     ";
            document.getElementById("len-5-formula").innerHTML = "/ 5280  ";
            document.getElementById("len-6-formula").innerHTML = "* 12    ";

            Hide(UNIT)
        } if (UNIT === 'yd' || UNIT === 'YD' || UNIT === 'Yd' || UNIT === 'yD') {
            document.getElementById("len-1-text").innerHTML = "YD to M:";
            document.getElementById("len-2-text").innerHTML = "YD to KM:";
            document.getElementById("len-3-text").innerHTML = "YD to CM:";
            document.getElementById("len-4-text").innerHTML = "YD to FT:";
            document.getElementById("len-5-text").innerHTML = "YD to MI:";
            document.getElementById("len-6-text").innerHTML = "YD to IN:";

            document.getElementById("len-7-text").innerHTML = "YD to M:";
            document.getElementById("len-8-text").innerHTML = "YD to KM:";
            document.getElementById("len-9-text").innerHTML = "YD to CM:";
            document.getElementById("len-10-text").innerHTML ="YD to FT:";
            document.getElementById("len-11-text").innerHTML ="YD to MI:";
            document.getElementById("len-12-text").innerHTML ="YD to IN:";


            document.getElementById("01-len").innerHTML = (NUM * 1.094 );
            document.getElementById("02-len").innerHTML = (NUM / 1094  );
            document.getElementById("03-len").innerHTML = (NUM * 91.44 );
            document.getElementById("04-len").innerHTML = (NUM * 3     );
            document.getElementById("05-len").innerHTML = (NUM / 1760  );
            document.getElementById("06-len").innerHTML = (NUM / 12    );
            document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

            document.getElementById("len-1-formula").innerHTML = "* 1.094 ";
            document.getElementById("len-2-formula").innerHTML = "/ 1094  ";
            document.getElementById("len-3-formula").innerHTML = "* 91.44 ";
            document.getElementById("len-4-formula").innerHTML = "* 3     ";
            document.getElementById("len-5-formula").innerHTML = "/ 1760  ";
            document.getElementById("len-6-formula").innerHTML = "/ 12    ";

            Hide(UNIT)
        } if (UNIT === 'mi' || UNIT === 'MI' || UNIT === 'Mi' || UNIT === 'mI') {
            document.getElementById("len-1-text").innerHTML = "MI to M:";
            document.getElementById("len-2-text").innerHTML = "MI to KM:";
            document.getElementById("len-3-text").innerHTML = "MI to CM:";
            document.getElementById("len-4-text").innerHTML = "MI to FT:";
            document.getElementById("len-5-text").innerHTML = "MI to YD:";
            document.getElementById("len-6-text").innerHTML = "MI to IN:";

            document.getElementById("len-7-text").innerHTML = "MI to M:";
            document.getElementById("len-8-text").innerHTML = "MI to KM:";
            document.getElementById("len-9-text").innerHTML = "MI to CM:";
            document.getElementById("len-10-text").innerHTML ="MI to FT:";
            document.getElementById("len-11-text").innerHTML ="MI to YD:";
            document.getElementById("len-12-text").innerHTML ="MI to IN:";


            document.getElementById("01-len").innerHTML = (NUM * 1609   );
            document.getElementById("02-len").innerHTML = (NUM * 1.609 );
            document.getElementById("03-len").innerHTML = (NUM * 160934);
            document.getElementById("04-len").innerHTML = (NUM * 5280  );
            document.getElementById("05-len").innerHTML = (NUM * 1760  );
            document.getElementById("06-len").innerHTML = (NUM * 63360 );
            document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

            document.getElementById("len-1-formula").innerHTML = "* 1609  ";
            document.getElementById("len-2-formula").innerHTML = "* 1.609 ";
            document.getElementById("len-3-formula").innerHTML = "* 160934";
            document.getElementById("len-4-formula").innerHTML = "* 5280  ";
            document.getElementById("len-5-formula").innerHTML = "* 1760  ";
            document.getElementById("len-6-formula").innerHTML = "* 63360 ";

            Hide(UNIT)
        } if (UNIT === 'in' || UNIT === 'IN' || UNIT === 'iN' || UNIT === 'In') {
            document.getElementById("len-1-text").innerHTML = "IN to M:";
            document.getElementById("len-2-text").innerHTML = "IN to KM:";
            document.getElementById("len-3-text").innerHTML = "IN to CM:";
            document.getElementById("len-4-text").innerHTML = "IN to FT:";
            document.getElementById("len-5-text").innerHTML = "IN to YD:";
            document.getElementById("len-6-text").innerHTML = "IN to MI:";

            document.getElementById("len-7-text").innerHTML = "IN to M:";
            document.getElementById("len-8-text").innerHTML = "IN to KM:";
            document.getElementById("len-9-text").innerHTML = "IN to CM:";
            document.getElementById("len-10-text").innerHTML ="IN to FT:";
            document.getElementById("len-11-text").innerHTML ="IN to YD:";
            document.getElementById("len-12-text").innerHTML ="IN to MI:";


            document.getElementById("01-len").innerHTML = (NUM / 39.37 );
            document.getElementById("02-len").innerHTML = (NUM / 39370 );
            document.getElementById("03-len").innerHTML = (NUM * 2.54  );
            document.getElementById("04-len").innerHTML = (NUM / 12    );
            document.getElementById("05-len").innerHTML = (NUM / 36    );
            document.getElementById("06-len").innerHTML = (NUM / 63360 );
            document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

            document.getElementById("len-1-formula").innerHTML = "/ 39.37 ";
            document.getElementById("len-2-formula").innerHTML = "/ 39370 ";
            document.getElementById("len-3-formula").innerHTML = "* 2.54  ";
            document.getElementById("len-4-formula").innerHTML = "/ 12    ";
            document.getElementById("len-5-formula").innerHTML = "/ 36    ";
            document.getElementById("len-6-formula").innerHTML = "/ 63360 ";

            Hide(UNIT)
        };
    };
};



