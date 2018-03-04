var mysql      = require('mysql');  
var connection = mysql.createConnection({  
  host     : 'localhost',  
  user     : 'root',  
  password : '',  
  database : 'mycompany'  
});  
  
connection.connect();  
  
connection.query('SELECT name from user', function(err, rows, fields) {  
  if (err) {  
    console.log(err);  
    return;  
  };  
  
  console.log('The solution is: ', rows[0].name);  
});  
  
connection.end(); 
