const mysql = require('mysql')

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'peco',
    password: '123',
    database: 'testenode'
})

function createTable(conn) {
    const sql = "CREATE TABLE IF NOT EXISTS Clientes (\n" +
        "ID int NOT NULL AUTO_INCREMENT, \n" +
        "Nome varchar(150) NOT NULL, \n" + 
        "CPF char(11) NOT NULL, \n" +
        "PRIMARY KEY (ID) \n" +
        ");"

    conn.query(sql, function (error, results, fields) {
        if(error) return console.log(error);
        console.log('criou a tabela!');
    })
}

function addRows(conn) {
    const sql = "INSERT INTO Clients(Nome, CPF) values ?"
    const values = [
        ['teste1', '12345678955'],
        ['teste2', '78945612311'],
        ['teste3', '45678912355']
    ]

    conn.query(sql, [values], function (error, results, fields) {
        if(error) return console.log(error) 
        console.log('adicionou registros!')
        conn.end();
    })
}