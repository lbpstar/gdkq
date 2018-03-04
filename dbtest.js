var db = require('./conn');  
var sql = 'SELECT name from user';  
db.query(sql, function(err, rows, fields){  
    if (err) {  
        console.log(err);  
        return;  
    }  
    console.log('name : ', rows[0].name);  
});  