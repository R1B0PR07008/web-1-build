const fs = require("fs");
fs.readFile("data.csv", "utf-8", (err, data) => {
  if (err) console.log(err);
  else ;
});

// this doesn't work !!!!!!🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬

let Username = 'test';
let Password = 'test2p';

user = 'Username,Password \n' + Username + ',' + Password;
console.log('USER \n' + user + '\n')

console.log('DATA \n' + data + '\n')

// if ( === user) {
//   console.log('You are in!' + '\n')
// } else {
//   console.log('You are not in!' + '\n')
// }


// if (document.URL.includes("login.html")) {

//     function username() {
//         let username = document.getElementById("Username-Login").value;
//         return username
//     };
//     function password() {
//         let password = document.getElementById("Password-Login").value;
//         return password
//     };

//     document.getElementById("BTN-1-LGIN").onclick = DB(username(), password());
// };
  
