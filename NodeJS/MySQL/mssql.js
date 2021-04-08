var Connection = require('tedious').Connection;  
    var config = {  
        server: 'curts-mssql-server.database.windows.net',  //update me
        authentication: {
            type: 'default',
            options: {
                userName: 'curt', //update me
                password: 'Macintosh1'  //update me
            }
        },
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: true,
            database: 'curts-mssql-database'  //update me
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.
        console.log("Connected");  
    });
    
    connection.connect();