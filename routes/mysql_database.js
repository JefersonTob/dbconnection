/*Nodejs BackEnd API's for CRM Application                 
Bradford Technologies, Inc.            
All Rights Reserved                    
Source Code Copyrighted © 2016 by Bradford Technologies, Inc. 
This js file is responsible for connect with CRM Mysql Database.*/  

var mysql = require("mysql");

//* localhost development machine
/*var pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "delphi",
    database: "btinspection",
    insecureAuth : true,
    freezeTableName:true,
    multipleStatements: true,
    connectionLimit: 100
});*/

var pool = mysql.createPool({
    host: "35.184.214.45",
    user: "admin",
    password: "1bradford!",
    database: "test_db",
    insecureAuth : true,
    freezeTableName:true,
    multipleStatements: true,
    connectionLimit: 100
});


exports.getConnection = function(callback) {
  pool.getConnection(function(err, conn) {
    if(err) {
      return callback(err);
    }
    callback(err, conn);
  });
};