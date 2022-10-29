function DB(username, password) {
    const sqlite3 = require('sqlite3').Database();
    
    let sql = 'INSERT INTO userData(Username, Password) VALUES(?,?)';
    
    // !open database in memory
    let db = new sqlite3.Database('./User-DATA-DB.sqlite', sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Connected to the database.');
    });
    
    db.run("CREATE TABLE IF NOT EXISTS userData (Username, Password)");
    
    //   //!Variables for INPUT
    let UserName = username;
    let Password = password;  
    
    console.log('btn-register-1 Pressed');
    sql = 'INSERT INTO userData(Username, Password) VALUES(?,?)';
      
    db.run(
    sql, 
    [UserName, Password], 
    (err) => {
    if (err) return console.error(err.message)
        
    console.log('DATA ADDED')
    }); 
    
    sql = 'SELECT * FROM userData';
    
    
    
    db.all(sql, [], (err, rows)=>{
      if (err) return console.error(err.message)
    
      rows.forEach(row => {
        console.log(row)
      });
    })
    
    // !close the database connection
    db.close((err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Close the database connection.');
    });
    };
    

if (document.URL.includes("login.html")) {

    function username() {
        let username = document.getElementById("Username-Login").value;
        return username
    };
    function password() {
        let password = document.getElementById("Password-Login").value;
        return password
    };

    document.getElementById("BTN-1-LGIN").onclick = DB(username(), password());
  
};